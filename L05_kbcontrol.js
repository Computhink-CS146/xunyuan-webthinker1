let size = 5
let shapecolor = ("white")
function setup() {
    createCanvas(400,600);
    background ('grey');
    fill(shapecolor);
    noStroke();

}

function mousePressed() {
    shapecolor = color(random(0,255),random(0,255),random(0,255));



}
function mouseDragged(){
    fill(shapecolor);
    Circle(mouseX,mouseY,size);
    size = size - 0.5

}