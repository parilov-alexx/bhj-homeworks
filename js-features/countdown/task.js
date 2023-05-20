const timerData = document.getElementById ("timer");

let i = +timerData.textContent;
function countdown () {
    if(i > 0) {
        i--;
        timerData.textContent = i;
    } else {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!")
    }
}

let timerId = setInterval(countdown, 1000)

