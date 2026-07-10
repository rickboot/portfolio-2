const NAV = require('./nav-data');

function esc(s) {
	return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Reuses the real site's own multi-column dropdown mechanism: a plain
// ".submenu > .flex_div" flexbox (defined in _nav_142.css), not Gantry's grid
// — Gantry's grid actively forces dropdown columns to 100% width, so columns
// only sit side-by-side when built this way, matching the captured markup.
function renderDesktopDropdown(item) {
	if (!item.columns) return '';
	const colHtml = (col) => {
		const list = `<ul>${col.items.map((sub) => `<li><a href="${sub.href}">${esc(sub.title)}</a></li>`).join('')}</ul>`;
		return col.title ? `<div><p class="menu_title">${esc(col.title)}</p>${list}</div>` : list;
	};
	return `
        <ul class="g-dropdown g-fade g-inactive">
            <li class="g-dropdown-column">
                <div class="g-grid">
                    <div class="g-block size-100">
                        <div class="submenu">
                            <div class="flex_div">
                                ${item.columns.map(colHtml).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>`;
}

function renderDesktopNav(activeId) {
	return NAV.map((item) => {
		const isActive = item.id === activeId;
		const activeClass = isActive ? ' phx-current' : '';
		if (item.columns) {
			const label = item.href
				? `<a class="g-menu-item-container" href="${item.href}"><span class="g-menu-item-content"><span class="g-menu-item-title">${esc(item.title)}</span></span><span class="g-menu-parent-indicator"></span></a>`
				: `<div class="g-menu-item-container"><span class="g-nav-header g-menu-item-content"><span class="g-menu-item-title">${esc(item.title)}</span></span><span class="g-menu-parent-indicator"></span></div>`;
			return `
        <li class="g-menu-item g-parent${activeClass}">
            ${label}
            ${renderDesktopDropdown(item)}
        </li>`;
		}
		return `
        <li class="g-menu-item g-standard${activeClass}">
            <a class="g-menu-item-container" href="${item.href}">
                <span class="g-menu-item-content"><span class="g-menu-item-title">${esc(item.title)}</span></span>
            </a>
        </li>`;
	}).join('');
}

function renderMobileNav(activeId) {
	// Statically rendered (the real site clones this via JS at runtime; we
	// render it up front so the offcanvas panel isn't empty).
	return `<ul class="g-toplevel">${NAV.map((item) => {
		const isActive = item.id === activeId;
		const href = item.href || '#';
		let out = `<li class="g-menu-item${isActive ? ' active' : ''}"><a class="g-menu-item-container" href="${href}">${esc(item.title)}</a></li>`;
		if (item.columns) {
			const subItems = item.columns.flatMap((c) => c.items);
			out += subItems
				.map(
					(sub) =>
						`<li class="g-menu-item g-menu-item-child"><a class="g-menu-item-container" href="${sub.href}" style="padding-left:2rem;">${esc(sub.title)}</a></li>`
				)
				.join('');
		}
		return out;
	}).join('')}</ul>`;
}

const ICON_SEARCH = `<svg width="18" height="19" viewBox="0 0 26.7 28.3" aria-hidden="true"><path fill="currentColor" d="M17.9,6.5C14.4,3,8.7,3,5.2,6.5s-3.5,9.2,0,12.7c3.2,3.2,8.1,3.5,11.6,0.9l6,6c0.1,0.1,0.3,0.1,0.4,0l1.6-1.6c0.1-0.1,0.1-0.3,0-0.4l-6-6C21.3,14.6,21,9.7,17.9,6.5z M16.8,18.1c-2.9,2.9-7.6,2.9-10.5,0c-2.9-2.9-2.9-7.6,0-10.5s7.6-2.9,10.5,0C19.6,10.5,19.6,15.2,16.8,18.1z"/></svg>`;
const ICON_BARS = `<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"/></svg>`;
const ICON_LINKEDIN = `<svg width="20" height="20" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.79 53.79 0 1 1 53.79-53.79 53.8 53.8 0 0 1-53.79 53.79zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.29-79.3-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3z"/></svg>`;
const ICON_FACEBOOK = `<svg width="20" height="20" viewBox="0 0 320 512" aria-hidden="true"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>`;
const ICON_YOUTUBE = `<svg width="20" height="20" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M549.66 124.83a70 70 0 0 0-49.33-49.53C459.37 64 288 64 288 64s-171.37 0-212.33 11.3a70 70 0 0 0-49.33 49.53C16 165.9 16 256 16 256s0 90.1 10.34 131.17a70 70 0 0 0 49.33 49.53C116.63 448 288 448 288 448s171.37 0 212.33-11.3a70 70 0 0 0 49.33-49.53C560 346.1 560 256 560 256s0-90.1-10.34-131.17zM232 336V176l142 80z"/></svg>`;

function head(title, description) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)} | PHISON Electronics Corp. (Nav Mockup)</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="data:,">
<link href="assets/css/nucleus.css" rel="stylesheet">
<link href="assets/css/hydrogen_142.css" rel="stylesheet">
<link href="assets/css/hydrogen-joomla_142.css" rel="stylesheet">
<link href="assets/css/template.min.css" rel="stylesheet">
<link href="assets/css/custom_142.css" rel="stylesheet">
<link href="assets/css/_header_142.css" rel="stylesheet">
<link href="assets/css/_footer_142.css" rel="stylesheet">
<link href="assets/css/_nav_142.css" rel="stylesheet">
<link href="assets/css/_offcanvas_142.css" rel="stylesheet">
<link href="assets/css/mockup.css" rel="stylesheet">
</head>`;
}

function header(activeId) {
	return `
