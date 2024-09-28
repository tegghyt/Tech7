const elementBall = document.getElementById("ball");

elementBall.style.left = "0px";

const screenWidth = window.innerWidth;

const ballPosition = elementBall.offsetLeft;

elementBall.style.left = elementBall.offsetLeft + 10 + 'px';

const ballWidth = elementBall.offsetWidth;

let velocity = 10;

setInterval(()=>{   
    elementBall.style.left = elementBall.offsetLeft + velocity + 'px';
    if(elementBall.offsetLeft > screenWidth - ballWidth || elementBall.offsetLeft <= 0){
        velocity = -velocity;
    }
}, 20);