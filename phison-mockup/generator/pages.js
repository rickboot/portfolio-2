const { NAV } = require('./templates');

function findNavItem(id) {
	return NAV.find((n) => n.id === id);
}

function cardGrid(navId) {
	const item = findNavItem(navId);
	if (!item || !item.columns) return '';
	const cards = item.columns.flatMap((col) =>
		col.items.map(
			(sub) => `
        <a class="phx-card" href="${sub.href}">
            ${col.title ? `<span class="phx-card-eyebrow">${col.title}</span>` : ''}
            <h3>${sub.title}</h3>
            <p>Placeholder copy for the ${sub.title} page.</p>
        </a>`
		)
	);
	return `<div class="phx-card-grid">${cards.join('')}</div>`;
}

function simplePage(title, lead, extra = '') {
	return `
<section class="phx-page-hero">
    <h1>${title}</h1>
    <p>${lead}</p>
</section>
<section class="phx-section">${extra}</section>`;
}

const PAGES = {
	'index.html': {
		title: 'Home',
		description: 'Phison Electronics Corp. — A World Leader in NAND Controllers & Flash Storage Solutions.',
		activeId: null,
		body: `
<section class="phx-home-lead">
    <div class="phx-home-lead-inner">
        <h1>A World Leader in NAND Controllers &amp; Flash Storage Solutions</h1>
        <p>NAND Services and Solutions Trusted by the Top ODM, OEM, Enterprise, and Consumer Technology Providers</p>
        <a class="phx-btn" href="company.html">Learn more</a>
    </div>
</section>
<section class="phx-stats">
    <div class="phx-stats-inner">
        <p>An innovator in NAND Flash technologies for more than 20 years, Phison delivers a holistic vision for high-performance storage in the modern data ecosystem</p>
        <div class="phx-stats-grid">
            <div>Consumer, industrial &amp; enterprise NAND SSDs</div>
            <div>NAND controller ASIC development</div>
            <div>Custom, private label NAND Flash solutions</div>
            <div>Flash-focused Artificial Intelligence</div>
            <div>Industry leading signal conditioning IC (retimer/redriver)</div>
        </div>
    </div>
</section>`,
	},

	'technology.html': {
		title: 'Technology',
		description: 'Phison NAND controller and flash storage technology.',
		activeId: 'technology',
		body: simplePage(
			'Technology',
			'NAND controller ASIC design, firmware, and signal conditioning technology behind every Phison solution.',
			'<p class="phx-lead">Placeholder page for mocking up the Technology section of the nav.</p>'
		),
	},

	'applications.html': {
		title: 'Applications',
		description: 'Phison NAND flash applications across embedded, consumer, automotive, and more.',
		activeId: 'applications',
		body: `
<section class="phx-page-hero">
    <h1>Applications</h1>
    <p>Where Phison NAND flash and controller technology gets used, from embedded systems to gaming.</p>
</section>
<section class="phx-section">
    <h2>Browse by application</h2>
    <p class="phx-lead">Mirrors the current Applications dropdown — Embedded, Consumer, IMAGIN+, aiDAPTIV+, Signal Conditioning, Automotive, Gaming, and Security.</p>
    ${cardGrid('applications')}
</section>`,
	},

	'enterprise.html': {
		title: 'Enterprise',
		description: 'Phison enterprise NAND flash storage solutions.',
		activeId: 'enterprise',
		body: simplePage(
			'Enterprise',
			'Enterprise-grade SSD and storage solutions built for data center and mission-critical workloads.',
			'<p class="phx-lead">Placeholder page for mocking up the Enterprise section of the nav.</p>'
		),
	},

	'solutions.html': {
		title: 'Solutions',
		description: 'Phison SSD, UFS, eMMC, memory card, and USB solutions, plus featured products and partners.',
		activeId: 'solutions',
		body: `
<section class="phx-page-hero">
    <h1>Solutions</h1>
    <p>Storage form factors, featured controller products, and partner ecosystems.</p>
</section>
<section class="phx-section">
    <h2>Browse solutions</h2>
    <p class="phx-lead">Mirrors the current Solutions dropdown — Solutions overview, Featured Products, and Partners.</p>
    ${cardGrid('solutions')}
</section>`,
	},

	'company.html': {
		title: 'Company',
		description: 'About Phison Electronics Corp. — investors, ESG, careers, and media.',
		activeId: 'company',
		body: `
<section class="phx-page-hero">
    <h1>Company</h1>
    <p>About Phison, our leadership, careers, ESG commitments, and media resources.</p>
</section>
<section class="phx-section">
    <h2>About &amp; Media</h2>
    <p class="phx-lead">Mirrors the current Company dropdown — About and Media.</p>
    ${cardGrid('company')}
</section>`,
	},

	'investors.html': {
		title: 'Investor Relations',
		description: 'Phison Electronics Corp. investor relations.',
		activeId: 'investors',
		body: simplePage(
			'Investor Relations',
			'Financial reports, stock information, and governance for Phison Electronics Corp. (TPEX:8299).',
			'<p class="phx-lead">Placeholder page for mocking up the Investors section of the nav.</p>'
		),
	},

	'esg.html': {
		title: 'ESG',
		description: 'Phison Electronics Corp. environmental, social, and governance commitments.',
		activeId: 'esg',
		body: simplePage(
			'ESG',
			"Phison's environmental, social, and governance commitments and reporting.",
			'<p class="phx-lead">Placeholder page for mocking up the ESG section of the nav.</p>'
		),
	},

	'blog.html': {
		title: 'Blog',
		description: 'The Phison blog.',
		activeId: 'blog',
		body: simplePage(
			'Blog',
			'News, technical deep-dives, and product announcements from Phison.',
			'<p class="phx-lead">Placeholder page for mocking up the Blog section of the nav.</p>'
		),
	},

	'contact.html': {
		title: 'Contact',
		description: 'Contact Phison Electronics Corp.',
		activeId: 'contact',
		body: simplePage(
			'Contact',
			'Get in touch with Phison Electronics Corp. sales, support, and media teams.',
			'<p class="phx-lead">Placeholder page for mocking up the Contact section of the nav.</p>'
		),
	},
};

module.exports = PAGES;
