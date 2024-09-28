const ball = document.getElementById("ball");

elementBall.style.top = "0px";
elementBall.style.left = "0px";

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let ballWidth = elementBall.offsetWidth;

let speed = 10;

function handleKeyDown(event){
    let xPos = elementBall.offsetLeft;
    let yPos = elementBall.offsetTop;
    let xPosNew = 0;
    let yPosNew = 0;
    switch(event.key){
        case 'ArrowUp':
            yPosNew - speed;
            if(yPosNew >= 0){
                elementBall.style.top = yPosNew = "px";
                
            }
    }
}