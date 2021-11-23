//initialize game variables and add event listeners

//ball
const ball = document.getElementById('ball');

ball.addEventListener('click', (e) => {
  console.log('im clicked');
});

document.addEventListener('keyup' || 'keydown', getKeyPress, true);

///game booard
let gameBoard = document.querySelector('.board');

//paddles
let p1 = document.querySelector('.left');
let p2 = document.querySelector('.right');
//scores
let p1Score = (document.getElementById('p1s').innerText = 00);
let p2Score = (document.getElementById('p2s').innerText = 00);

//set velocity
let ballVelX = 10;
let ballVelY = 5;

//ball coords
let ballX = 900 / 2; //divide board in half to get X coords
let ballY = 460 / 2; //divide board in half to get Y coords
//set initial game state
let gameState = false;

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
