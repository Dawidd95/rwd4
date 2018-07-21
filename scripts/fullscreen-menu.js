function init() {
	let acc = document.getElementsByClassName("open-button");
	let closeMenu = document.querySelector(".close-button");

	for ( let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", showContent);
	}

	closeMenu.addEventListener("click", showContent);

	function showContent() {
        this.nextElementSibling.classList.toggle("open-overlay");
    }
}
document.addEventListener("DOMContentLoaded", init);