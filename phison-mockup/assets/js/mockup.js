// Minimal interaction layer for the local nav mockup.
// The real site drives its header off a large Joomla/Gantry JS bundle
// (core.min.js, dropdown.min.js, uikit.min.js, jquery...). None of that is
// needed here: the copied CSS already knows how to *show* a dropdown or the
// offcanvas panel once the right class is present, so this file only ever
// toggles those same classes.
(function () {
	// Desktop dropdowns open on hover via CSS; this adds click support for
	// touch devices, toggling the same ".phx-open" class the CSS listens for.
	document.querySelectorAll('.g-toplevel > li.g-parent').forEach(function (li) {
		var trigger = li.querySelector(':scope > .g-menu-item-container');
		if (!trigger) return;
		trigger.addEventListener('click', function (e) {
			if (window.matchMedia('(hover: hover)').matches) return;
			e.preventDefault();
			var isOpen = li.classList.contains('phx-open');
			document.querySelectorAll('.g-toplevel > li.g-parent.phx-open').forEach(function (open) {
				open.classList.remove('phx-open');
			});
			if (!isOpen) li.classList.add('phx-open');
		});
	});

	document.addEventListener('click', function (e) {
		if (!e.target.closest('.g-toplevel > li.g-parent')) {
			document.querySelectorAll('.g-toplevel > li.g-parent.phx-open').forEach(function (open) {
				open.classList.remove('phx-open');
			});
		}
	});

	// Mobile hamburger: the real CSS shows/slides #g-offcanvas once
	// "g-offcanvas-open" is present on <body> (body already carries the
	// "g-offcanvas-left" class in the copied markup).
	var toggle = document.querySelector('.g-offcanvas-toggle');
	var overlay = document.querySelector('.g-nav-overlay');
	if (toggle) {
		toggle.addEventListener('click', function () {
			document.body.classList.toggle('g-offcanvas-open');
		});
	}
	if (overlay) {
		overlay.addEventListener('click', function () {
			document.body.classList.remove('g-offcanvas-open');
		});
	}
})();
