const xclass = 'x',
  circleclass = 'circle';
let turn = true;
const Winning_Combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const boxes = document.querySelectorAll('[box_data]');
const container = document.getElementById('container');
const winningmsg = document.getElementById('winningmsg');
const button = document.getElementById('msg_btn');
boxes.forEach((box) => {
  box.addEventListener('click', clickBox, { once: true });
});

function clickBox(e) {
  console.log('clicked');
  const clicked = e.target;
  const classChanger = turn ? circleclass : xclass;
  printMark(clicked, classChanger);
  if (checkVictory(classChanger)) {
    console.log('winner');
    showResults(false);
  }
  swapturn();
  printMarkHover();
}

function showResults(draw) {
  if (draw) {
    alert('Draw');
  } else {
    alert((winningmsg.innerText = `${turn ? 'O' : 'X'}Wins!`));
  }
  location.reload();
}
/* function endGame(draw) {
      if (draw) {
        winningmsg.innerText = 'Draw!';
      } else {
        winningmsg.innerText = `${classChanger ? "O's" : "X's"} Wins!`;
      }
      winningmsg.classList.add('show');
    } */

function printMark(clicked, classChanger) {
  clicked.classList.add(classChanger);
}
function swapturn() {
  turn = !turn;
}
function printMarkHover() {
  container.classList.remove(xclass);
  container.classList.remove(circleclass);
  if (turn) {
    container.classList.add(circleclass);
  } else {
    container.classList.add(xclass);
  }
}

function checkVictory(classChanger) {
  return Winning_Combinations.some((combinations) => {
    return combinations.every((index) => {
      return boxes[index].classList.contains(classChanger);
    });
  });
}
