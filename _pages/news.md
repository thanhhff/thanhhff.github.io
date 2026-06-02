---
layout: page
title: News
nav_title: news
permalink: /news/
nav: true
nav_order: 1
---

<div class="nt-feed">
{% assign news_items = site.news | reverse %}
{% assign prev_year = "" %}
{% assign prev_month = "" %}
{% assign in_group = false %}
{% for item in news_items %}
  {% assign yr = item.date | date: "%Y" %}
  {% assign mo = item.date | date: "%Y-%m" %}
  {% if yr != prev_year %}
    {% if in_group %}</div>{% endif %}
    <div class="nt-year-sep">{{ yr }}</div>
    <div class="nt-items">
    {% assign prev_year = yr %}
    {% assign prev_month = "" %}
    {% assign in_group = true %}
  {% endif %}
  {% if mo != prev_month %}
    <div class="nt-month-sep">{{ item.date | date: "%B" }}</div>
    {% assign prev_month = mo %}
  {% endif %}
  <div class="nt-item">
    <div class="nt-left">
      <span class="nt-day">{{ item.date | date: "%-d" }}</span>
    </div>
    <div class="nt-dot-col"><div class="nt-dot"></div></div>
    <div class="nt-body">
      {% if item.inline %}
        {{ item.content | emojify }}
      {% else %}
        <a class="nt-link" href="{{ item.url | relative_url }}">{{ item.title }}</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
{% if in_group %}</div>{% endif %}
</div>

<style>
.nt-feed { margin-top: 1.5rem; }

/* ── Year separator ── */
.nt-year-sep {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: .08em;
  color: var(--global-theme-color);
  display: flex;
  align-items: center;
  gap: .75rem;
  margin: 2rem 0 1.1rem;
}
.nt-year-sep::after {
  content: '';
  flex: 1;
  height: 1.5px;
  background: color-mix(in srgb, var(--global-theme-color) 22%, transparent);
}

/* ── Month separator ── */
.nt-month-sep {
  font-size: .75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--global-text-color-light);
  padding: .5rem 0 .4rem calc(2rem + .75rem + 20px + .75rem);
  margin-bottom: .1rem;
}

/* ── Year group ── */
.nt-items { position: relative; }

/* ── Item row ── */
.nt-item {
  display: grid;
  grid-template-columns: 2rem 20px 1fr;
  column-gap: .75rem;
  align-items: start;
  margin-bottom: .65rem;
  position: relative;
}

/* Date column */
.nt-left {
  text-align: right;
  padding-top: .28rem;
  user-select: none;
}
.nt-day {
  display: block;
  font-size: 1rem;
  font-weight: 800;
  color: var(--global-text-color);
  line-height: 1;
}

/* Dot — sits on top of the spine line */
.nt-dot-col {
  display: flex;
  justify-content: center;
  padding-top: .38rem;
  position: relative;
  z-index: 1;
}
.nt-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--global-theme-color);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--global-theme-color) 18%, transparent);
}

/* Content card */
.nt-body {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 10px;
  padding: .65rem .95rem;
  font-size: 1rem;
  line-height: 1.65;
}
.nt-body p { margin-bottom: .4rem; }
.nt-body p:last-child { margin-bottom: 0; }
.nt-link {
  font-weight: 600;
  color: var(--global-theme-color);
  text-decoration: none;
}
.nt-link:hover { text-decoration: underline; }

/* ── "New" badge on the latest item ── */
.nt-items:first-of-type .nt-item:first-of-type .nt-body::before {
  content: '✦ new';
  display: inline-block;
  font-size: .6rem;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #fff;
  background: var(--global-theme-color);
  border-radius: 20px;
  padding: .1rem .5rem;
  margin-bottom: .45rem;
  vertical-align: middle;
  animation: nt-pulse 2s ease-in-out infinite;
}
@keyframes nt-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: .55; }
}
</style>
