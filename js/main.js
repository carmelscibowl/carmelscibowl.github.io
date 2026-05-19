// =========================================================
// Carmel Science Bowl — main.js
// Injects shared header and footer, then wires the mobile
// nav toggle.
//
// Usage on each page:
//   <body>
//     <div data-header></div>
//     <!-- page content -->
//     <div data-footer></div>
//     <script src="/js/main.js"></script>
//   </body>
//
// To update the nav or footer site-wide, edit this file
// only. No more 7-page find-and-replace.
// =========================================================

const NAV_LINKS = [
  { href: "./index.html",             label: "Home" },
  { href: "./about.html",   label: "About" },
  { href: "./team.html",    label: "Team" },
  { href: "./history.html", label: "History" },
  { href: "./camp.html",    label: "Summer Camp" },
  { href: "./join.html",    label: "Join" },
];

function isActive(href) {
  const path = window.location.pathname;
  if (href === "./") return path === "./" || path === "./index.html";
  return path === href;
}

function renderHeader() {
  const links = NAV_LINKS.map(({ href, label }) => {
    const cls = isActive(href) ? ' class="active"' : "";
    return `<li><a href="${href}"${cls}>${label}</a></li>`;
  }).join("");

  return `
    <header class="site-header">
      <div class="container">
        <a class="brand" href="./"><img src="./logo-circle.png" alt="" class="brand-mark">Carmel Science Bowl</a>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">☰</button>
        <nav>
          <ul class="nav-list">${links}</ul>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-brand">
          <a class="brand" href="./"><img src="./logo-circle.png" alt="" class="brand-mark">Carmel Science Bowl</a>
          <p>The official site of the Carmel High School Science Bowl team. A student club at Carmel High School in Carmel, Indiana.</p>
        </div>
        <div>
          <h4>Site</h4>
          <a href="./about.html">About</a><br>
          <a href="./team.html">Team</a><br>
          <a href="./history.html">History</a><br>
          <a href="./camp.html">Summer Camp</a><br>
          <a href="./join.html">Join</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="mailto:carmelhighschoolsciencebowl@gmail.com">Email</a><br>
          <a href="http://instagram.com/carmelscibowl" target="_blank" rel="noopener">Instagram</a><br>
          <a href="https://discord.gg/uWHhbNFAAX" target="_blank" rel="noopener">Discord</a><br>
        </div>
        <div class="footer-bottom">
          © 2026 Carmel High School Science Bowl. 520 E Main St, Carmel, IN 46032.
        </div>
      </div>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  // Inject header
  const headerSlot = document.querySelector("[data-header]");
  if (headerSlot) headerSlot.outerHTML = renderHeader();

  // Inject footer
  const footerSlot = document.querySelector("[data-footer]");
  if (footerSlot) footerSlot.outerHTML = renderFooter();

  // Mobile nav toggle — must run after the header is in the DOM
  const toggle = document.querySelector(".nav-toggle");
  const list = document.querySelector(".nav-list");
  if (toggle && list) {
    toggle.addEventListener("click", () => {
      list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(list.classList.contains("open")));
    });
  }
});
