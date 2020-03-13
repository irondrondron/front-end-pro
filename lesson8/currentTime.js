// Написать скрипт, который будет выводить часы в консоль. В формате HH:mm:ss

function getDate() {
  var date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
  if (hours < 10) {
      hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  console.clear();
  console.log(`${hours}:${minutes}:${seconds}`);

}
setInterval(getDate, 1000);