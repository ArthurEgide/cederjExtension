var play = document.querySelector('#play');
var pause = document.querySelector('#pause');
var video = document.querySelector('video');

play.addEventListener('click', function(){
  video.play();

});

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