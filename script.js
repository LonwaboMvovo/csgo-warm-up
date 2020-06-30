// Variables from HTML pages:
const page_header = document.querySelector('#page_header');
const info = document.querySelector('#info');
const time = document.querySelector('#time');
const startStop = document.querySelector('#startStop');
const head = document.querySelectorAll('.head');

// Kills:
// const kills = document.querySelector('#kills');

// head.forEach((item) => {
//     item.addEventListener('click', () => {
//         kills.textContent = parseInt(kills.textContent) + 1;
//     })
// })

if (window.location.pathname === '/csgo-warm-up/train.html') {
    let gameOn = false;
    let timerId = false;

    const min_height = page_header.offsetHeight;
    const max_height = window.innerHeight - min_height;

    const min_width = info.offsetWidth;
    const max_width = window.innerWidth - min_width;

    const randPosition = (min, max) => {
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    const playGame = () => {
        // Make a head appear randomnly within the shooting range (71.66px from the right and 85.6px from the top)
        let y_coord = randPosition(min_height, max_height);
        let x_coord = randPosition(min_width, max_width);
        console.log('right: ', x_coord, 'px and top: ', y_coord);
    }
    
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
                    playGame()
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
}


// To Do:
// - Add explosion animation and sound
// - Add blood headshot effect
// - Add headshot sound 
// - Add gun sound