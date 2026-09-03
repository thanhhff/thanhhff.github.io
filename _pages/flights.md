---
layout: page
title: ✈
nav_title: "✈&#xFE0E;"
permalink: /flights/
nav: true
_styles: ".post-title, .post-description { display: none; }"
nav_order: 5
---

<!-- Preconnect to speed up tile loading once map is requested -->
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="preconnect" href="https://basemaps.cartocdn.com" crossorigin>

{% assign fd = site.data.flights %}
<!-- ── Hero ── -->
<div class="fl-hero">
  <div>
    <div class="fl-hero-title">✈&#xFE0E; Upcoming Flights</div>
    <div class="fl-hero-sub">Loading…</div>
  </div>
  <div class="fl-hero-stats" style="opacity:0;transition:opacity .15s ease">
    <div class="fl-hstat"><div class="fl-hstat-v" id="hs-airtime">—</div><div class="fl-hstat-l">In the air</div></div>
    <div class="fl-hstat"><div class="fl-hstat-v" id="hs-countries">—</div><div class="fl-hstat-l">Countries</div></div>
    <div class="fl-hstat"><div class="fl-hstat-v" id="hs-airlines">—</div><div class="fl-hstat-l">Airlines</div></div>
  </div>
</div>


<!-- ── Map ── -->
<div id="fl-map" style="display:flex;align-items:center;justify-content:center;color:var(--global-text-color-light);font-size:.85rem;letter-spacing:.05em;">Loading map…</div>
<div class="fl-legend">
  {% for leg in fd.legend %}
  <span class="fl-leg" style="--c:{{ leg.color }}">● {{ leg.label }}</span>
  {% endfor %}
</div>

<!-- ── Trip cards ── -->
{% assign trips = fd.trips %}
<div class="fl-trips" style="opacity:0;transition:opacity .15s ease">
{% for trip in trips %}
<div class="fl-trip">
  <div class="fl-trip-header">
    <span class="fl-trip-icon">{{ trip.icon }}</span>
    <div class="fl-trip-info">
      <div class="fl-trip-name">{{ trip.name }}</div>
      <div class="fl-trip-dates">{{ trip.dates }}</div>
    </div>
    <span class="fl-trip-count">{{ trip.flights.size }} flight{% if trip.flights.size > 1 %}s{% endif %}</span>
  </div>

  <div class="fl-flights">
  {% for fl in trip.flights %}
  {% assign ac = fl.number | slice: 0, 2 %}
  <div class="gf-card" data-date="{{ fl.date }}">

    <!-- Row 1: airline + date + actions -->
    <div class="gf-top">
      <div class="gf-airline-row">
        <img src="https://www.gstatic.com/flights/airline_logos/70px/{{ ac }}.png"
             alt="{{ fl.airline }}" class="gf-logo" onerror="this.style.display='none'"/>
        <span class="gf-airline-name">{{ fl.airline }}</span>
        <span class="gf-flight-num">{{ fl.number }}</span>
      </div>
      <div class="gf-top-right">
        <span class="gf-date">{{ fl.date }}</span>
        <span class="gf-status"></span>
        <a href="https://www.google.com/search?q={{ fl.number | url_encode }}+flight+status+{{ fl.date | url_encode }}" target="_blank" rel="noopener noreferrer" class="gf-btn">Google ↗&#xFE0E;</a>
      </div>
    </div>

    <!-- Row 2: route -->
    <div class="gf-route">
      <div class="gf-stop">
        <div class="gf-time">{{ fl.from_time }}<span class="gf-tz">{{ fl.from_tz }}</span></div>
        <div class="gf-code">{{ fl.from_code }}</div>
        <div class="gf-city">{{ fl.from_city }}</div>
      </div>

      <div class="gf-connector">
        <div class="gf-nonstop">{{ fl.duration }}</div>
        <div class="gf-line">
          <div class="gf-dot"></div>
          <div class="gf-bar"></div>
          <span class="gf-plane">✈&#xFE0E;</span>
          <div class="gf-bar"></div>
          <div class="gf-dot"></div>
        </div>
        <div class="gf-terminal">{{ fl.aircraft }}</div>
      </div>

      <div class="gf-stop gf-stop--right">
        <div class="gf-time">{{ fl.to_time }}<span class="gf-tz">{{ fl.to_tz }}</span></div>
        <div class="gf-code">{{ fl.to_code }}</div>
        <div class="gf-city">{{ fl.to_city }}</div>
      </div>
    </div>

  </div>
  {% endfor %}
  </div>
