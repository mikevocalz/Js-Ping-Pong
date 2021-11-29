//initialize game variables and add event listeners

//ball
const ball = document.getElementById('ball');

ball.addEventListener('click', (e) => {
  console.log('im clicked');
});

document.addEventListener('keyup' || 'keydown', getKeyPress, true);

///game booard
let gameBoard = document.getElementById('board');

//log the coords to get the x,y positions of the board, it returns an obj with values
console.log('hey board', gameBoard.getBoundingClientRect());

//paddles
let p1 = document.getElementById('left');

console.log('im p1', p1);

let t = p1.style;
console.log('im t', t);
// p1.style.left = gameBoard.right;

let p2 = document.querySelector('.right');
console.log('im p2', p2, gameBoard.top);

p2.style.top = gameBoard.top + 50 + 'px';
p2.style.right = gameBoard.left - '50px';

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
