let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer;

const display = document.querySelector(".timer");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", function () {

    if (timer) {
        return;
    }

    timer = setInterval(function () {

        milliseconds++;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        display.innerText =
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0") + ":" +
            String(milliseconds).padStart(2, "0");

    }, 10);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerText = "00:00:00:00";
});
