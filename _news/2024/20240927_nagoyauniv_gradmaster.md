---
layout: post
date: 2024-09-27 15:59:00-0400
inline: true
related_posts: false
---

I graduated with a Master's degree as the Honorary Valedictorian of the Graduate School of Informatics, Nagoya University, Japan.

<div class="yt-preview" onclick="ytOpenModal('grad2024')" title="Watch on YouTube">
  <img src="https://img.youtube.com/vi/-CZaQDxkmyA/hqdefault.jpg" alt="Graduation ceremony" class="yt-thumb"/>
  <div class="yt-play"><svg viewBox="0 0 68 48" width="48"><path d="M66.5 7.4C65.7 4.4 63.3 2 60.3 1.2 55 0 34 0 34 0S13 0 7.7 1.2C4.7 2 2.3 4.4 1.5 7.4 0 12.8 0 24 0 24s0 11.2 1.5 16.6c.8 3 3.2 5.4 6.2 6.2C13 48 34 48 34 48s21 0 26.3-1.2c3-.8 5.4-3.2 6.2-6.2C68 35.2 68 24 68 24s0-11.2-1.5-16.6z" fill="#ff0000"/><path d="M27 34l18-10-18-10v20z" fill="#fff"/></svg></div>
</div>

<div id="yt-modal-grad2024" class="yt-modal" onclick="if(event.target===this) ytCloseModal('grad2024')">
  <div class="yt-modal-box">
    <button class="yt-modal-close" onclick="ytCloseModal('grad2024')">✕</button>
    <div class="yt-modal-frame">
      <iframe id="yt-iframe-grad2024" width="100%" height="100%" src="" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  </div>
</div>

<style>
.yt-preview {
  position: relative; display: inline-block; cursor: pointer;
  border-radius: 10px; overflow: hidden;
  max-width: 320px; width: 100%;
  margin-top: .6rem;
  box-shadow: 0 2px 12px rgba(0,0,0,.15);
  transition: transform .18s, box-shadow .18s;
}
.yt-preview:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.22); }
.yt-thumb { width: 100%; display: block; aspect-ratio: 16/9; object-fit: cover; }
.yt-play {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,.15); transition: background .18s;
}
.yt-preview:hover .yt-play { background: rgba(0,0,0,.3); }
.yt-modal {
  display: none; position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,.82);
  align-items: center; justify-content: center;
}
.yt-modal.open { display: flex; }
.yt-modal-box { position: relative; width: 90%; max-width: 760px; border-radius: 12px; overflow: hidden; }
.yt-modal-frame { aspect-ratio: 16/9; width: 100%; background: #000; }
.yt-modal-frame iframe { width: 100%; height: 100%; display: block; }
.yt-modal-close {
  position: absolute; top: -2.2rem; right: 0;
  background: none; border: none; color: #fff;
  font-size: 1.4rem; cursor: pointer; opacity: .8; transition: opacity .15s;
}
.yt-modal-close:hover { opacity: 1; }
</style>

<script>
function ytOpenModal(key) {
  var urls = { 'grad2024': 'https://www.youtube.com/embed/-CZaQDxkmyA?start=1632&autoplay=1' };
  document.getElementById('yt-iframe-' + key).src = urls[key];
  document.getElementById('yt-modal-' + key).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function ytCloseModal(key) {
  document.getElementById('yt-iframe-' + key).src = '';
  document.getElementById('yt-modal-' + key).classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') document.querySelectorAll('.yt-modal.open').forEach(function(m) {
    ytCloseModal(m.id.replace('yt-modal-', ''));
  });
});
</script>
