
let score = 0;
let streak = 0;
let max = 0;
let message = "";

let scrambled = "";
let guessInput= "";
let submitButton;
const WORDS = ["apple","school","banana","winter","tiger"];

function setup() {
    createCanvas(800,600);
    scrambledButton = createButton("re-scrambled");
    scrambledButton.position(150,300);
    scrambledButton.style("font-size", "18px");
    scrambledButton.mousePressed(doScrambledAgain);

    guessInput =  createInput();
    guessInput.position(305,300);
    guessInput.style("font-size","18px");
    guessInput.size(150,30);

    submitButton = createButton("submit");
    submitButton.position(485,300);
    submitButton.style("font-size","18px");
    submitButton.size(110,30);

}
function doScrambledAgain(){
    scrambled = scrambledWord(hiddenword);

}

function checkGuess(){
    let guess = guessInput.value();
    guess = guess. toUpperCase();
    

}

function chooseHidddenWord(){
    hiddenword = random(WORDS) ;
    hiddenword = hiddenword.toUpperCase();
    scrambled = scrambledWord(hiddenword);

}
function scrambledWord(aWord) {
    let arrLetters = aworld.split("");
    for (let index= arrLetters.length-1;
        index > 0;
        index--) {
            first = arrLetters[index];
            who = floor(random(0,index+1));
            second = arrLetters[who];
            temporary = first;
            arrLetters[index] = second;
            arrLetters[who] = temporary;
        }
    print("correct?" + arrletters);
    return arrLetters.join ('');
}
function draw() {
    background(220);
    textSize(32);
    textAlign(CENTER,CENTER);
    text("word scramble game!",width/2, 100);

    textSize(24);
    text("score: " + score,  width/2, height/2+80 );
    text("Streak: " + "(Max: "+ max +")", width/2, height/2 + 100);
    text("screambled Word: " + scrambled,width/2, 170);

    
    
    
    text(message,                               width/2,height/2+140);


}