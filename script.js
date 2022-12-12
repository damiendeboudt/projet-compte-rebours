let CpteARebours = function (Minutes, Secondes) {
    this.Minutes = Minutes
    this.Seconds = Secondes
}

let minutes = document.getElementById("timer-Minutes");
let seconds = document.getElementById("timer-Seconds");

const boutonStart = document.getElementById('start');
const boutonStop = document.getElementById('stop');
const boutonReset = document.getElementById('reset');

boutonStart.addEventListener("click", ()=> {
  document.getElementById("compte-à-rebours").innerText = minutes.value + ":" + seconds.value
})

let timer = new CpteARebours(minutes.value, seconds.value)