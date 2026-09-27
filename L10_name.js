
let textInput;
let someVar;

function setup(){
    createCanvas(600,400);
    background('lightblue');
    textAlign(CENTER,CENTER);
    textInput = createInput();
    textInput.position(width/2-100, height/2);
    textInput.input(updateMyVar);

}


function draw(){
    background('lightblue');
    stroke('orange');
    strokeWeight(8);
    
   rect(120,80,300,80,20,20);
   fill('white');
    textSize(34);
    text(someVar, width/2, height/2-80); 

    textSize(14);
    fill();
    textAlign(LEFT,CENTER);
    stroke('');
    strokeWeight(0);
    text("what is your name?", 70, height/2+10);
    text("how old are")

}

function updateMyVar() {
    someVar = textInput.value();
}