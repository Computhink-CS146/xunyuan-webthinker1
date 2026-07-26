function setup() {
    createCanvas (600,400);
    background ('pink');
}
function draw() {
    let xpos = 350;
    let ypos = 50;

     for (let i = 1; i < 6;i++){
        fill('red');
        circle(xpos,ypos,50);
        xpos = xpos+50;
        ypos = ypos+50;
        }
}   


