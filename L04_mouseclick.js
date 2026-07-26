function setup() {
    createCanvas (600,400);
    background ('pink');
    noLoop();
}
let shapecolor = "purple";
function draw(){
    fill(shapecolor);
    circle(width/2, height/2, 200);
}
function mousepressed(){
    shapecolor = color(random(0,255),random(0,255),random(0,255));
}
function mouseReleased(){
    shapecolor = "white";
}
// function draw() {
//     let xpos = 350;
//     let ypos = 50;
//     let ggColor = 0;

//      for (let i = 1; i < 6;i++){
//         fill(0,ggColor,0);
//         circle(xpos,ypos,50);
//         xpos = xpos+50;
//         ypos = ypos+50;
//         ggColor = ggColor + 50;
//         }
// }   


