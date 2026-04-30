/* ════════════════════════════════════════
   novel.js — 小説ページ専用スクリプト
   novel-template.html（およびそのコピー）で読み込む
   ════════════════════════════════════════ */

(() => {
  /* ── お題パネル 開閉 ── */
  const themeSection = document.getElementById('js-theme-section');
  const themeToggle  = document.getElementById('js-theme-toggle');

  const novelTitle = document.querySelector('.novel-title');

  const toggleTheme = () => {
    themeSection.classList.toggle('open');
  };

  if (themeSection && themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    if (novelTitle) novelTitle.addEventListener('click', toggleTheme);
  }

  /* ── タッチスクロールは CSS のネイティブ処理に任せる */
})();
