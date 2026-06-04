---
layout: page
title: publications
permalink: /publications-domestic/
nav: false
---

{% capture intl_j %}{% bibliography_count --file journals.bib --query @*[pub_group^=ij] %}{% endcapture %}
{% capture intl_c %}{% bibliography_count --file conferences.bib --query @*[pub_group^=ic] %}{% endcapture %}
{% assign intl_total = intl_j | plus: intl_c %}
{% capture dom_j %}{% bibliography_count --file journals.bib --query @*[pub_group^=dj] %}{% endcapture %}
{% capture dom_c %}{% bibliography_count --file domestic.bib --query @*[pub_group^=dc] %}{% endcapture %}
{% assign dom_total = dom_j | plus: dom_c %}
{% capture pre_c %}{% bibliography_count --file others.bib --query @*[pub_group^=pc] %}{% endcapture %}
{% capture pre_j %}{% bibliography_count --file others.bib --query @*[pub_group^=pj] %}{% endcapture %}
{% assign pre_total = pre_c | plus: pre_j %}

<div class="pub-tabs">
  <a href="{{ '/publications-international/' | relative_url }}" class="pub-tab">International <span class="pub-tab-count">{{ intl_total }} papers</span></a>
  <a href="{{ '/publications-domestic/' | relative_url }}" class="pub-tab active">Domestic <span class="pub-tab-count">{{ dom_total }} papers</span></a>
  <a href="{{ '/publications-preprint/' | relative_url }}" class="pub-tab">Preprint <span class="pub-tab-count">{{ pre_total }} papers</span></a>
</div>

<div class="pub-page">

{% assign years = "2030,2029,2028,2027,2026,2025,2024,2023,2022,2021,2020" | split: "," %}
{% for year in years %}
  {% capture dj_cnt %}{% bibliography_count --file journals.bib --query @*[pub_group=dj{{ year }}] %}{% endcapture %}
  {% capture dc_cnt %}{% bibliography_count --file domestic.bib --query @*[pub_group=dc{{ year }}] %}{% endcapture %}
  {% assign year_total = dj_cnt | plus: dc_cnt %}
  {% if year_total > 0 %}
<div class="pub-year-block">
  <div class="pub-year">{{ year }}</div>
  <div class="pub-entries">
    {% if dj_cnt != "0" %}<div class="pub-section">Journal</div>
    {% bibliography --file journals.bib --template bib_international --query @*[pub_group=dj{{ year }}] %}{% endif %}
    {% if dc_cnt != "0" %}<div class="pub-section">Conference</div>
    {% bibliography --file domestic.bib --template bib_domestic --query @*[pub_group=dc{{ year }}] %}{% endif %}
  </div>
</div>
  {% endif %}
{% endfor %}

</div>

<style>
  .pub-page {
    margin-top: 1rem;
  }

  .pub-year-block {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.25rem 0;
    border-top: 1px solid var(--global-divider-color, #e8e8e8);
  }
  .pub-year-block:first-of-type {
    border-top: none;
  }

  .pub-year {
    flex: 0 0 70px;
    text-align: right;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--global-theme-color, #b509ac);
    line-height: 1.1;
    position: sticky;
    top: 5rem;
  }

  .pub-entries {
    flex: 1 1 auto;
    min-width: 0;
  }

  .pub-section {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--global-text-color-light, #828282);
    margin: 0.4rem 0 0.5rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px dashed var(--global-divider-color, #e8e8e8);
  }
  .pub-section:first-child {
    margin-top: 0;
  }

  /* Hide year labels injected by jekyll-scholar's global group_by: year */
  .pub-entries h2.bibliography {
    display: none;
  }

  ol.bibliography {
    margin: 0 0 1.1rem;
    padding-left: 1.25rem;
  }
  ol.bibliography:last-child {
    margin-bottom: 0;
  }
  ol.bibliography li {
    margin-bottom: 0.7rem;
    line-height: 1.55;
    text-align: justify;
  }
  ol.bibliography li::marker {
    color: var(--global-text-color-light, #999);
    font-size: 0.85em;
  }

  .pub-page b {
    font-weight: 400;
    color: #000;
    background: color-mix(in srgb, #4ade80 25%, transparent);
    border: 1px solid color-mix(in srgb, #4ade80 50%, transparent);
    border-radius: 6px;
    padding: 0.05rem 0.25rem;
    white-space: nowrap;
    vertical-align: 1px;
  }

  .venue {
    font-style: italic;
    color: var(--global-text-color, #333);
  }

  .doi-badge {
    display: inline-block;
    font-style: normal;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #7c3aed;
    background: rgba(124, 58, 237, 0.08);
    border: 1px solid rgba(124, 58, 237, 0.25);
    border-radius: 6px;
    padding: 0.05rem 0.4rem;
    white-space: nowrap;
    vertical-align: 1px;
    text-decoration: none;
  }
  .doi-badge:hover {
    background: rgba(124, 58, 237, 0.18);
    text-decoration: none;
  }

  .if-badge {
    display: inline-block;
    font-style: normal;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--global-theme-color, #b509ac);
    background: color-mix(in srgb, var(--global-theme-color, #b509ac) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--global-theme-color, #b509ac) 30%, transparent);
    border-radius: 6px;
    padding: 0.05rem 0.4rem;
    white-space: nowrap;
    vertical-align: 1px;
  }

  .award-badge {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    color: #b26a00;
    background: rgba(255, 193, 7, 0.15);
    border-radius: 6px;
    padding: 0.05rem 0.45rem;
    white-space: nowrap;
    vertical-align: 1px;
  }

  /* ── Tab switcher ── */
  .pub-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--global-divider-color, #e8e8e8);
  }
  .pub-tab {
    padding: 0.45rem 1.1rem;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--global-text-color-light, #828282);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: color 0.18s, border-color 0.18s;
  }
  .pub-tab:hover {
    color: var(--global-theme-color, #b509ac);
    text-decoration: none;
  }
  .pub-tab.active {
    color: var(--global-theme-color, #b509ac);
    border-bottom-color: var(--global-theme-color, #b509ac);
  }
  .pub-tab-count {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 700;
    background: color-mix(in srgb, var(--global-theme-color, #b509ac) 12%, transparent);
    color: var(--global-theme-color, #b509ac);
    border-radius: 20px;
    padding: 0.05rem 0.45rem;
    margin-left: 0.25rem;
    vertical-align: middle;
  }

  @media (max-width: 600px) {
    .pub-year-block {
      flex-direction: column;
      gap: 0.4rem;
    }
    .pub-year {
      flex-basis: auto;
      text-align: left;
      position: static;
    }
    ol.bibliography li {
      text-align: left;
    }
    .pub-tab-count {
      margin-left: 0;
    }
    .pub-tab {
      text-align: left;
    }
  }
</style>
