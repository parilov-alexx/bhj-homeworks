const tips = document.querySelectorAll(".has-tooltip");
for (const tip of tips) {
	const tooltip = document.createElement('div');
	tooltip.className = 'tooltip';
	tooltip.dataset.position = 'bottom';
	tooltip.innerText = tip.title;

	tip.insertAdjacentElement('afterEnd', tooltip);

	tip.addEventListener('click', (e) => {
		e.preventDefault();
		if (tooltip.classList.contains('tooltip_active')) {
			tooltip.classList.remove('tooltip_active');
			return;
		}

		const activeToolTip = document.querySelector('.tooltip_active');
		if (activeToolTip) {
			activeToolTip.classList.remove('tooltip_active');
			tooltip.classList.add('tooltip_active');
			const tipPosition = tooltip.getBoundingClientRect();
			tooltip.dataset.position = tipPosition.bottom;
			const linkRect = tip.offsetLeft;
			tooltip.style.left = linkRect + 'px';
		} else {
			tooltip.classList.add('tooltip_active');
			const tipPosition = tooltip.getBoundingClientRect();
			tooltip.dataset.position = tipPosition.bottom;
			const linkRect = tip.offsetLeft;
			tooltip.style.left = linkRect + 'px';
		}
	})
}