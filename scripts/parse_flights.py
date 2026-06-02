#!/usr/bin/env python3
"""
parse_flights.py
----------------
Reads _data/FlightyExport.csv and regenerates the `trips:` section of
_data/flights.yml.  Static config (airline_icao, airports, map_routes,
legend) is preserved exactly as-is.

Run manually:   python3 scripts/parse_flights.py
Auto-run:       pre-commit hook fires when FlightyExport.csv is staged.
"""

import csv
import sys
import re
from datetime import datetime, timedelta
from pathlib import Path

try:
    import yaml
except ImportError:
    print("ERROR: PyYAML not installed.  Run: pip install pyyaml", file=sys.stderr)
    sys.exit(1)

ROOT     = Path(__file__).parent.parent
CSV_PATH = ROOT / "_data" / "FlightyExport.csv"
YML_PATH = ROOT / "_data" / "flights.yml"

# ── Airline display names (ICAO code → full name) ─────────────────────────
AIRLINE_NAMES = {
    "CES": "China Eastern",
    "VJC": "VietJet Air",
    "ANA": "ANA",
    "JAL": "Japan Airlines",
    "VNA": "Vietnam Airlines",
    "JJP": "Jetstar Japan",
    "APJ": "Peach Aviation",
    "SNA": "StarFlyer",
    "DAL": "Delta Air Lines",
    "UAL": "United Airlines",
    "AAL": "American Airlines",
    "KAL": "Korean Air",
    "AAR": "Asiana Airlines",
    "SIA": "Singapore Airlines",
    "THA": "Thai Airways",
    "BAW": "British Airways",
    "AFR": "Air France",
    "DLH": "Lufthansa",
    "KLM": "KLM",
}

# ── Country flag emojis ────────────────────────────────────────────────────
COUNTRY_FLAGS = {
    "Japan": "🇯🇵", "China": "🇨🇳", "Germany": "🇩🇪",
    "Vietnam": "🇻🇳", "France": "🇫🇷", "United States": "🇺🇸",
    "South Korea": "🇰🇷", "Taiwan": "🇹🇼", "Singapore": "🇸🇬",
    "Thailand": "🇹🇭", "United Kingdom": "🇬🇧", "Netherlands": "🇳🇱",
    "Austria": "🇦🇹", "Italy": "🇮🇹", "Spain": "🇪🇸",
    "New Zealand": "🇳🇿", "Australia": "🇦🇺",
}


def cest_active(dt: datetime) -> bool:
    """True if Central European Summer Time (UTC+2) is active on dt."""
    year = dt.year
    def last_sunday(y, m):
        days_in = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
        days_in[2] = 29 if y % 4 == 0 and (y % 100 != 0 or y % 400 == 0) else 28
        d = datetime(y, m, days_in[m])
        return d - timedelta(days=(d.weekday() + 1) % 7)
    return last_sunday(year, 3).replace(hour=1) <= dt < last_sunday(year, 10).replace(hour=1)


def get_tz_offset(code: str, dt: datetime, airports: dict) -> int:
    """Return UTC offset in hours for airport `code` at datetime `dt`."""
    ap = airports.get(code, {})
    if "tz_summer" in ap and "tz_winter" in ap:
        return ap["tz_summer"] if cest_active(dt) else ap["tz_winter"]
    return ap.get("tz", 0)


def fmt_time(dt: datetime) -> str:
    """'2026-06-09T17:00' → '5:00 PM'"""
    h = dt.hour % 12 or 12
    suffix = "AM" if dt.hour < 12 else "PM"
    return f"{h}:{dt.minute:02d} {suffix}"


def fmt_tz(offset: int) -> str:
    sign = "+" if offset >= 0 else "-"
    return f"GMT{sign}{abs(offset)}"


def fmt_duration(minutes: float) -> str:
    h, m = divmod(int(round(minutes)), 60)
    return f"{h}h {m:02d}m"


def normalize_terminal(raw: str) -> str:
    raw = raw.strip()
    if not raw:
        return "—"
    if raw[0].isdigit():
        return f"T{raw}"
    return raw


