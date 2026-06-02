---
layout: page
title: Blog
nav_title: blog
permalink: /blog/
nav: true
nav_order: 2
---

<div class="nt-feed">
{% assign posts = site.posts %}
{% assign prev_year = "" %}
{% assign prev_month = "" %}
{% assign in_group = false %}
{% assign first_month_done = false %}
{% for post in posts %}
{% assign yr = post.date | date: "%Y" %}
{% assign mo = post.date | date: "%Y-%m" %}
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
{{ post.date | date: "%B" }}
{% if first_month_done == false %}<span class="nt-new-badge">✦ New</span>{% assign first_month_done = true %}{% endif %}
</div>
{% assign prev_month = mo %}
{% endif %}
<div class="nt-item">
<div class="nt-body">
{% if post.image %}
{% assign thumb_path = post.image | replace: '.JPG', '.jpg' | replace: '.JPEG', '.jpg' | replace: '.PNG', '.jpg' | replace: '.jpeg', '.jpg' %}
{% assign thumb_dir = thumb_path | split: '/' %}
{% assign thumb_file = thumb_dir | last | prepend: 'thumbs/' %}
{% assign thumb_base = thumb_path | split: '/' | reverse | shift | reverse | join: '/' %}
{% assign thumb_src = thumb_file | prepend: '/' | prepend: thumb_base %}
<div class="bl-card">
<img src="{{ thumb_src | relative_url }}" alt="{{ post.title }}" class="bl-thumb" loading="lazy" decoding="async"
onerror="this.src='{{ post.image | relative_url }}'"/>
<div class="bl-info">
<a class="bl-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
<div class="bl-meta">
<span class="bl-date">{{ post.date | date: "%b %-d" }}</span>
{% if post.categories %}
{% assign cat = post.categories | first %}
<span class="bl-cat bl-cat-{{ cat }}">{{ cat }}</span>
{% endif %}
</div>
</div>
</div>
{% else %}
<a class="bl-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
<div class="bl-meta">
<span class="bl-date">{{ post.date | date: "%b %-d" }}</span>
{% if post.categories %}
{% assign cat = post.categories | first %}
<span class="bl-cat bl-cat-{{ cat }}">{{ cat }}</span>
{% endif %}
</div>
{% endif %}
</div>
</div>
{% endfor %}
{% if in_group %}</div>{% endif %}
</div>

