let 
let 
let gameStarted = false;

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

    rect(50,height-50.,)
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