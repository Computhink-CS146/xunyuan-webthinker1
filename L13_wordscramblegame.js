
let score = 0;
let streak = 0;
let max = 0;
let message = "";

let scrambled = "";
let guessInput= "";
let submitButton;
const WORDS = ["Apple","school","banana","winter","tiger"];

function setup() {
    createCanvas(800,600);
    scrambledButton = createButton("re-scrambled");
    scrambledButton.position(305,300);
    scrambledButton.style("font-size", "18px");
    scrambledButton.mousePressed(doScrambledAgain);

    guessInput =  createInput();
    guessInput.position(305,300);
    guessInput.style("font-size","18px");
    guessInput.size(150,30);

    submitButton = createButton("submit");
    submitButton.position(485,280);
    submitButton.style("font-size","18px");
    submitButton.size(110,30);

}
function doScrambledAgain(){

}

function checkGuess(){

}

function chooseHidddenWord(){
    
}
function draw() {
    background(220);
    textSize(32);
    textAlign(CENTER,CENTER);
    text("word scramble game!",width/2, 100);
    text("scrambled word: COITAARN",width/2,160);

    textSize(24);
    text("score: " + score,  width/2, height/2+80 );
    text("Streak: " + "(Max: "+ max +")", width/2, height/2 + 80);
    text("screambled Word: " + scrambled,width/2, 160);

    textSize(24);
    text("Score:" + score);


}