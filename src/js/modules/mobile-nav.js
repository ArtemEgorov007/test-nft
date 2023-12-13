function mobileNav() {
	const navBtnOpen = document.querySelector("#modalOpen");
	const checkbox = document.querySelector("#yourCheckboxId");

	const navOverlay = document.querySelector("#mobileNavOverlay");
	const nav = document.querySelector("#mobileNav");

	navBtnOpen.onclick = toggleMobileNav;
	navOverlay.onclick = toggleMobileNav;

	function toggleMobileNav(event) {
		navOverlay.classList.toggle("mobile-nav-overlay--open");
		nav.classList.toggle("mobile-nav--open");
		document.body.classList.toggle("no-scroll");

		if (event.target === navOverlay) {
			checkbox.checked = false;
		}
	}
}

export default mobileNav;
