// Cookie consent banner
(function() {
  if (localStorage.getItem('cookie_consent')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.style.cssText = `
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
    background: #0f172a; color: rgba(255,255,255,0.85);
    padding: 16px 24px; display: flex; align-items: center;
    justify-content: space-between; gap: 16px; flex-wrap: wrap;
    font-family: Inter, sans-serif; font-size: 0.82rem; line-height: 1.5;
    border-top: 3px solid #16a34a;
  `;
  banner.innerHTML = `
    <span>🍪 We use cookies to analyze traffic and improve your experience. By continuing to use this site, you agree to our <a href="/privacy.html" style="color:#4ade80;text-decoration:underline;">Privacy Policy</a>.</span>
    <div style="display:flex;gap:10px;flex-shrink:0;">
      <button onclick="document.getElementById('cookie-banner').remove();localStorage.setItem('cookie_consent','declined');" style="background:transparent;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.7);padding:8px 16px;border-radius:6px;cursor:pointer;font-size:0.8rem;">Decline</button>
      <button onclick="document.getElementById('cookie-banner').remove();localStorage.setItem('cookie_consent','accepted');" style="background:#16a34a;border:none;color:#fff;padding:8px 20px;border-radius:6px;cursor:pointer;font-weight:700;font-size:0.8rem;">Accept</button>
    </div>
  `;
  document.body.appendChild(banner);
})();
