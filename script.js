//get key events
const getKeyPress = (e) => {
  if (e.keyCode === '38') {
    // up arrow key press
    console.log('im the up key');
  } else if (e.keyCode === '40') {
    // down arrow key press
    console.log('im the down key');
  }
};

document.addEventListener('keyPress', getKeyPress());
