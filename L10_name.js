
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
   rect(85,80,300,80);
    textSize(34);
    text(someVar, width/2, height/2-80); 

}

function updateMyVar() {
    someVar = textInput.value();
}