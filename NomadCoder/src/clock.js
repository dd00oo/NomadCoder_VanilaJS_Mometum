const clock = document.querySelector("#clock");

function onClock() {
  const today = new Date();

  const hours = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  //const seconds = today.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${hours}:${minutes}`;
}

onClock();
setInterval(onClock, 1000);
