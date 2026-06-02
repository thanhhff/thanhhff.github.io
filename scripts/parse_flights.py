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


def nth_weekday(year, month, weekday, n):
    """Return the nth occurrence (1-based) of `weekday` (0=Mon…6=Sun) in year/month."""
    d = datetime(year, month, 1)
    first = (weekday - d.weekday()) % 7
    return d + timedelta(days=first + (n - 1) * 7)

def dst_active(dt: datetime, ap: dict) -> bool:
    """True if summer/DST offset should be used for airport ap at datetime dt."""
    if "tz_summer" not in ap or "tz_winter" not in ap:
        return False
    y = dt.year
    # EU: last Sunday March 01:00 UTC → last Sunday October 01:00 UTC
    # US: 2nd Sunday March 02:00 local → 1st Sunday November 02:00 local
    # Detect by longitude: rough heuristic (EU: lng 0–40, US: lng < -20)
    lng = ap.get("lng", 0)
    if lng < -20:  # Americas
        start = nth_weekday(y, 3, 6, 2)   # 2nd Sunday March
        end   = nth_weekday(y, 11, 6, 1)  # 1st Sunday November
    else:  # Europe / other
        def last_sunday(m):
            d = datetime(y, m, 28)
            return d + timedelta(days=(6 - d.weekday()) % 7)
        start = last_sunday(3)
        end   = last_sunday(10)
    return start <= dt < end


def get_tz_offset(code: str, dt: datetime, airports: dict) -> int:
    """Return UTC offset in hours for airport `code` at datetime `dt`."""
    ap = airports.get(code, {})
    if "tz_summer" in ap and "tz_winter" in ap:
        return ap["tz_summer"] if dst_active(dt, ap) else ap["tz_winter"]
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
                "aircraft":  row.get("Aircraft Type Name", "").strip() or "—",
                # internal — stripped before YAML output
                "_dep_utc":  dep_utc,
                "_arr_utc":  arr_utc or dep_utc,
                "_date":     dep_dt.date(),
            })

    # ── Sort all flights by departure ─────────────────────────────────────
    all_flights = sorted(flights, key=lambda f: f["_dep_utc"])

    if not all_flights:
        print("  ℹ  No flights found in CSV.")
        config["trips"] = []
    else:
        # ── Group into trips ──────────────────────────────────────────────
        # A trip continues as long as consecutive flights connect (same airport)
        # within 36 hours of the previous arrival.
        groups = []
        current = [all_flights[0]]
        for fl in all_flights[1:]:
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
        print(f"  ✔ {len(all_flights)} flight(s) → {len(yml_trips)} trip(s)")

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
