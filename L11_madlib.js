let textInput;
let verbInput;
let adjInput;
let adverbInput;
let placeInput;
let button;
let storyText


function setup(){
    createCanvas(700,800);
    textInput = createInput();
    textInput.position(width/2,100);
    verbInput = createInput();
    verbInput.position(width/2,150);
    adjInput = createInput();
    adjInput.position(width/2,200);
    adverbInput = createInput();
    adverbInput.position(width/2,250);
    placeInput = createInput();
    placeInput.position(width/2,300);



    button = createButton("click me");
    button.position(width/2, 350);
    button.mousePressed(updateText);

}


function draw(){
    background(220);



    textSize(18);
    textAlign(RIGHT,CENTER);
    text("enter a noun:",width/2-50,110);
    text("enter a verb:",width/2-50,160);
    text("enter an adj:",width/2-50,210);
    text("enter an adverb: ",width/2-50,260);
    text("enter a place:",width/2-50,310);
    

}

function updateText() {
    console.log("noun:," +textInput.value());
    console.log("verb:," +verbInput.value());
    console.log("adj:," +adjInput.value());
    console.log("adverb:," +adverbInput.value());
    console.log("place:," +placeInput.value());

}