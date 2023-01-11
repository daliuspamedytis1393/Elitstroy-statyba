export const headerScroll = function() {
	const header = document.querySelector("nav");
	let lastScroll = 0;

	const throttle = (func, time = 100) => {
		const lastTime = 0;
		return () => {
			const now = new Date();
			if (now - lastTime >= time) {
				func();
				time = now;
			}
		};
	};

	const validateHeader = () => {
		// eslint-disable-next-line no-console

		const windowY = window.scrollY;
		const windowH = 100;
		if (windowY > windowH) {
			// We passed the first section, set a toggable class
			header.classList.add("is-fixed");

			// Determine is we ready to animate
			if (windowY > windowH + 50) {
				header.classList.add("can-animate");
				if (windowY < lastScroll) {
					// Determine if we scrolling up
					header.classList.add("scroll-up");
				} else {
					header.classList.remove("scroll-up");
				}
			} else {
				header.classList.remove("scroll-up");
			}
		} else {
			header.classList.remove("is-fixed", "can-animate");
		}
		lastScroll = windowY;
	};

	window.addEventListener("scroll", throttle(validateHeader, 100));
}

export const OpenMobileMenu = function(){
	const mobileMenu = document.getElementById('menu_slide_bar');
	const mobileMenuBtn = document.getElementById('mobile_menu');
	const bodyOverlay = document.getElementById('body_overlay');

	mobileMenu.classList.add("show")
	mobileMenuBtn.classList.add("open")
	bodyOverlay.classList.add("active")
}

export const CloseMobileMenu = function() {
	const mobileMenu = document.getElementById('menu_slide_bar')
	const mobileMenuBtn = document.getElementById('mobile_menu')
	const bodyOverlay = document.getElementById('body_overlay')

	mobileMenu.classList.remove('show')
	mobileMenuBtn.classList.remove('open')
	bodyOverlay.classList.remove('active')
}
