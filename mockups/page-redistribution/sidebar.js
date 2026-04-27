// Mounts the proposed two-group sidebar into <div id="sidebar-mount" data-page="...">.
// Works under file:// (no fetch needed). Marks the active link based on data-page.

(function () {
  const SIDEBAR_HTML = `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <span class="brand-mark">M</span>
        <span class="sidebar-label">Media Centarr</span>
      </div>

      <div class="sidebar-group-label sidebar-label">Watch</div>
      <nav style="display:flex; flex-direction:column; gap:0.125rem;">
        <a class="sidebar-link" data-link="home" href="../home/index.html" title="Home">
          ${icon("home")}
          <span class="sidebar-label">Home</span>
        </a>
        <a class="sidebar-link" data-link="library" href="../library/index.html" title="Library">
          ${icon("book")}
          <span class="sidebar-label">Library</span>
        </a>
        <a class="sidebar-link" data-link="upcoming" href="../upcoming/index.html" title="Upcoming">
          ${icon("calendar")}
          <span class="sidebar-label">Upcoming</span>
        </a>
        <a class="sidebar-link" data-link="history" href="../history/index.html" title="History">
          ${icon("clock")}
          <span class="sidebar-label">History</span>
        </a>
      </nav>

      <div class="sidebar-group-label sidebar-label" style="margin-top:0.5rem;">System</div>
      <nav style="display:flex; flex-direction:column; gap:0.125rem;">
        <a class="sidebar-link system-link" data-link="downloads" href="../operate-pages/downloads.html" title="Downloads">
          ${icon("download")}
          <span class="sidebar-label">Downloads</span>
        </a>
        <a class="sidebar-link system-link" data-link="review" href="../operate-pages/review.html" title="Review">
          ${icon("doc")}
          <span class="sidebar-label">Review</span>
        </a>
        <a class="sidebar-link system-link" data-link="status" href="../operate-pages/status.html" title="Status">
          ${icon("grid")}
          <span class="sidebar-label">Status</span>
        </a>
        <a class="sidebar-link system-link" data-link="settings" href="../operate-pages/settings.html" title="Settings">
          ${icon("cog")}
          <span class="sidebar-label">Settings</span>
        </a>
      </nav>

      <div class="sidebar-spacer"></div>

      <a class="sidebar-link" data-link="index" href="../index.html" title="Mockup index" style="font-size:0.75rem; color: oklch(from var(--color-base-content) l c h / 0.4);">
        ${icon("arrow-left")}
        <span class="sidebar-label">Mockup index</span>
      </a>
    </aside>
  `;

  function icon(name) {
    const ICONS = {
      home: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12 12 3l9.75 9M4.5 9.75v10.125A1.125 1.125 0 0 0 5.625 21h3.375v-6h6v6h3.375A1.125 1.125 0 0 0 19.5 19.875V9.75"/></svg>`,
      book: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>`,
      calendar: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>`,
      clock: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`,
      download: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>`,
      doc: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>`,
      grid: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>`,
      cog: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>`,
      "arrow-left": `<svg class="icon icon-sm" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg>`,
    };
    return ICONS[name] || "";
  }

  function mount() {
    const m = document.getElementById("sidebar-mount");
    if (!m) return;
    const page = m.dataset.page || "";
    m.outerHTML = SIDEBAR_HTML;
    const active = document.querySelector(`[data-link="${page}"]`);
    if (active) active.classList.add("active");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
