const secondsEl = document.getElementById("secs");
const minutesEl = document.getElementById("mins");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");
const yearEl = document.getElementById("current-year");


let targetDate = getNextChristmasDate();
function getNextChristmasDate(){
  const today = new Date();
  let year = today.getFullYear();

  // Christmas date to the end of christmas day
  let christmas = new Date(year, 11, 25, 23, 59, 59);

  // christmas day passed switch to next year
  if(today>christmas){
    year++;
    christmas= new Date(year, 11, 25, 23, 59, 59);
  }
  yearEl.innerHTML = year;
  return christmas;
}

function countdown() {
  const today = new Date();

  const totSeconds = Math.floor((targetDate - today) / 1000);
//rollover to next christmas
  if (totSeconds <=0){
    targetDate = getNextChristmasDate();
    totSeconds = Math.floor((targetDate- today)/1000);
  }
  const seconds = Math.floor(totSeconds) % 60;
  const minutes = Math.floor(totSeconds / 60) % 60;
  const hours = Math.floor(totSeconds / 3600) % 24;
  const days = Math.floor(totSeconds / 24 / 3600);

  secondsEl.innerHTML = formatTime(seconds);
  minutesEl.innerHTML = formatTime(minutes);
  hoursEl.innerHTML = formatTime(hours);
  daysEl.innerHTML = formatTime(days);
  //   console.log(days, hours, minutes, seconds);
}

console.log(year);
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
