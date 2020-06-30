// Variables from HTML page:
const time = document.querySelector('#time');
const startStop = document.querySelector('#startStop');

let gameOn = false;
let timerId = false;

const stopGame = () => {
    window.open('results.html', '_self');
}

const startGame = () => {
    if (!timerId) {
        // Countdown:
        let timeLeft = 30;
        function countdown() {
            if (timeLeft === 0 || !gameOn) {
                clearTimeout(timerId);
                time.textContent = 0;
                stopGame();
            } else {
                time.textContent = timeLeft;
                timeLeft--;
                // doSomething which will show another terrorist head
            }
        }
        timerId = setInterval(countdown, 1000);
    }

    if (gameOn) {
        clearTimeout(timerId);
        time.textContent = 0;
        stopGame();
    } else {
        gameOn = true;
        startStop.style.backgroundColor = 'crimson';
        startStop.style.border = '2px solid rgb(128, 12, 35)';
        startStop.textContent = 'Stop';
    }
}

startStop.addEventListener('click', startGame);

// To Do:
// - Add explosion animation and sound
// - Add blood headshot effect
// - Add headshot sound 
// - Add gun sound