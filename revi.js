let boxXpos = 0;
let speed = 2;

function setup() {
    createCanvas(400,600);
    boxXpos = 55;


}

function draw() {
    background("orange");
    boxXpos += speed;
    if (boxXpos > width- 50) {
        speed = speed* -1;
    }
    if (boxXpos > 0+50) {
        speed = speed* -1;
    }


}