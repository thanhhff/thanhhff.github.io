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
