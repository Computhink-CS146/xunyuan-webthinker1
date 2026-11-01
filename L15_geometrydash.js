
let score = 0;
let gameStarted = false;

let playerX = 100;
let playerY ;
let playerSize = 50;
let velocity = 0;
let isGrounded = false;
function setup(){
    createCanvas(600,400);
    background(0);
    playerY = height - playerSize;



}

function draw() {
    background(0);
    velocity += 0.8;

    if(!gameStarted) {
        drawStartsScreen();
        return;
    }
    velocity += 0.8;
    playerY += velocity;
    if (playerY >= height )

    fill('cyan');
    textSize(18);
    textAlign(CENTER,CENTER);
    
    text("press SPACE to jump!", width/2,50);
    text("score :"+ score, width/2, 80);
    fill("lime");

    rect(playerX,playerY,playerSize,playerSize);
}
function drawStartsScreen() {
    fill("white");
    textSize(44);
    textAlign(CENTER,CENTER);
    text("press SPACE to jump",width/2, height/2);
}

function keyPressed(){
    if (keyCode === 32 && isGrounded) {
        velocity = - 18;
    }

    else if (keyCode === 32){
        gameStarted = true;

    }
}