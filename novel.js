/* ════════════════════════════════════════
   novel.js — 小説ページ専用スクリプト
   novel-template.html（およびそのコピー）で読み込む
   ════════════════════════════════════════ */

(() => {
  /* ── お題パネル 開閉 ── */
  const themeSection = document.getElementById('js-theme-section');
  const themeToggle  = document.getElementById('js-theme-toggle');

  if (themeSection && themeToggle) {
    themeToggle.addEventListener('click', () => {
      themeSection.classList.toggle('open');
    });
  }

  /* ── タッチスワイプで縦書きエリアを横スクロール（スマホ対応）── */
  const novelBody = document.getElementById('js-novel-body');

  if (novelBody) {
    let startX = 0;
    let startScrollLeft = 0;

    novelBody.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startScrollLeft = novelBody.scrollLeft;
    }, { passive: true });

    novelBody.addEventListener('touchmove', (e) => {
      const dx = startX - e.touches[0].clientX;
      novelBody.scrollLeft = startScrollLeft + dx;
    }, { passive: true });
  }
})();
