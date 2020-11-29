function bf(){
    var btn = document.getElementById("btn")
    var audio = document.getElementById('music1'); 
    if(audio.paused)                     {                 
        audio.play();
        btn.style.animationPlayState="running"
    }
    else{
        audio.pause();
        btn.style.animationPlayState="paused"
    }
}

