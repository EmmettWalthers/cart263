"use strict";

let score = 0;

let colorOptions = [
    { fill: "#ff5555", border: "#aa0000" },
    { fill: "#55ff55", border: "#00aa00" }, 
    { fill: "#5555ff", border: "#0000aa" }, 
    { fill: "#ffff55", border: "#ffaa00" }, 
    { fill: "#ff55ff", border: "#aa00aa"}
];

function moveTarget() {

    let target = document.getElementById("target");

    let x = Math.floor(Math.random() * (window.innerWidth - 50));
    let y = Math.floor(Math.random() * (window.innerHeight - 50));

    let randomOption = Math.floor(Math.random() * colorOptions.length);
    let selectedColor = colorOptions[randomOption];

    target.style.left = x + "px";
    target.style.top = y + "px";
    target.style.transform = 'none';

    target.style.backgroundColor = selectedColor.fill;
    target.style.borderColor = selectedColor.border;
    
    };

target.addEventListener("click", function() {
        
    score = score + 1;

    document.getElementById("score").textContent = score;
    

    moveTarget();

});

moveTarget();

