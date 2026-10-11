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

let planets = [ "jupiter","mars","earth","barbatoes"];
let pos;

function setup() {
    createCanvas( 400,200);
    pos = 50;
    textSize(24);
    textAlign(CENTER,CENTER);
    background(220);
    // pos = 50;
    for (let i = 0; i < planets. length; i++){
        text(planets[i], width/2,pos);
        pos = pos + 40;
    }
}

function draw() {
    // background(220);
    // pos = 50;
    // for (let i = 0; i < planets. length; i++){
    //     text(planets[i], width/2,pos);
    //     pos = pos + 40;
    // }
}