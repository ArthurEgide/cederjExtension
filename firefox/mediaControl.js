var video = document.querySelector('video');

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


function videoJump(number){
  return (video.duration/10) * (number - 48);
}