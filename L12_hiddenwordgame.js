let words = ["WATER","MYTHS","APPLE","CLOUD","TIMER","WRITE","JOKER","WORLD","BLACK","MESSY","TABLES","GREAT"]
let guessInput;
let submitButton;
let msg = "";
let hidden;
let hints;
let attempt
function setup() {
    createCanvas(800,650);
    guessInput = createInput();
    guessInput.position(width/2-200, height/2);
    guessInput.style("font-size", "20px");

    submitButton = createButton("Submit");
    submitButton.position(width/2+75, height/2);
    submitButton.style("font-size", "20px");
    submitButton.mousePressed(checkAnswer);

    hidden = random(WORDS);
    console.log(hidden);
    hints = hidden[0] + "_ _ _ _";


}
function checkAnswer(){
    let answer = guessInput.value();
    answer = answer.toUppercase();
}
function checkAnswer() {
    let answer = guessInput.value();
    answer = answer.toUppercase();

    if (answer === hidden) {
        message = " GGs";
    }
    else{
        message = "wrong";
    }
}

function draw() {
    background("lightgray");
    fill("black");
    textSize(44);
    textAlign(CENTER,CENTER);
    text("Guess the hidden word", width/2, 75);
    text("Attempts:" + attempt, width/2, 135);
    text("hint:" + hints,       width/2, 185);
    fill("red");
    text(message, width/2, hieight/2 ,150);


}