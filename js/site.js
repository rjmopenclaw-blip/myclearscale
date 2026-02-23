// Reading progress bar
(function() {
  const bar = document.querySelector('.reading-progress');
  if (!bar) return;
  window.addEventListener('scroll', function() {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docH > 0 ? (window.scrollY / docH * 100) + '%' : '0%';
  }, { passive: true });
})();

// Cookie consent
(function() {
  if (localStorage.getItem('cookie_consent')) return;
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.style.cssText = `position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#0a0f1e;color:rgba(255,255,255,0.8);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;font-family:Inter,sans-serif;font-size:0.8rem;line-height:1.5;border-top:2px solid #16a34a;box-shadow:0 -4px 24px rgba(0,0,0,0.3);`;
  banner.innerHTML = `
    <span>🍪 We use cookies to analyze traffic and improve your experience. See our <a href="/privacy.html" style="color:#4ade80;text-decoration:underline;">Privacy Policy</a>.</span>
    <div style="display:flex;gap:8px;flex-shrink:0;">
      <button onclick="document.getElementById('cookie-banner').remove();localStorage.setItem('cookie_consent','declined');" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.7);padding:8px 16px;border-radius:6px;cursor:pointer;font-size:0.78rem;font-family:Inter,sans-serif;">Decline</button>
      <button onclick="document.getElementById('cookie-banner').remove();localStorage.setItem('cookie_consent','accepted');" style="background:#16a34a;border:none;color:#fff;padding:8px 20px;border-radius:6px;cursor:pointer;font-weight:700;font-size:0.78rem;font-family:Inter,sans-serif;">Accept All</button>
    </div>`;
  document.body.appendChild(banner);
})();