</div>
{% endfor %}
</div>

<script>
/* ── Auto-hide past flights & update hero stats ── */
var AP_COUNTRY = { {% for ap in fd.airports %}'{{ ap[0] }}':'{{ ap[1].country }}',{% endfor %} };
(function () {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  /* Hide past cards; set status badge on visible ones */
  document.querySelectorAll('.gf-card').forEach(function (card) {
    var d = new Date(card.getAttribute('data-date'));
    d.setHours(0, 0, 0, 0);
    if (d < today) {
      card.style.display = 'none';
    } else {
      var badge = card.querySelector('.gf-status');
      if (badge) {
        var isToday = d.getTime() === today.getTime();
        badge.textContent = isToday ? 'On Time' : 'Scheduled';
        badge.className = 'gf-status ' + (isToday ? 'gf-status--ontime' : 'gf-status--scheduled');
      }
    }
  });

  /* Hide trip groups where all flights are past */
  document.querySelectorAll('.fl-trip').forEach(function (trip) {
    if (!trip.querySelector('.gf-card:not([style*="display: none"])'))
      trip.style.display = 'none';
  });

  /* Collect stats from remaining visible cards */
  var visible = Array.from(document.querySelectorAll('.gf-card:not([style*="display: none"])'));
  var airports = new Set();
  var airlines = new Set();
  var countries = new Set();
  var dates = [];
  var totalMins = 0;

  visible.forEach(function (card) {
    dates.push(new Date(card.getAttribute('data-date')));
    card.querySelectorAll('.gf-code').forEach(function (c) {
      var code = c.textContent.trim();
      airports.add(code);
      if (AP_COUNTRY[code]) countries.add(AP_COUNTRY[code]);
    });
    var an = card.querySelector('.gf-airline-name');
    if (an) airlines.add(an.textContent.trim());
    /* parse duration "Xh Ym" or "Xh" or "Ym" */
    var dur = card.querySelector('.gf-nonstop');
    if (dur) {
      var hm = dur.textContent.match(/(\d+)h\s*(?:(\d+)m)?/);
      if (hm) totalMins += parseInt(hm[1] || 0) * 60 + parseInt(hm[2] || 0);
    }
  });

  /* Format total air time */
  var airH = Math.floor(totalMins / 60), airM = totalMins % 60;
  var airTime = airH + 'h' + (airM ? ' ' + airM + 'm' : '');
  var elAirtime = document.getElementById('hs-airtime');
  if (elAirtime) elAirtime.textContent = totalMins ? airTime : '—';
  var elCountries = document.getElementById('hs-countries');
  if (elCountries) elCountries.textContent = countries.size || '—';
  var elAirlines = document.getElementById('hs-airlines');
  if (elAirlines) elAirlines.textContent = airlines.size || '—';

  /* Build date range string e.g. "Jun – Oct 2026" or "Jun 2026 – Jan 2027" */
  var dateRange = '';
  if (dates.length) {
    dates.sort(function (a, b) { return a - b; });
    var first = dates[0], last = dates[dates.length - 1];
    if (first.getFullYear() === last.getFullYear()) {
      dateRange = MONTHS[first.getMonth()] + ' – ' + MONTHS[last.getMonth()] + ' ' + first.getFullYear();
    } else {
      dateRange = MONTHS[first.getMonth()] + ' ' + first.getFullYear() + ' – ' + MONTHS[last.getMonth()] + ' ' + last.getFullYear();
    }
  }

  /* Update hero subtitle */
  var sub = document.querySelector('.fl-hero-sub');
  if (sub && visible.length > 0) {
    sub.textContent = visible.length + ' flight' + (visible.length > 1 ? 's' : '') +
                      ' · ' + airports.size + ' airports' +
                      (dateRange ? ' · ' + dateRange : '');
  } else if (sub) {
    sub.textContent = 'No upcoming flights';
  }

  /* Reveal everything now that past flights are hidden and values are set */
  var tripsEl = document.querySelector('.fl-trips');
  if (tripsEl) tripsEl.style.opacity = '1';
  var statsEl = document.querySelector('.fl-hero-stats');
  if (statsEl) statsEl.style.opacity = '1';
})();
</script>

