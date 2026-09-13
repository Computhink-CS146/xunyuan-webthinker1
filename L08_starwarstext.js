
let storyText = [
    "A long time ago in a galaxy far",
    "far away",
    "there is a world called sekai",
    "our band starts here",
    "anything is possible",
    "HATSUNE MIKU COLORFUL STAGEEEEEE!!!"

]
let ypos = 400;
let lineGap = 60;
function preload(){
    volume = loadSound('assets/star_wars_theme_8_bit.mp3');



}
 function setup(){
    createCanvas(600,600);
    



 }

 function draw(){
        background(0);
        fill(255,255,0);
    textSize(24);
    textAlign(CENTER);
    for(let i=0; i<storyText.length;i++) {
         text( (i+1) +"."+storyText[i],width/2,ypos + i * lineGap);

    }
    ypos -= 0.6;
    if (ypos < -storyText.length * lineGap) { 
        ypos = height;
    }


 }
    