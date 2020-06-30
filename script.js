const time = document.querySelector('#time');

let timeLeft = 30;

function countdown() {
    if (timeLeft === 0) {
        time.textContent = timeLeft;
        clearTimeout(timerId);
        // doSomething which will show another terrorist head
    } else {
        time.textContent = timeLeft;
        timeLeft--;
    }
}


var timerId = setInterval(countdown, 1000);

// To Do:
// - Add explosion animation and sound
// - Add blood headshot effect
// - Add headshot sound 
// - Add gun sound