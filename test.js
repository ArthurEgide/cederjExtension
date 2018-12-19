var myVideo=document.getElementById("custom_video_play");
var varA=document.getElementById("var").value;

function doSomething()
{
    myVideo.width=325;
    document.getElementById("var").innerHTML = "ReDPrimer"; 
}

videojs('vidId').ready(function() {
    this.hotkeys({
      volumeStep: 0.1,
      seekStep: 5,
      enableModifiersForNumbers: false
    });
  });