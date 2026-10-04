let textInput;

let button;



function setup(){
    createCanvas(700,800);
    textInput = createInput();
    textInput.position(width/2,100);

    button = createButton("click me");
    button.position(width/2, 135);
    button.mousePressed(updateText);

}


function draw(){
    background(220);



    textSize(18);
    textAlign(RIGHT,CENTER);
    text("enter a noun:",width/2-50,110);

}

function updateText() {
    console.log("hello," +textInput.value());
}