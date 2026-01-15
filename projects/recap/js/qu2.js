"use strict";

function setup() {
    console.log("go")
    createCanvas(500, 500)
    drawEllipse(100,100,50,50,100,50,100)
    drawEllipse(150,150,50,50,100,50,50)
    drawEllipse(200,200,50,50,50,50,0)
}

function drawEllipse(x,y,w,h,r,g,b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}