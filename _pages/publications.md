---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 1
---

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<!-- Filter Buttons -->
<h4><br>type</h4>
<div id="filter-buttons">
  <button class="filter-btn active" data-type="all">any</button>
  <button class="filter-btn" data-type="journal">journal</button>
  <button class="filter-btn" data-type="international-conference">international conference</button>
  <button class="filter-btn" data-type="domestic-conference">domestic journal/conference</button>
  <button class="filter-btn" data-type="thesis">thesis</button>
  <button class="filter-btn" data-type="miscellaneous">miscellaneous</button>
</div>

<!-- Publication Sections -->
<div id="publications-list">
  <div class="publication-item journal">
    <h4><br>journal</h4>
    <div class="publications">
      {% bibliography --query @*[note=International-Journal]* %}
    </div>
  </div>

  <div class="publication-item international-conference">
    <h4><br>international conference</h4>
    <div class="publications">
      {% bibliography --query @*[note=International-Conference]* %}
    </div>
  </div>

  <div class="publication-item domestic-conference">
    <h4><br>domestic journal/conference</h4>
    <div class="publications">
      {% bibliography --query @*[note=Domestic-Journal] or @*[note=Domestic-Conference] %}
    </div>
  </div>

  <div class="publication-item miscellaneous">
    <h4>miscellaneous (article, arXiv, etc.)</h4>
    <div class="publications">
      {% bibliography --query @*[note=Others]* %}
    </div>
  </div>

  <div class="publication-item thesis">
    <h4><br>thesis</h4>
    <div class="publications">
      {% bibliography --query @*[note=Thesis]* %}
    </div>
  </div>
</div>

<!-- JavaScript for Filtering -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const publications = document.querySelectorAll(".publication-item");

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const filterType = this.getAttribute("data-type");

        publications.forEach(pub => {
          if (filterType === "all") {
            pub.style.display = "block";
          } else {
            pub.style.display = pub.classList.contains(filterType) ? "block" : "none";
          }
        });
      });
    });
  });
</script>

<!-- Responsive CSS -->
<style>
  /* Filter Buttons Layout */
  #filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow-x: auto;  /* Allow scrolling on small screens */
    padding-bottom: 10px;
  }

  .filter-btn {
    background-color: #ddd;
    border: none;
    padding: 8px 13px;
    cursor: pointer;
    border-radius: 5px;
    white-space: nowrap;  /* Prevent text wrapping */
    transition: background 0.3s;
  }

  .filter-btn.active {
    background-color: #0076df;
    color: white;
  }

  /* Publication Items */
  .publication-item {
    margin-top: 20px;
  }

  /* Responsive Design */
  @media (max-width: 600px) {
    #filter-buttons {
      flex-wrap: nowrap;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .filter-btn {
      flex: 1;
      text-align: center;
    }
  }
</style>