<script>
(function () {
  var mapEl = document.getElementById('fl-map');
  var loaded = false;

  function initMap() {
    if (loaded) return;
    loaded = true;

    /* Load Leaflet CSS */
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css';
    document.head.appendChild(css);

    /* Load Leaflet JS, then init */
    var js = document.createElement('script');
    js.src = 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js';
    js.onload = function () { buildMap(); };
    document.head.appendChild(js);
  }

  /* Trigger when map div enters viewport */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function(entries, obs) {
      if (entries[0].isIntersecting) { obs.disconnect(); initMap(); }
    }, { rootMargin: '200px' }).observe(mapEl);
  } else {
    initMap(); /* fallback for old browsers */
  }

  function buildMap() {
  var map = L.map('fl-map', {
    zoomControl: true, scrollWheelZoom: false, attributionControl: false, dragging: true
  });

  /* CARTO watermarks unauthenticated tiles, so the basemap key is required.
     It is domain-scoped and public by design, like any basemap key. */
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_2vci_1_3d45a4d1a13900cab830da2f', {
    subdomains: 'abcd', maxZoom: 18
  }).addTo(map);

  var AP = {
    {% for ap in fd.airports %}{{ ap[0] }}: { ll: [{{ ap[1].lat }}, {{ ap[1].lng }}], label: '{{ ap[0] }} · {{ ap[1].city }}' },
    {% endfor %}
  };

  /* Bearing (degrees) from point a to point b */
  function bearing(a, b) {
    var R = Math.PI / 180;
    var la = a[0]*R, lo1 = a[1]*R, lb = b[0]*R, lo2 = b[1]*R;
    var dLon = lo2 - lo1;
    var y = Math.sin(dLon) * Math.cos(lb);
    var x = Math.cos(la)*Math.sin(lb) - Math.sin(la)*Math.cos(lb)*Math.cos(dLon);
    return (Math.atan2(y, x) / R + 360) % 360;
  }

  /* Fix paths that cross the antimeridian (180°) so Leaflet draws east, not west */
  function fixAntimeridian(pts) {
    var out = [[pts[0][0], pts[0][1]]];
    for (var i = 1; i < pts.length; i++) {
      var dlng = pts[i][1] - out[i-1][1];
      var lng  = pts[i][1];
      if (dlng >  180) lng -= 360;
      if (dlng < -180) lng += 360;
      out.push([pts[i][0], lng]);
    }
    return out;
  }

  function gc(a, b) {
    var n = 80, D = Math.PI / 180;
    var f1=a[0]*D, l1=a[1]*D, f2=b[0]*D, l2=b[1]*D;
    var d = 2*Math.asin(Math.sqrt(Math.pow(Math.sin((f2-f1)/2),2)+Math.cos(f1)*Math.cos(f2)*Math.pow(Math.sin((l2-l1)/2),2)));
    if (!d) return [a,b];
    var pts = [];
    for (var i=0; i<=n; i++) {
      var t=i/n, A=Math.sin((1-t)*d)/Math.sin(d), B=Math.sin(t*d)/Math.sin(d);
      var x=A*Math.cos(f1)*Math.cos(l1)+B*Math.cos(f2)*Math.cos(l2);
      var y=A*Math.cos(f1)*Math.sin(l1)+B*Math.cos(f2)*Math.sin(l2);
      var z=A*Math.sin(f1)+B*Math.sin(f2);
      pts.push([Math.atan2(z,Math.sqrt(x*x+y*y))/D, Math.atan2(y,x)/D]);
    }
    return pts;
  }

  var allPts = [];
  var animLines = [];
  [
    {% for r in fd.map_routes %}{ from:'{{ r.from }}', to:'{{ r.to }}', color:'{{ r.color }}' },
    {% endfor %}
  ].forEach(function(r) {
    var pts = fixAntimeridian(gc(AP[r.from].ll, AP[r.to].ll));
    allPts = allPts.concat(pts);
    animLines.push(L.polyline(pts, { color: r.color, weight: 5, opacity: 0.9, noClip: true }).addTo(map));
  });

  var routeAPs = new Set([{% for r in fd.map_routes %}'{{ r.from }}','{{ r.to }}',{% endfor %}]);

  Object.keys(AP).forEach(function(k) {
    if (!routeAPs.has(k)) return;
    L.circleMarker(AP[k].ll, {
      radius: 7, fillColor: '#1a73e8', color: '#fff', weight: 2, fillOpacity: 1
    }).addTo(map).bindTooltip(AP[k].label, { className:'fl-tip', direction:'top', offset:[0,-10] });
  });

  var boundsPts = Array.from(routeAPs).filter(function(k){ return AP[k]; }).map(function(k){ return AP[k].ll; });
  {% for r in fd.map_routes %}
  if (AP['{{ r.from }}'] && AP['{{ r.to }}']) {
    var mid = fixAntimeridian(gc(AP['{{ r.from }}'].ll, AP['{{ r.to }}'].ll));
    boundsPts.push(mid[Math.floor(mid.length / 2)]);
  }
  {% endfor %}

  map.fitBounds(boundsPts, { padding: [35, 35] });

  /* Re-check size once CSS has fully settled, then re-fit */
  setTimeout(function(){
    map.invalidateSize();
    map.fitBounds(boundsPts, { padding: [35, 35] });
  }, 200);

  /* Keep responsive on window resize / orientation change */
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(function(){ map.invalidateSize(); map.fitBounds(boundsPts, { padding: [35, 35] }); }).observe(mapEl);
  } else {
    window.addEventListener('resize', function(){ map.invalidateSize(); map.fitBounds(boundsPts, { padding: [35, 35] }); });
  }

  /* Animate route lines drawing after map settles */
  setTimeout(function() {
    animLines.forEach(function(line, i) {
      var el = line.getElement();
      if (!el) return;
      var len = el.getTotalLength ? el.getTotalLength() : 2000;
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
      el.style.transition = 'stroke-dashoffset 1.2s ease-in-out ' + (i * 0.2) + 's';
      requestAnimationFrame(function() { el.style.strokeDashoffset = 0; });
    });
  }, 100);
  } /* end buildMap */
})();
</script>

