const fontBtn = document.querySelectorAll(".font-size");
const book = document.querySelectorAll(".book")
for (let i = 0; i < fontBtn.length; i++) {
	fontBtn[i].addEventListener('click', () => {
		event.preventDefault();
		const currentFont = fontBtn[i].parentElement.querySelector('.font-size_active');
		if (fontBtn[i] != currentFont) {
			currentFont.classList.remove('font-size_active');
			fontBtn[i].classList.add('font-size_active');
		}

		if (fontBtn[i].getAttribute("data-size") === "small") {
			book[0].classList.remove("book_fs-big");
			book[0].classList.add("book_fs-small");
		} else if (fontBtn[i].getAttribute("data-size") === "big") {
			book[0].classList.remove("book_fs-small");
			book[0].classList.add("book_fs-big");
		} else if (fontBtn[i].getAttribute("data-size") === null) {
			book[0].classList.remove("book_fs-small");
			book[0].classList.remove("book_fs-big");
		}
	})
}