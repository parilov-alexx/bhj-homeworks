let deadMoles = document.getElementById("dead")
let lostClick = document.getElementById("lost")

for (let index = 1; index < 10; index++) {
	getHole = index => document.getElementById(`hole${index}`);
	getHole(index).onclick = () => {
		if (getHole(index).className.includes("hole_has-mole") && +deadMoles.textContent < 9) {
			let deadMolesNumber = +deadMoles.textContent
			deadMolesNumber++;
			deadMoles.textContent = deadMolesNumber
		} else if (+deadMoles.textContent > 8) {
			alert("Победа!");
			deadMoles.textContent = "0";
			lostClick.textContent = "0";
		} else if (+lostClick.textContent < 4) {
			let lostClickNumber = +lostClick.textContent;
			lostClickNumber++;
			lostClick.textContent = lostClickNumber
		} else if (+lostClick.textContent > 3) {
			alert("Вы проиграли!");
			deadMoles.textContent = "0";
			lostClick.textContent = "0";
		}

	}
}


