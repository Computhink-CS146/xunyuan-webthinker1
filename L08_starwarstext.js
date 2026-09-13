// let name = "XY";
let list = ["pizza","burger","sushi",];

function setup() {
    createCanvas(400,400);
    

}
let ypos = 400;
let lineGap = 60;

function draw() {
    background(0);
    // text(name);
    // textSize(20);
    // text("XY",50,50);
    // textSize(67);
    // arrname[0];\
    // task 2
    // textSize(20);
    // textAlign(LEFT);
    // text("my fav foods:")
    fill(255,255,0);
    textSize(24);
    textAlign(CENTER);
    for(let i=0; i<list.length;i++) {
         text( (i+1) +","+list[i],width/2,ypos + i * lineGap);

    }
    ypos -= 0.6;
    if (ypos < -list.length * lineGap) { 
        ypos = height;
    }

    }

