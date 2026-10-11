// let boxXpos = 0;
// let speed = 2;

// function setup() {
//     createCanvas(400,600);
//     boxXpos = 55;


// }

// function draw() {
//     background("orange");
//     boxXpos += speed;
//     if (boxXpos > width- 50) {
//         speed = speed* -1;
//     }
//     if (boxXpos < 0+50) {
//         speed = speed* -1;
//     }

//     rectMode(CENTER);
//     rect(boxXpos,height/2,100,25);


// }

let planets = [ "jupiter","mars","earth"];
let pos;

function setup() {
    createCanvas( 400,200);
    pos = 50;
    textSize(24);
}