def main():
    # ── Load existing flights.yml ────────────────────────────────────────
    with open(YML_PATH, "r", encoding="utf-8") as f:
        config = yaml.safe_load(f)

    airports  = config.get("airports", {})
    icao_map  = config.get("airline_icao", {})   # IATA → ICAO
    iata_map  = {v: k for k, v in icao_map.items()}  # ICAO → IATA

    # ── Parse CSV ────────────────────────────────────────────────────────
    flights = []
    with open(CSV_PATH, "r", encoding="utf-8-sig") as f:
        for row in csv.DictReader(f):
            if row.get("Canceled", "").lower() == "true":
                continue
            dep_str = row.get("Gate Departure (Scheduled)", "").strip()
            arr_str = row.get("Gate Arrival (Scheduled)", "").strip()
            if not dep_str:
                continue

            from_code = row["From"].strip()
            to_code   = row["To"].strip()

            dep_dt = datetime.fromisoformat(dep_str)
            arr_dt = datetime.fromisoformat(arr_str) if arr_str else None

            from_tz = get_tz_offset(from_code, dep_dt, airports)
            to_tz   = get_tz_offset(to_code, arr_dt or dep_dt, airports)

            dep_utc = dep_dt - timedelta(hours=from_tz)
            arr_utc = (arr_dt - timedelta(hours=to_tz)) if arr_dt else None
            duration = fmt_duration((arr_utc - dep_utc).total_seconds() / 60) if arr_utc else "—"

            airline_icao = row["Airline"].strip()
            flight_num   = row["Flight"].strip()
            iata         = iata_map.get(airline_icao, airline_icao[:2])

            from_city = airports.get(from_code, {}).get("city", from_code)
            to_city   = airports.get(to_code,   {}).get("city", to_code)

            flights.append({
                "number":    f"{iata}{flight_num}",
                "airline":   AIRLINE_NAMES.get(airline_icao, airline_icao),
                "date":      dep_dt.strftime("%b %-d, %Y"),
                "from_code": from_code,
                "from_city": from_city,
                "from_time": fmt_time(dep_dt),
                "from_tz":   fmt_tz(from_tz),
                "to_code":   to_code,
                "to_city":   to_city,
                "to_time":   fmt_time(arr_dt) if arr_dt else "—",
                "to_tz":     fmt_tz(to_tz),
                "duration":  duration,
                "terminal":  normalize_terminal(row.get("Dep Terminal", "")),
                # internal — stripped before YAML output
                "_dep_utc":  dep_utc,
                "_arr_utc":  arr_utc or dep_utc,
                "_date":     dep_dt.date(),
            })

    # ── Filter to today onwards and sort ─────────────────────────────────
    today    = datetime.utcnow().date()
    upcoming = sorted([f for f in flights if f["_date"] >= today],
                      key=lambda f: f["_dep_utc"])

    if not upcoming:
        print("  ℹ  No upcoming flights found in CSV.")
        config["trips"] = []
    else:
        # ── Group into trips ──────────────────────────────────────────────
        # A trip continues as long as consecutive flights connect (same airport)
        # within 36 hours of the previous arrival.
        groups = []
        current = [upcoming[0]]
        for fl in upcoming[1:]:
            prev = current[-1]
            gap_h = (fl["_dep_utc"] - prev["_arr_utc"]).total_seconds() / 3600
            if prev["to_code"] == fl["from_code"] and gap_h <= 36:
                current.append(fl)
            else:
                groups.append(current)
                current = [fl]
        groups.append(current)

        # ── Build YAML-ready trip list ────────────────────────────────────
        yml_trips = []
        for group in groups:
            first, last = group[0], group[-1]

            from_city = airports.get(first["from_code"], {}).get("city", first["from_code"])
            to_city   = airports.get(last["to_code"],   {}).get("city", last["to_code"])
            name = f"{from_city} → {to_city}"
            dest_country = airports.get(last["to_code"], {}).get("country", "")
            icon = COUNTRY_FLAGS.get(dest_country, "✈")

            d0, d1 = first["_dep_utc"], last["_dep_utc"]
            if d0.date() == d1.date():
                dates = d0.strftime("%b %-d, %Y")
            elif d0.year == d1.year and d0.month == d1.month:
                dates = f"{d0.strftime('%b %-d')}–{d1.strftime('%-d, %Y')}"
            else:
                dates = f"{d0.strftime('%b %-d')}–{d1.strftime('%b %-d, %Y')}"

            clean = [{k: v for k, v in fl.items() if not k.startswith("_")}
                     for fl in group]
            yml_trips.append({"name": name, "icon": icon, "dates": dates,
                              "flights": clean})

        config["trips"] = yml_trips
        print(f"  ✔ {len(upcoming)} upcoming flight(s) → {len(yml_trips)} trip(s)")

    # ── Write back: preserve config, replace trips section ───────────────
    # We re-serialise only the `trips` block to avoid reformatting the
    # hand-edited config sections above it.
    original = YML_PATH.read_text(encoding="utf-8")
    trips_yaml = yaml.dump(
        {"trips": config["trips"]},
        allow_unicode=True, default_flow_style=False,
        sort_keys=False, indent=2
    )

    # Replace from the `trips:` line to end-of-file
    marker = re.search(r"^trips:", original, re.MULTILINE)
    if marker:
        new_content = original[:marker.start()] + trips_yaml
    else:
        new_content = original.rstrip() + "\n\n" + trips_yaml

    YML_PATH.write_text(new_content, encoding="utf-8")
    print(f"  ✔ _data/flights.yml updated")


if __name__ == "__main__":
    main()
