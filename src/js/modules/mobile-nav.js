function mobileNav() {
	const navBtnOpen = document.querySelector("#modalOpen");
	const checkbox = document.querySelector("#yourCheckboxId");

	const navOverlay = document.querySelector("#mobileNavOverlay");
	const nav = document.querySelector("#mobileNav");

	navBtnOpen.onclick = toggleMobileNav;
	// navBtnClose.onclick = toggleMobileNav;
	navOverlay.onclick = toggleMobileNav;

	function toggleMobileNav(event) {
		navOverlay.classList.toggle("mobile-nav-overlay--open");
		nav.classList.toggle("mobile-nav--open");
		document.body.classList.toggle("no-scroll");

		// Проверяем, было ли событие вызвано кликом по оверлею
		if (event.target === navOverlay) {
			// Сбрасываем состояние чекбокса
			checkbox.checked = false;
		}
	}
}

export default mobileNav;
