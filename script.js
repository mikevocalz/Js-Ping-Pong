//initialize game variables and add event listeners

//ball
const ball = document.getElementById('ball');

ball.addEventListener('click', (e) => {
  console.log('im clicked');
});

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
//ball coords
let posX = Math.random() * 3 + 9;
let posY = Math.random() * 2 +
//set velocity
let posXd = Math.random() * 3;
let posYd = Math.random() * 5;
 7;
//set initial game state
let gameState = 'start';

let board = document.querySelector('.board');

let initial_ball = document.querySelector('.ball');
let ball = document.querySelector('.ball');

let message = document.querySelector('.message');
let p1Coords = p1.getBoundingClientRect();
let p2Coords = p2.getBoundingClientRect();
let initialBallCoords = ball.getBoundingClientRect();
let ballCoords = initialBallCoords;
let boardCoords = board.getBoundingClientRect();
let paddlePos = document.querySelector('.paddle').getBoundingClientRect();

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


