const currentClock = document.querySelector("#currentClock");

function getWatch(){

    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute : minute;
    second = second < 10 ? "0"+second : second;
    currentClock.innerText= `${hour}:${minute}`;
}

getWatch();

setInterval(() => {
    getWatch();
}, 1000);

