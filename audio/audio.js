

const audio = document.getElementById("audio");
const progreso = document.getElementById("progreso");

let cancionActual = 0;

audio.addEventListener("timeupdate", actualizarProgreso());

function actualizarProgreso(){
    const porcentaje = (audio.currentTime / audio.duration) * 100;
    progreso.style.width = porcentaje + "%";
}

function repPausar(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}

function repParar(){
    audio.pause();
    audio.cancionActual = 0;
}



