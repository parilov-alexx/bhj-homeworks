const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
const time = document.getElementById("speed__counter");
let clickerNumber = +clicker.textContent;
let start = 0

image.onclick = () => {

	if (clickerNumber % 2 == 0) {
		clickerNumber++;
		image.width = 400;
		clicker.textContent = clickerNumber;
	} else {
		clickerNumber++;
		image.width = 200;
		clicker.textContent = clickerNumber;
	}
	let end = Date.now();
	let timeDif = end - start;
	let clickSpeed = 1 / (timeDif / 1000);
	time.textContent = clickSpeed.toFixed(2);
	start = end;
}




