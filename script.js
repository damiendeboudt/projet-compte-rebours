
let minutes = document.getElementById("Minutes");
let seconds = document.getElementById("Seconds");
let buttonSubmit = document.getElementById("LancerCRB");
let divM = document.getElementById("M");
let divS = document.getElementById("S");


buttonSubmit.addEventListener("click",()=>{
    let interval = setInterval(function (){
        divM.innerHTML = minutes.value
        divS.innerHTML = seconds.value --

        if (seconds.value == 0) {
            parseInt(seconds.value += 59)
            divM.innerHTML = parseInt(minutes.value--)
        }
        else if (minutes.value < 0 && seconds.value == 58) {
            clearInterval(interval)
            divM.innerHTML = ""
            divS.innerHTML = ""
            seconds.value = 0
            minutes.value = 0
        }

    },100)
})