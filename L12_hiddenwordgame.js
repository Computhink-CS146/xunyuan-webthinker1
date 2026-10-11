let words = ["WATER","MYTHS","APPLE","CLOUD","TIMER","WRITE","JOKER","WORLD","BLACK","MESSY","TABLES","GREAT"]
let guessInput;
let submitButton;
let msg = "";
let hidden;
let hints;
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


}

function draw() {

}