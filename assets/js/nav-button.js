(function () {
	// Enable strict mode.
	"use strict";

	// Define global object if it doesn't exist.
	if ("object" !== typeof window.LQ) {
		window.LQ = {};
	}

	LQ.navButton = () => {
		const nav = document.querySelector( '.lq-sidebar__nav' );
		const buttons = document.querySelectorAll( '.lq-sidebar__nav button' );

		// Set active initial button
		buttons[0].classList.add( 'active' );

		buttons.forEach( ( button, index ) => {
			button.addEventListener( 'click', () => {
				// Remove button active states
				buttons.forEach( b => b.classList.remove( 'active' ) );

				// Add button active state
				button.classList.add( 'active' );
			});
		});
	};

	LQ.navButton();
})();
