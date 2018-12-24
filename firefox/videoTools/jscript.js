var video = document.querySelector('video');


onkeypress = function(event){
    //alert(event.code);

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
          var tempo = video.currentTime,
              marca = window.prompt("Nota sobre a marcação","");
          if(window.confirm("Quer salvar '" + marca + "'\n mesmo?")){
            alert(tempo + "s\n" + marca + "\nSalvo com sucesso")
          }
        break;
      }
}

function videoJump(numStr){
    return (video.duration/10) * (parseInt(numStr.substring(5, 6), 10));
  }