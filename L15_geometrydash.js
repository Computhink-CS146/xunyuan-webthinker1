
let score = 0;
let gameStarted = false;

let playerX = 100;
let playerY ;
let playerSize = 50;
let velocity = 0;
let isGrounded = 
function setup(){
    createCanvas(600,400);
    background(0);


}

function draw() {
    background(0);

    if(!gameStarted) {
        drawStartsScreen();
        return;
    }

    fill(cyan);
    textSize(18);
    textAlign(CENTER,CENTER);
    text("press SPACE")
    fill("lime");

    rect(50,height-50,50);
}
function drawStartsScreen() {
    fill("white");
    textSize(44);
    textAlign(CENTER,CENTER);
    text("press SPACE to jump",width/2, height/2);
}

function keyPressed(){
    if (keyCode === 32) {
        gameStarted = true;

    }
}