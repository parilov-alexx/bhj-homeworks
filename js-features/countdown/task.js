const timerData = document.getElementById ("timer");

let i = +timerData.textContent;
function countdown () {
    if(i > 0) {
        i--;
        timerData.textContent = i;
    } else {
        alert("Вы победили в конкурсе!")
    }
}

setInterval(countdown, 1000)

