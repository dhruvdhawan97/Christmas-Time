const secondsEl = document.getElementById("secs");
const minutesEl = document.getElementById("mins");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");
const newYears = " 25 Dec 2021 00:00:00";
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totSeconds = Math.floor((newYearsDate - currentDate) / 1000);
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

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
