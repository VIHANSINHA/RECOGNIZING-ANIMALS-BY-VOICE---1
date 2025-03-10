x=0;
y=0;
draw_circle="";
draw_rect="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening, Please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The Speech has been recognized as: "+content;
    if(content=="circle")
{
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started drawing circle";
    draw_circle="true";
}

if(content=="rectangle")
{
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started drawing rectangle";
    draw_rect="true";
}
}
function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
    if(draw_circle=="true"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn."
        draw_circle="";
    }

    if(draw_rect=="true"){
        recognition(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is drawn."
        draw_rect="";
    }
}