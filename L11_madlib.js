let textInput;
let verbInput;
let adjInput;
let adverbInput;
let placeInput;
let button;



function setup(){
    createCanvas(700,800);
    textInput = createInput();
    textInput.position(width/2,100);
    verbInput = createInput();
    verbInput.position(width/2,150);
    adjInputInput = createInput();
    adjInput.position(width/2,150);
    adverbInput = createInput();
    adverbInput.position(width/2,150);
    placeInput = createInput();
    pInput.position(width/2,150);



    button = createButton("click me");
    button.position(width/2, 600);
    button.mousePressed(updateText);

}


function draw(){
    background(220);



    textSize(18);
    textAlign(RIGHT,CENTER);
    text("enter a noun:",width/2-50,110);
    text("enter a verb:",width/2-50,160);
    

}

function updateText() {
    console.log("hello," +textInput.value());
}