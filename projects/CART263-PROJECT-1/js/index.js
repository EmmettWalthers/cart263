"use strict";

let score = 0;

function moveTarget() {

    const target = document.getElementById("target");

    const x = Math.floor(Math.random() * (window.innerWidth - 50));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));

    target.style.left = x + "px";
    target.style.top = y + "px";

    target.style.transform = 'none';

    };

target.addEventListener("click", function() {
        
    score = score + 1;

    document.getElementById("score").textContent = score;

    moveTarget();

});

moveTarget();

