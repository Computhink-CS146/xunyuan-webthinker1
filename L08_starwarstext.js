
let storyText = [
    "A long time ago in a galaxy far",
    "far away",
    "there is a world called sekai",
    "our band starts here",
    "anything is possible",
    "HATSUNE MIKU COLORFUL STAGEEEEEE!!!"

]
function preload(){
    volume = loadSound('sfx/star_wars_theme_8_bit.mp3');


}
 function setup(){
    background(0);


 }

 function draw(){
        fill(255,255,0);
    textSize(24);
    textAlign(CENTER);
    for(let i=0; i<storyText.length;i++) {
         text( (i+1) +"."+storyText[i],width/2,ypos + i * lineGap);

    }
    ypos -= 0.6;
    if (ypos < -st.length * lineGap) { 
        ypos = height;
    }


 }
    