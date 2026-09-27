
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
    stroke(67);
    strokeWeight(8);
    
   rect(120,80,300,80,20,20);
    textSize(34);
    text(someVar, width/2, height/2-80); 

}

function updateMyVar() {
    someVar = textInput.value();
}