const textBlocks = document.querySelectorAll(".rotator");

const setChanging = textBlock => {
	textBlock.cases[textBlock.index].classList.remove("rotator__case_active");
	textBlock.index++;
	if (textBlock.index >= textBlock.cases.length) {
		textBlock.index = 0;
	}
	textBlock.cases[textBlock.index].classList.add("rotator__case_active");
	setTimeout(setChanging, textBlock.cases[textBlock.index].getAttribute('data-speed'), textBlock)
}

for (const textBlock of textBlocks) {
	textBlock.cases = textBlock.querySelectorAll(".rotator__case");
	textBlock.index = textBlock.cases.length - 1;

	for (const textColor of textBlock.cases) {
		textColor.style.color = textColor.dataset.color;
	}

	setChanging(textBlock)
}