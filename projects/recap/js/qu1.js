"use strict";

function setup() {
    console.log("go")
    createCanvas(500, 500)
}

function draw() {
    push()
    noStroke()
    fill("blue")
    ellipse(50, 50, 80, 80);
    pop()

    push()
    noStroke()
    fill("pink")
    ellipse(100, 100, 80, 80);
    pop()

    push()
    noStroke()
    fill("purple")
    ellipse(150, 150, 80, 80);
    pop()
}