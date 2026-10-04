let textInput;

let button;



function setup(){
    createCanvas(700,800);
    textInput = createInput();
    textInput.position(width/2,100);

    button = createButton("click me");
    button.position(width/2, 135);
    button.mousePressed( U)

}


function draw(){
    background(220);



    textSize(18);
    textAlign(RIGHT,CENTER);
    text("type name:",width/2-50,110);

}