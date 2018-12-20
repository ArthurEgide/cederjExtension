var play = document.querySelector('#play'),
    pause = document.querySelector('#pause'),
    video = document.querySelector('video'),
    cont = document.querySelector('#temporizador'),
    tecla = document.querySelector('#tecla');

var text = "a";

onkeydown = function(){
  var x = event.which || event.keyCode;
  tecla.innerHTML = x;
  switch(x){
    case 35:
    video.currentTime = video.duration;
    break;

    case 36:
      video.currentTime = 0;
    break;

    case 37:
      video.currentTime -= 2;
    break;

    case 38:
      video.volume += 0.3;
    break;

    case 39:
      video.currentTime += 2;
    break;

    case 40:
      video.volume -= 0.3;
    break;
  }
}

onkeypress = function(){
  var x = event.which || event.keyCode;
  
  switch(x){
    case 32:
      if(!video.paused){
        video.pause();
      }else{
        video.play();
      }
    break;

    case 102:
    case 70:
      video.webkitEnterFullscreen();
    break;

    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    video.currentTime = videoJump(x);
    break;

  }
}

video.ontimeupdate = function(){
  cont.innerHTML = video.currentTime;
}

play.addEventListener('click', function(){
  video.play();
});

video.ended
pause.addEventListener('click', function(){
  video.pause();

});

recuar.addEventListener('click', function(){
  video.currentTime -= 2;
});

avancar.addEventListener('click', function(){
  video.currentTime += 2;
});

telaCheia.addEventListener('click', function(){
  video.webkitEnterFullScreen();
});

function videoJump(number){
  return (video.duration/10) * (number - 48);
}