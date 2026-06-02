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

<style>
/* ── Reuse news timeline base ── */
.nt-feed { margin-top: 1.5rem; }

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
  background: var(--global-divider-color);
}

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
.nt-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--global-theme-color);
  position: relative;
}
.nt-dot::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: var(--global-theme-color);
  opacity: 0.2;
  z-index: -1;
}

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

.nt-item {
  padding-left: calc(1.2rem + 10px + .6rem);
  margin-bottom: .65rem;
  position: relative;
}

.nt-body {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 10px;
  padding: .4rem .7rem;
  font-size: 1rem;
  line-height: 1.65;
}

/* ── Blog-specific card ── */
.bl-card {
  display: flex;
  gap: .75rem;
  align-items: center;
}
.bl-thumb {
  width: 80px;
  height: 56px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}
.bl-info { flex: 1; min-width: 0; }
.bl-title {
  display: block;
  font-weight: 600;
  color: var(--global-text-color);
  text-decoration: none;
  line-height: 1.4;
  margin-bottom: .2rem;
}
.bl-title:hover {
  color: var(--global-theme-color);
  text-decoration: none;
}
.bl-meta {
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-top: .15rem;
}
.bl-date {
  font-size: .78rem;
  color: var(--global-text-color-light);
}
.bl-cat {
  font-size: .68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .07em;
  border-radius: 20px;
  padding: .1rem .45rem;
  color: #1e8e3e; background: rgba(30,142,62,.1);
}
.bl-cat-conference { color: #1a73e8; background: rgba(26,115,232,.1); }
.bl-cat-graduation  { color: #b509ac; background: rgba(181,9,172,.1); }
.bl-cat-training    { color: #e37400; background: rgba(227,116,0,.1); }
.bl-cat-school      { color: #1e8e3e; background: rgba(30,142,62,.1); }
</style>
