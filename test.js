var myVideo=document.getElementById("custom_video_play");
var varA=document.getElementById("var").value;


function makeBig()
{
    myVideo.width=450;
}
function makeSmall()
{
    myVideo.width=250;
}

function makeNormal()
{
    myVideo.width=325;
    document.getElementById("var").innerHTML = "varA"; 


}