<header id="g-header">
    <div class="g-container">
        <div class="g-grid">
            <div class="g-block size-22">
                <div class="g-content g-particle">
                    <a href="index.html" title="PHISON Logo" class="gantry-logo">
                        <img src="assets/img/Phison-SVG.svg" alt="PHISON Logo">
                    </a>
                </div>
            </div>
            <div class="g-block size-78 main_menu">
                <div class="g-content">
                    <div class="menu moduletable">
                        <nav class="g-main-nav" data-g-hover-expand="true">
                            <ul class="g-toplevel">
                                ${renderDesktopNav(activeId)}
                                <li class="g-menu-item g-standard header_search_div">
                                    <span class="g-menu-item-container">
                                        <span class="g-nav-header g-menu-item-content" title="Search">
                                            ${ICON_SEARCH}
                                        </span>
                                    </span>
                                </li>
                                <li class="g-menu-item g-standard">
                                    <span class="g-menu-item-container">
                                        <span class="g-menu-item-content"><span class="g-menu-item-title">English</span></span>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="g-offcanvas-toggle" role="navigation" aria-controls="g-offcanvas" aria-expanded="false">${ICON_BARS}</div>
</header>
<div id="g-offcanvas" data-g-offcanvas-swipe="1">
    <div id="g-mobilemenu-container">${renderMobileNav(activeId)}</div>
</div>
<div class="g-nav-overlay"></div>`;
}

function footer() {
	return `
<footer id="g-footer">
    <div class="g-container">
        <div class="g-grid">
            <div class="g-block size-20">
                <div class="footer-1 moduletable">
                    <p>
                        <a href="company.html">About us</a><br>
                        <a href="investors.html">Investor Relations</a><br>
                        <a href="esg.html">ESG</a><br>
                        <a href="company.html">Careers</a><br>
                        <a href="company.html">Newsroom</a>
                    </p>
                </div>
            </div>
            <div class="g-block size-20">
                <div class="footer-2 moduletable">
                    <p>
                        <a href="technology.html">Technology</a><br>
                        <a href="solutions.html">Solutions</a><br>
                        <a href="enterprise.html">Enterprise</a><br>
                        <a href="applications.html">Embedded</a><br>
                        <a href="applications.html">Consumer</a>
                    </p>
                </div>
            </div>
            <div class="g-block size-20">
                <div class="footer-3 moduletable">
                    <p>
                        <a href="applications.html">IMAGIN+</a><br>
                        <a href="applications.html">Signal Conditioning</a><br>
                        <a href="applications.html">Automotive</a><br>
                        <a href="applications.html">Gaming</a><br>
                        <a href="applications.html">Security</a>
                    </p>
                </div>
            </div>
            <div class="g-block size-20">
                <div class="footer-4 moduletable">
                    <p>
                        <a href="blog.html">Blog</a><br>
                        <a href="contact.html">Contact</a><br>
                        <a href="#">Sitemap</a><br>
                        <a href="#">Privacy Policy</a><br>
                        <a href="#">Terms of Use</a>
                    </p>
                </div>
            </div>
            <div class="g-block size-20">
                <div class="g-content g-particle">
                    <a href="index.html" class="gantry-logo"><img src="assets/img/Phison-SVG.svg" alt="PHISON Logo"></a>
                </div>
                <div class="g-social social">
                    <a href="https://www.linkedin.com/company/phison-electronics/" target="_blank" rel="noopener">${ICON_LINKEDIN}</a>
                    <a href="https://www.facebook.com/phisonUS/" target="_blank" rel="noopener">${ICON_FACEBOOK}</a>
                    <a href="https://www.youtube.com/c/PhisonElectronicsCorp" target="_blank" rel="noopener">${ICON_YOUTUBE}</a>
                </div>
            </div>
        </div>
        <div class="g-grid">
            <div class="g-block size-100 copyright_div">© 2026 (local nav mockup — not the live site)</div>
        </div>
    </div>
</footer>`;
}

function page({ title, description, activeId, body }) {
	return `${head(title, description)}
<body class="gantry page g-offcanvas-left g-style-preset1">
<div id="phx-mockup-banner">Internal nav mockup — styled to match <strong>phison.com</strong>, not the live site</div>
<div id="g-page-surround">
${header(activeId)}
<main>
${body}
</main>
${footer()}
</div>
<script src="assets/js/mockup.js"></script>
</body>
</html>`;
}

module.exports = { page, esc, NAV };
