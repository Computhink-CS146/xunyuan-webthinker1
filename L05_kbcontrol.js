function setup() {
    createCanvas(400,600);
    background ('grey');
    fill(shapecolor);
    noStroke();

}
let shapecolor = ("white")
function mousePressed() {
    shapecolor = color(random(1,255))



}
function mouseDragged(){

}