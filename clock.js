const digitClock = document.querySelector(".digitClock");

function timeNow() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    digitClock.innerText = `${(hours < 10) ? `0${hours}` : `${hours}`} : ${(minutes < 10) ? `0${minutes} ` : `${minutes} `} : ${(seconds < 10) ? `0${seconds} ` : `${seconds}`} `;
}
setInterval(timeNow, 1000);