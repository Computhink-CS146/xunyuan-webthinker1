function setup() {
    createCanvas (600,400);
    background ('pink');
}
function draw() {
    let xpos = 350;
    let ypos = 50;
    let ggColor = 0;

     for (let i = 1; i < 6;i++){
        fill(0,ggColor,0);
        circle(xpos,ypos,50);
        xpos = xpos+50;
        ypos = ypos+50;
        }
}   


