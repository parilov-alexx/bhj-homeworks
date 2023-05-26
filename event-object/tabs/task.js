const tabActive = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; i < tabActive.length; i++) {

	tabActive[i].addEventListener('click', () => {
		tabActive.forEach(element => {
			element.classList.remove("tab_active");
		});
		tabContent.forEach(element => {
			element.classList.remove("tab__content_active");
		});
		tabActive[i].classList.add("tab_active");
		tabContent[i].classList.add("tab__content_active");
	})
}