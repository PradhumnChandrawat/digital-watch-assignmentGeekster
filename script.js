function time() {
  let date = new Date();
  let timeInHours = date.getHours();
  let timeInMinutes = date.getMinutes();
  let timeInSeconds = date.getSeconds();

  let timeInHoursTHF = timeInHours % 12;
  timeInHoursTHF = timeInHoursTHF ? timeInHoursTHF : 12;

  document.getElementById("hour").innerText = padZero(timeInHoursTHF);
  document.getElementById("minute").innerText = padZero(timeInMinutes);
  document.getElementById("second").innerText = padZero(timeInSeconds);
  document.getElementById("am-pm").innerText = timeInHours >= 12 ? "PM" : "AM";
}

function padZero(time) {
  return time < 10 ? "0" + time : time;
}

setInterval(time, 1000);
