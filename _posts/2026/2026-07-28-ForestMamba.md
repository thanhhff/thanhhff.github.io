---
layout: post
title: "🌲 ForestMamba on 3Dtrees.earth Platform"
date: 2026-07-28
tags: [forest]
categories: research
---
<style>
  figure img {
    border-radius: 12px;
  }
</style>

I am happy to share that **[ForestMamba](https://github.com/thanhhff/ForestMamba)** has been integrated into **[3Dtrees.earth](https://www.3dtrees.earth/)**, an open platform for sharing and processing terrestrial LiDAR (TLS) scans of forests.

ForestMamba now runs as part of the platform's processing pipeline, performing **semantic leaf/wood separation** and **single-tree instance segmentation** on the uploaded forest point clouds. The model is applied automatically to newly uploaded scans and is being applied retroactively to the existing archive of nearly **2,000 datasets**, together with a per-point segmentation confidence.

---

## 🌿 Why Mamba for forest point clouds?

Forest TLS scans are large, dense, and highly occluded, which makes attention-based models expensive to run at full scan scale. ForestMamba combines **geometry-guided queries** built from forest-specific structural cues with a **sparse Mamba backbone**, giving linear-time complexity and substantially lower memory use than Transformer-based alternatives — which is exactly what makes processing at platform scale practical.

More details are in our preprint: [ForestMamba: Sparse Mamba with Geometry-guided Queries for 3D Forest Point Cloud Segmentation](https://arxiv.org/abs/2606.01549).

---

## 🎥 Announcement

<div style="text-align:center;">
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7487855694822506496"
    height="600"
    width="100%"
    frameborder="0"
    allowfullscreen
    title="ForestMamba on 3Dtrees.earth">
  </iframe>
</div>

---

Seeing a research prototype move into a platform that the forest-monitoring community actually uses every day is very rewarding. Many thanks to the 3Dtrees.earth team and to all my collaborators on this work — and if you try it on your own scans, I would love to hear how it performs!
