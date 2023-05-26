const openMenu = document.querySelectorAll('.dropdown__list');
let btn = document.querySelectorAll('.dropdown__value');
btn.forEach((e) => {
	e.addEventListener("click", () => {
		openMenu[0].classList.toggle('dropdown__list_active');
	});
});
const linkName = document.querySelectorAll('.dropdown__link');
for (let i = 0; i < linkName.length; i++) {
	linkName[i].addEventListener("click", (event) => {
		event.preventDefault();
		btn[0].textContent = linkName[i].textContent;
		openMenu[0].classList.remove('dropdown__list_active');
	})
}