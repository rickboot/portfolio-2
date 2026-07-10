const fs = require('fs');
const path = require('path');
const { page } = require('./templates');
const PAGES = require('./pages');

const OUT_DIR = path.join(__dirname, '..');

for (const [filename, def] of Object.entries(PAGES)) {
	const html = page(def);
	fs.writeFileSync(path.join(OUT_DIR, filename), html);
	console.log('wrote', filename);
}
