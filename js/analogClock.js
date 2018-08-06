// capture the hands in three constants
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// grab the current time and date
var myDate = new Date();
// extract the three time elements
let hr = myDate.getHours();
let min = myDate.getMinutes();
let sec = myDate.getSeconds();

// calculate the initial time values to degrees on the clock
// we want the hourhand to move 60 little times for each minute
let hrPosition = (hr * (360/12)) + (min * (360/60) / 12);
// we want the minutehand to move 60 little times for each second
let minPosition = (min * (360/60)) + (sec * (360/60) / 60);
// each second moves 6 degrees
let secPosition = sec * (360/60);

// function to adjust the hand positions of the clock
function runTheClock() {

    // keep moving the hands every second
    hrPosition = hrPosition + ( (360/12) / 3600);
    minPosition = minPosition + ( (1/60) * 6 );
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// set-up the call to out runTheClock function
var myInterval = setInterval(runTheClock, 1000);
