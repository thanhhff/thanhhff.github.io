---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<!-- Journal -->
<h4><br>journal</h4>
<div class="publications">
  {% bibliography --query @*[note=International-Journal]* %}
</div>

<h4><br>international conferece</h4>
<div class="publications">
  {% bibliography --query @*[note=International-Conference]* %}
</div>

<h4><br>domestic journal/conferece</h4>
<div class="publications">
  {% bibliography --query @*[note=Domestic-Journal] or @*[note=Domestic-Conference] %}
</div>

<h4><br>article / arXiv etc.</h4>
<div class="publications">
  {% bibliography --query @*[note=Others]* %}
</div>