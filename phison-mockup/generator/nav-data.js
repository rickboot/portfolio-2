// Single source of truth for the nav hierarchy.
// This mirrors the CURRENT phison.com nav exactly (extracted from a saved
// copy of the live homepage). Edit this file to try different hierarchies —
// run `node build/build.js` from phison-mockup/ afterwards to regenerate
// every page.

module.exports = [
	{ id: 'technology', title: 'Technology', href: 'technology.html' },
	{
		id: 'applications',
		title: 'Applications',
		href: null,
		columns: [
			{
				title: null,
				items: [
					{ title: 'Embedded', href: 'applications.html' },
					{ title: 'Consumer', href: 'applications.html' },
					{ title: 'IMAGIN+', href: 'applications.html' },
					{ title: 'aiDAPTIV+', href: 'applications.html' },
				],
			},
			{
				title: null,
				items: [
					{ title: 'Signal Conditioning', href: 'applications.html' },
					{ title: 'Automotive', href: 'applications.html' },
					{ title: 'Gaming', href: 'applications.html' },
					{ title: 'Security', href: 'applications.html' },
				],
			},
		],
	},
	{ id: 'enterprise', title: 'Enterprise', href: 'enterprise.html' },
	{
		id: 'solutions',
		title: 'Solutions',
		href: 'solutions.html',
		columns: [
			{
				title: 'Solutions',
				items: [
					{ title: 'Overview', href: 'solutions.html' },
					{ title: 'SSD', href: 'solutions.html' },
					{ title: 'UFS', href: 'solutions.html' },
					{ title: 'eMMC', href: 'solutions.html' },
					{ title: 'Memory Cards', href: 'solutions.html' },
					{ title: 'USB', href: 'solutions.html' },
				],
			},
			{
				title: 'Featured Products',
				items: [
					{ title: 'E37T', href: 'solutions.html' },
					{ title: 'E28', href: 'solutions.html' },
					{ title: 'E31T', href: 'solutions.html' },
					{ title: 'E18', href: 'solutions.html' },
					{ title: 'U21', href: 'solutions.html' },
					{ title: 'U17 / U18', href: 'solutions.html' },
				],
			},
			{
				title: 'Partners',
				items: [{ title: 'E26', href: 'solutions.html' }],
			},
		],
	},
	{
		id: 'company',
		title: 'Company',
		href: null,
		columns: [
			{
				title: 'About',
				items: [
					{ title: 'Overview', href: 'company.html' },
					{ title: 'Investors', href: 'investors.html' },
					{ title: 'ESG', href: 'esg.html' },
					{ title: 'Careers', href: 'company.html' },
					{ title: 'Global Talents', href: 'company.html' },
					{ title: 'Contact Us', href: 'contact.html' },
				],
			},
			{
				title: 'Media',
				items: [
					{ title: 'Newsroom', href: 'company.html' },
					{ title: 'Press Releases', href: 'company.html' },
					{ title: 'Phison in the News', href: 'company.html' },
					{ title: 'Events', href: 'company.html' },
					{ title: 'Media Kits', href: 'company.html' },
					{ title: 'Blog', href: 'blog.html' },
				],
			},
		],
	},
	{ id: 'investors', title: 'Investors', href: 'investors.html' },
	{ id: 'esg', title: 'ESG', href: 'esg.html' },
	{ id: 'blog', title: 'Blog', href: 'blog.html' },
	{ id: 'contact', title: 'Contact', href: 'contact.html' },
];
