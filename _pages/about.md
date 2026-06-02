---
layout: about
title: about
permalink: /
subtitle: "🔬 PhD Candidate @ Nagoya University | Student Researcher @ RIKEN 🇯🇵 | Visiting Researcher @ Universität Freiburg 🇩🇪"

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >

selected_papers: true
social: false

announcements:
  enabled: true
  scrollable: false
  limit: 10

latest_posts:
  enabled: true
  scrollable: false
  limit: 5
---

I am a PhD Candidate at [Nagoya University](https://www.nagoya-u.ac.jp/), specializing in the Department of Intelligent Systems. My research focuses on vision-language models, multimodal recognition, and video captioning, with applications in solving real-world problems.

<div class="about-positions">

  <div class="about-position-card">
    <div class="about-position-icon"><i class="fa-solid fa-graduation-cap"></i></div>
    <div class="about-position-body">
      <div class="about-position-title">PhD Candidate</div>
      <div class="about-position-org"><a href="https://www.nagoya-u.ac.jp/" target="_blank" rel="noopener">Nagoya University</a> &mdash; Graduate School of Informatics, Japan</div>
    </div>
  </div>

  <div class="about-position-card">
    <div class="about-position-icon"><i class="fa-solid fa-robot"></i></div>
    <div class="about-position-body">
      <div class="about-position-title">Student Researcher</div>
      <div class="about-position-org"><a href="https://www.riken.jp/" target="_blank" rel="noopener">RIKEN National Science Institute</a> &mdash; Guardian Robot Project, Japan</div>
    </div>
  </div>

  <div class="about-position-card">
    <div class="about-position-icon"><i class="fa-solid fa-tree"></i></div>
    <div class="about-position-body">
      <div class="about-position-title">Visiting Researcher</div>
      <div class="about-position-org"><a href="https://uni-freiburg.de/" target="_blank" rel="noopener">University of Freiburg</a> &mdash; Excellence Cluster Future Forests, Germany</div>
    </div>
  </div>

  <div class="about-position-card">
    <div class="about-position-icon"><i class="fa-solid fa-building"></i></div>
    <div class="about-position-body">
      <div class="about-position-title">Higher Education &mdash; Industry Collaboration</div>
      <div class="about-position-org"><a href="https://www.mds.nagoya-u.ac.jp/" target="_blank" rel="noopener">Center for AI, Mathematical and Data Science</a>, Nagoya University</div>
    </div>
  </div>

</div>

<div class="about-contact">
  <a href="mailto:nguyent@cs.is.i.nagoya-u.ac.jp" class="about-contact-link">
    <i class="fa-solid fa-envelope"></i>&nbsp; nguyent (at) cs.is.i.nagoya-u.ac.jp
  </a>
  <a href="https://scholar.google.com/citations?user=QSV452QAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="about-contact-link">
    <i class="fa-brands fa-google-scholar"></i>&nbsp; Google Scholar
  </a>
  <a href="https://www.linkedin.com/in/thanhhff/" target="_blank" rel="noopener noreferrer" class="about-contact-link">
    <i class="fa-brands fa-linkedin"></i>&nbsp; LinkedIn
  </a>
</div>

<style>
  /* ── Position cards ── */
  .about-positions {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }
  .about-position-card {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 0.65rem 0.9rem;
    border: 1px solid var(--global-divider-color, #e8e8e8);
    border-radius: 10px;
    background: var(--global-card-bg-color, #fff);
    transition: border-color 0.18s, box-shadow 0.18s;
  }
  .about-position-card:hover {
    border-color: color-mix(in srgb, var(--global-theme-color, #0076df) 45%, transparent);
    box-shadow: 0 2px 12px color-mix(in srgb, var(--global-theme-color, #0076df) 8%, transparent);
  }
  .about-position-icon {
    flex: 0 0 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: color-mix(in srgb, var(--global-theme-color, #0076df) 10%, transparent);
    color: var(--global-theme-color, #0076df);
    font-size: 0.88rem;
    margin-top: 0.05rem;
  }
  .about-position-body {
    flex: 1;
    min-width: 0;
  }
  .about-position-title {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--global-text-color, #333);
    line-height: 1.3;
  }
  .about-position-org {
    font-size: 0.88rem;
    color: var(--global-text-color, #333);
    margin-top: 0.12rem;
    line-height: 1.45;
  }
  .about-position-note {
    font-size: 0.82rem;
    color: var(--global-text-color-light, #888);
    margin-top: 0.12rem;
    font-style: italic;
    line-height: 1.4;
  }

  /* ── Contact row ── */
  .about-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.25rem;
    margin-bottom: 1.75rem;
  }
  .about-contact-link {
    display: inline-flex;
    align-items: center;
    font-size: 0.83rem;
    font-weight: 500;
    color: var(--global-text-color, #333);
    text-decoration: none;
    padding: 0.28rem 0.75rem;
    border: 1px solid var(--global-divider-color, #ddd);
    border-radius: 8px;
    transition: color 0.18s, border-color 0.18s, background 0.18s;
    white-space: nowrap;
  }
  .about-contact-link:hover {
    color: var(--global-theme-color, #0076df);
    border-color: color-mix(in srgb, var(--global-theme-color, #0076df) 50%, transparent);
    background: color-mix(in srgb, var(--global-theme-color, #0076df) 5%, transparent);
    text-decoration: none;
  }

  /* ── Responsive ── */
  @media (max-width: 576px) {
    .about-position-card { padding: 0.55rem 0.7rem; }
    .about-edu-year { flex: 0 0 44px; }

    /* Mobile avatar: centered circle */
    .profile,
    .profile.float-right,
    .profile.float-left {
      float: none !important;
      display: flex;
      justify-content: center;
      margin: 0 0 1.25rem 0 !important;
    }
    .profile figure {
      width: 80%;
    }
    .profile img {
      width: 100% !important;
      aspect-ratio: 1;
      border-radius: 50% !important;
      object-fit: cover;
    }
  }
</style>
