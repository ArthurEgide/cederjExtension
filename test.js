var play = document.querySelector('#play');
var pause = document.querySelector('#pause');
var video = document.querySelector('video');
var cont = document.querySelector('#contador');


video.onended = function() {
  alert(video.duration);
};

video.ontimeupdate = function(){
  cont.innerHTML = video.currentTime;
}

/*while(video.currentTime <= video.duration){
  cont.innerHTML = video.currentTime;
}


 video.onplay = function(){
  alert("Tocando");

  

}*/

play.addEventListener('click', function(){
  video.play();
  
});
video.ended
pause.addEventListener('click', function(){
  video.pause();

});

recuar.addEventListener('click', function(){
  //alert(video.currentTime);
  video.currentTime -= 2;
});

avancar.addEventListener('click', function(){
  //alert(video.currentTime);
  video.currentTime += 2;
  

});

telaCheia.addEventListener('click', function(){
  //alert(video.currentTime);
  video.webkitEnterFullScreen();
  video.webkitEnterFullscreen();
});

function fimVideo(){
  if(video.ended == true){
    return true;
  }else{
    return false;
  }
}