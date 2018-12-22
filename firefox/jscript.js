var video = document.querySelector('video');


onkeypress = function(event){
    alert(event.code);
    video.focus;
    switch(event.code){
        case "KeyF":
        
        if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          }
        break;
    
        case "Digit1":
        case "Digit2":
        case "Digit3":
        case "Digit4":
        case "Digit5":
        case "Digit6":
        case "Digit7":
        case "Digit8":
        case "Digit9":
        
        video.currentTime = videoJump(event.code);
        break;
    
        case "Enter":
        case "NumpadEnter":
          var momento = (video.currentTime + "s");
          var marca = prompt("Nota sobre a marcação","'Equação de 2° grau'");
          alert("Marcar momento video");
          alert(momento + "\n" + marca);
        break;
      }
}

function videoJump(numStr){
    return (video.duration/10) * (parseInt(numStr.substring(5, 6), 10));
  }