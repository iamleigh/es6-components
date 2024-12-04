(function () {
	// Enable strict mode.
	"use strict";

	// Define global object if it doesn't exist.
	if ("object" !== typeof window.LQ) {
		window.LQ = {};
	}

	LQ.toggleButton = () => {
		const sidebar = document.querySelectorAll( '.lq-sidebar' );

		// Open and close sidebar.
		sidebar[0].classList.toggle( 'lq-sidebar--closed' );
	};
})();
