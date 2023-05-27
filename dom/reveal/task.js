const el = document.querySelectorAll(".reveal")
window.addEventListener("scroll", function show() {
	for (let i = 0; i < el.length; i++) {
		const rect = el[i].getBoundingClientRect();
		el[i].classList.toggle('reveal_active', (rect.top < window.innerHeight) && (rect.bottom > 0));

	};

})