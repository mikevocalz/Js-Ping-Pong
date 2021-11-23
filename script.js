//initialize game variables and add event listeners
const ball = document.getElementById('ball');
ball.addEventListener('click', (e) => {
  console.log('im clicked');
});

document.addEventListener('keyup' || 'keydown', getKeyPress, true);

let player1Score = 0;
let player2Score = 0;
let ballVelX = 10;
let ballVelY = 5;
let ballX = 900 / 2; //divide board in half to get X coords
let ballY = 460 / 2; //divide board in half to get Y coords

//get key events
function getKeyPress(e) {
  let key = e.keyCode;
  switch (key) {
    case 38:
      ///
      ball;
      console.log('im up');
      break;

    case 40:
      ///
      console.log('im down');
      break;
  }
  console.log(key);
}
