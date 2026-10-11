let boxXpos = 0;
let speed = 2;

function setup() {
    createCanvas(400,600);


}

function draw() {
    background("orange");
    boxXpos += speed;
    if (boxXpos > width- 50) {
        speed = speed* -1;
    }

}