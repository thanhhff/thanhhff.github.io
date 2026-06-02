---
layout: page
title: Services
nav_title: services
permalink: /services/
nav: true
nav_order: 3
---

<div class="pub-page">

<div class="pub-year-block">
  <div class="pub-year">2026</div>
  <div class="pub-entries">
    <div class="pub-section">Program Committee</div>
    <ul class="srv-list">
      <li>International Workshop on Embedded and Mobile Deep Learning <span class="srv-note">ACM MobiSys</span></li>
    </ul>
    <div class="pub-section">Reviewer</div>
    <ul class="srv-list">
      <li>Neurocomputing <span class="srv-note">Journal, IF: 6.5</span></li>
      <li>Pattern Recognition <span class="srv-note">Journal, IF: 7.6</span></li>
      <li>ACM Computing Surveys <span class="srv-note">Journal, IF: 28.0</span></li>
      <li>IEEE Transactions on Multimedia <span class="srv-note">Journal, IF: 9.7</span></li>
      <li>IEEE Transactions on Circuits and Systems for Video Technology <span class="srv-note">Journal, IF: 11.1</span></li>
      <li>International Conference on Multimedia Modeling <span class="srv-note">MMM</span></li>
      <li>Conference on Neural Information Processing Systems <span class="srv-note">NeurIPS</span></li>
      <li>IEEE/CVF Conference on Computer Vision and Pattern Recognition <span class="srv-note">IEEE/CVF CVPR</span></li>
      <li>CV4Animals: Computer Vision for Animal Behavior Tracking and Modeling <span class="srv-note">IEEE/CVF CVPR</span></li> 
      <li>IEEE International Conference on Automatic Face and Gesture Recognition <span class="srv-note">IEEE FG</span></li>
    </ul>
  </div>
</div>

<div class="pub-year-block">
  <div class="pub-year">2025</div>
  <div class="pub-entries">
    <div class="pub-section">Organizing Committee</div>
    <ul class="srv-list">
      <li>ACM Multimedia Asia 2025 <span class="srv-note">Poster Session Chair @ ACM MMAsia</span></li>
      <li>IntentVC Challenge: Intention-Oriented Controllable Video Captioning <span class="srv-note">Grand Challenge @ ACM MM</span></li>
    </ul>
    <div class="pub-section">Program Committee</div>
    <ul class="srv-list">
      <li>International Workshop on Intelligent Cross-Data Analysis and Retrieval <span class="srv-note">ACM ICMR</span> <a href="https://dl.acm.org/doi/proceedings/10.1145/3733566" target="_blank" rel="noopener" class="srv-cert"><i class="ai ai-doi"></i> DOI</a></li>
    </ul>
    <div class="pub-section">Reviewer</div>
    <ul class="srv-list">
      <li>Pattern Recognition <span class="srv-note">Journal, IF: 7.6</span> <a href="{{ site.baseurl }}/assets/pdf/reviewer/2025_PR.pdf" target="_blank" rel="noopener" class="srv-cert">Certificate</a></li>
      <li>Information Sciences <span class="srv-note">Journal, IF: 6.8</span></li>
      <li>ACM Computing Surveys <span class="srv-note">Journal, IF: 28.0</span></li>
      <li>Biomedical Signal Processing and Control <span class="srv-note">Journal, IF: 4.9</span></li>
      <li>IEEE Transactions on Pattern Analysis and Machine Intelligence <span class="srv-note">Journal, IF: 18.6</span> <a href="{{ site.baseurl }}/assets/pdf/reviewer/2025_TPAMI.pdf" target="_blank" rel="noopener" class="srv-cert">Certificate</a></li>
    </ul>
  </div>
</div>

<div class="pub-year-block">
  <div class="pub-year">2024</div>
  <div class="pub-entries">
    <div class="pub-section">Reviewer</div>
    <ul class="srv-list">
      <li>ACM International Conference on Multimedia <span class="srv-note">ACM MM</span></li>
      <li>Medical Image Computing and Computer Assisted Intervention <span class="srv-note">MICCAI</span></li>
      <li>International Workshop on Intelligent Cross-Data Analysis and Retrieval <span class="srv-note">ACM ICMR</span></li>
      <li>Meeting on Image Recognition and Understanding <span class="srv-note">MIRU (Japanese Domestic)</span></li>
    </ul>
  </div>
</div>

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

  .srv-list {
    margin: 0 0 1.1rem;
    padding-left: 1.25rem;
  }
  .srv-list:last-child {
    margin-bottom: 0;
  }
  .srv-list li {
    margin-bottom: 0.5rem;
    line-height: 1.55;
    text-align: left;
  }
  .srv-list li::marker {
    color: var(--global-text-color-light, #999);
    font-size: 0.85em;
  }

  .srv-note {
    font-size: 0.78rem;
    color: var(--global-text-color-light, #828282);
    font-style: italic;
  }

  .srv-cert {
    display: inline-block;
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
  .srv-cert:hover {
    background: rgba(124, 58, 237, 0.18);
    text-decoration: none;
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
  }
</style>