<style>
  /* Hero */
  .fl-hero {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 1rem; margin-bottom: 1.4rem;
  }
  .fl-hero-title { font-size: 1.5rem; font-weight: 800; color: var(--global-text-color,#111); }
  .fl-hero-sub   { font-size: 0.9rem; color: var(--global-text-color-light,#888); margin-top:.2rem; }
  .fl-hero-stats { display:flex; gap:1.8rem; }
  .fl-hstat { text-align:center; }
  .fl-hstat-v { font-size:1.5rem; font-weight:800; color:var(--global-theme-color,#b509ac); line-height:1; }
  .fl-hstat-l { font-size:0.72rem; font-weight:600; text-transform:uppercase; letter-spacing:.07em; color:var(--global-text-color-light,#aaa); margin-top:.15rem; }

  /* Map */
  #fl-map {
    width:100%; height:380px;
    border-radius:14px; overflow:hidden;
    border:1px solid var(--global-divider-color); background:var(--global-card-bg-color);
    margin-bottom:.7rem;
  }

  /* Legend */
  .fl-legend { display:flex; gap:1.2rem; flex-wrap:wrap; margin-bottom:1.8rem; }
  .fl-leg { font-size:0.84rem; font-weight:600; color:var(--c); }

  /* Tooltip */
  .fl-tip {
    background:#111!important; color:#fff!important;
    border:none!important; border-radius:7px!important;
    font-size:0.8rem!important; padding:.3rem .6rem!important;
    box-shadow:0 2px 10px rgba(0,0,0,.5)!important;
  }
  .fl-tip::before { display:none!important; }

  /* Trips */
  .fl-trips { display:flex; flex-direction:column; gap:2.2rem; }
  .fl-trip-header {
    display:flex; align-items:center; gap:.7rem;
    margin-bottom:.85rem; padding-bottom:.65rem;
    border-bottom:1px solid var(--global-divider-color,#eee);
  }
  .fl-trip-icon { font-size:1.5rem; line-height:1; }
  .fl-trip-info  { flex:1; }
  .fl-trip-name  { font-size:1rem; font-weight:700; color:var(--global-text-color,#111); }
  .fl-trip-dates { font-size:.82rem; color:var(--global-text-color-light,#999); margin-top:.05rem; }
  .fl-trip-count {
    font-size:.73rem; font-weight:700; text-transform:uppercase; letter-spacing:.07em;
    color:var(--global-theme-color,#b509ac);
    background:color-mix(in srgb,var(--global-theme-color,#b509ac) 10%,transparent);
    border-radius:20px; padding:.2rem .65rem; white-space:nowrap;
  }

  /* ── Google Flights-style cards ── */
  .fl-flights { display:flex; flex-direction:column; gap:.6rem; }

  .gf-card {
    border:1px solid var(--global-divider-color);
    border-radius:12px;
    padding:1rem 1.2rem .9rem;
    background:var(--global-bg-color);
    box-shadow:0 1px 3px rgba(0,0,0,.06);
    transition:box-shadow .2s, border-color .2s;
  }
  .gf-card:hover {
    box-shadow:0 3px 14px rgba(0,0,0,.1);
    border-color:var(--global-text-color-light);
  }

  /* top row */
  .gf-top {
    display:flex; align-items:center; justify-content:space-between;
    margin-bottom:.85rem; gap:.5rem; flex-wrap:wrap;
  }
  .gf-airline-row { display:flex; align-items:center; gap:.5rem; }
  .gf-logo { height:20px; width:auto; object-fit:contain; }
  .gf-airline-name { font-size:.85rem; font-weight:500; color:var(--global-text-color); }
  .gf-flight-num {
    font-size:.78rem; font-weight:500;
    color:var(--global-text-color-light);
  }
  .gf-top-right { display:flex; align-items:center; gap:.5rem; flex-wrap:wrap; }
  .gf-date { font-size:.78rem; color:var(--global-text-color-light); }
  .gf-status { font-size:.72rem; font-weight:600; border-radius:4px; padding:.1rem .45rem; white-space:nowrap; }
  .gf-status--scheduled { color:#1e8e3e; background:rgba(30,142,62,.1); }
  .gf-status--ontime    { color:#1e8e3e; background:rgba(30,142,62,.1); }
  .gf-btn {
    font-size:.72rem; font-weight:600;
    color:var(--global-theme-color,#1a73e8);
    background:transparent;
    border:1px solid color-mix(in srgb,var(--global-theme-color,#1a73e8) 35%,transparent);
    border-radius:4px; padding:.1rem .45rem;
    text-decoration:none; white-space:nowrap; transition:background .15s;
  }
  .gf-btn:hover {
    background:color-mix(in srgb,var(--global-theme-color,#1a73e8) 8%,transparent);
    text-decoration:none;
  }

  /* route row */
  .gf-route {
    display:flex; align-items:center; gap:.6rem;
  }
  .gf-stop { flex:0 0 120px; width:120px; }
  .gf-stop--right { text-align:right; }
  .gf-time {
    font-size:1.45rem; font-weight:400;
    color:var(--global-text-color); line-height:1; letter-spacing:-.01em;
    white-space: nowrap;
  }
  .gf-tz { font-size:.75rem; color:var(--global-text-color-light); font-weight:400; display:block; margin-top:.2rem; }
  .gf-code {
    font-size:1rem; font-weight:700; color:var(--global-text-color); margin-top:.25rem;
  }
  .gf-city { display:none; }

  /* connector */
  .gf-connector { flex:1; text-align:center; min-width:0; padding:0 .4rem; }
  .gf-nonstop { font-size:.88rem; font-weight:500; color:var(--global-text-color-light); margin-bottom:.3rem; }
  .gf-line { display:flex; align-items:center; margin-bottom:.25rem; }
  .gf-dot {
    width:8px; height:8px; border-radius:50%; flex-shrink:0;
    border:2px solid var(--global-divider-color); background:var(--global-bg-color);
  }
  .gf-bar { flex:1; height:1.5px; background:var(--global-divider-color); }
  .gf-plane { font-size:.95rem; color:var(--global-text-color-light); padding:0 .2rem; font-variant-emoji: text; font-family: "Segoe UI Symbol", "Apple Symbols", "Symbol", sans-serif; }
  .gf-terminal { font-size:.80rem; color:var(--global-text-color-light); white-space:nowrap; text-align:center; display:block; width:100%; margin-top:.2rem; }

  @media (max-width:480px) {
    #fl-map { height:210px; }
    .fl-hero { flex-direction:column; align-items:flex-start; }
    .gf-time { font-size:1.15rem; }
    .gf-stop { min-width:60px; }
  }
</style>
