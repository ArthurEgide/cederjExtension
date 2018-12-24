var video = document.querySelector('video');

focusMethod = function getFocus() {           
  video .focus();
}

onkeypress = function(event){
    //alert(event.code);
    document.getElementById("RIOvideo").focus();
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
    
        case "KeyA":
          alert("est");
          RIOchangeSlide('NEXT');
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
<<<<<<< HEAD:firefox/videoTools/mediaControl.js
        
        case "Enter":
        case "NumpadEnter":
          var tempo = video.currentTime,
              marca = window.prompt("Nota sobre a marcação","");
          if(window.confirm("Quer salvar '" + marca + "'\n mesmo?")){
            alert(tempo + "s\n" + marca + "\nSalvo com sucesso")
          }
=======
    
        case "Enter":
        case "NumpadEnter":
          var momento = (video.currentTime + "s");
          var marca = prompt("Nota sobre a marcação","");
          alert(momento + "\n" + marca);
>>>>>>> 8411217a6304e5c5159c61f1ae491ca3670cdd0f:firefox/jscript.js
        break;
      }
}

function videoJump(numStr){
    return (video.duration/10) * (parseInt(numStr.substring(5, 6), 10));
  }