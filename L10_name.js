
let textInput;
let someVar = "";
let ageInput;
let someAge = "";


function setup(){
    createCanvas(600,400);
    background('lightblue');
    textAlign(CENTER,CENTER);
    textInput = createInput();
    textInput.position(width/2-100, height/2);
    textInput.input(updateMyVar);

    ageInput = createInput();
    ageInput.position(width/2-100, height/2 + 40);
    ageInput.input(updateMyAge);


}


function draw(){
    background('lightblue');
    stroke('orange');
    strokeWeight(8);
    fill("white");
   rect(120,80,300,100,20,20);
   fill('white');
    textSize(34);
    text(someVar, width/2-50, 120); 
    text(someAge, width/2-50, 160);

    textSize(14);
    fill("black");
    textAlign(LEFT,CENTER);
    stroke('purple');
    strokeWeight(0);
    text("what is your name?", 70, height/2+5);
    text("May I inquire your age?",45,height/2+35);

    

}

function updateMyVar() {
    someVar = textInput.value();
}

function updateMyAge() {
    someAge = ageInput.value();

}