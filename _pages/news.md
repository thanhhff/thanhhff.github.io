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
{% assign first_month_done = false %}
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
    <div class="nt-month-sep">
      <div class="nt-dot"></div>
      {{ item.date | date: "%B" }}
      {% if first_month_done == false %}<span class="nt-new-badge">✦ New</span>{% assign first_month_done = true %}{% endif %}
    </div>
    {% assign prev_month = mo %}
  {% endif %}
  <div class="nt-item">
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
  font-size: 1.4rem;
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

/* ── Month separator with dot ── */
.nt-month-sep {
  display: flex;
  align-items: center;
  gap: .6rem;
  font-size: .80rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--global-text-color-light);
  padding: .6rem 0 .4rem 1.2rem;
  margin-bottom: .1rem;
  position: relative;
  z-index: 1;
}
.nt-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--global-theme-color);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--global-theme-color) 18%, transparent);
}

/* ── Year group — continuous spine line ── */
.nt-items {
  position: relative;
}
.nt-items::before {
  content: '';
  position: absolute;
  left: calc(1.2rem + 4px);
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--global-divider-color);
  z-index: 0;
}

/* ── Item row ── */
.nt-item {
  padding-left: calc(1.2rem + 10px + .6rem);
  margin-bottom: .65rem;
  position: relative;
}

/* Content card */
.nt-body {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 10px;
  padding: .4rem .7rem;
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

/* ── "New" badge on the latest month ── */
.nt-new-badge {
  font-size: .62rem;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #fff;
  background: #e53935;
  border-radius: 20px;
  padding: .15rem .55rem;
  margin-left: .25rem;
  vertical-align: middle;
}
</style>
