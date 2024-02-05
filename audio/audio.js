

const audio = document.getElementById("audio");
const reproParar = document.getElementById("reproPausar");
const reiniciar = document.getElementById("reiniciar");
const maxVolumen = document.getElementById("maxVolumen");
const quitarVolumen = document.getElementById("quitarVolumen");
// Reproducir y pausar
reproPausar.addEventListener("click", function(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
})

// Reiniciar
reiniciar.addEventListener('click',  function(){
    audio.currentTime = 0;
})

// Quitar el sonido
quitarVolumen.addEventListener('click',  function(){
    if(audio.volume == 0){
        audio.volume = 0.1;
    }else{
        audio.volume = 0;
    }
});

// Sonido al máximo 

maxVolumen.addEventListener('click',  function(){
    if(audio.volume = 0){
        audio.volume = 1;
    }else{
        audio.volume = 1;
    }
})
