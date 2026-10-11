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

    hidden = random(WORDS);
    console.log(hidden);
    hints = hidden[0] + "_ _ _ _";


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
    

}