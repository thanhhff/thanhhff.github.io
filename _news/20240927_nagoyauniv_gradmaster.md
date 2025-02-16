---
layout: post
date: 2024-09-27 15:59:00-0400
inline: true
related_posts: false
---

<p>I graduated with a Master's degree as the Honorary Valedictorian of the Graduate School of Informatics, Nagoya University, Japan.</p>

<!-- YouTube Logo Button -->
<a id="openModal" style="cursor: pointer; display: inline-block;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
         alt="YouTube Logo" width="70">
</a>

<!-- Video Modal (Hidden by Default) -->
<div id="videoModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); justify-content: center; align-items: center;">
    <div style="position: relative; width: 80%; max-width: 600px;">
        <span id="closeModal" style="position: absolute; top: -20px; right: -20px; font-size: 30px; cursor: pointer; color: white;">✖</span>
        <iframe id="youtubeVideo" width="100%" height="315" src="" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

<script>
    var modal = document.getElementById("videoModal");
    var openBtn = document.getElementById("openModal");
    var closeBtn = document.getElementById("closeModal");
    var iframe = document.getElementById("youtubeVideo");
    var videoSrc = "https://www.youtube.com/embed/-CZaQDxkmyA?start=1625&autoplay=1"; // Auto-play enabled

    // Open modal and start video
    openBtn.addEventListener("click", function() {
        iframe.src = videoSrc; // Set iframe src to play video
        modal.style.display = "flex";
    });

    // Close modal and stop video
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        iframe.src = ""; // Clear src to stop playback
    });

    // Close modal when clicking outside
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            iframe.src = ""; // Stop playback
        }
    });
</script>
