let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".message-container");
let msgPara = document.querySelector("#msg");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let gameStart = document.querySelector("#gameStart");
let head = document.getElementsByTagName("h2");
let containerG = document.querySelector("#container");

console.log(containerG);
// Start Game
const hideUnhide = () => {
  gameStart.classList.add("hide");
};
gameStart.addEventListener("click", hideUnhide);

// Winning Patterns
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// track the turn of player
let turnO = true;
// Hide player 2
player2.classList.add("hide");

// Extract the arrays of boxes and Check whether O or X and call the checkWinner Function
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("It is working");

    if (turnO) {
      box.innerText = "O";
      turnO = false;

      player1.classList.add("hide");
      player2.classList.remove("hide");
    } else {
      box.innerText = "X";
      turnO = true;

      player2.classList.add("hide");
      player1.classList.remove("hide");
    }
    box.disabled = true;

    // check winner function
    checkWinner();
  });
});

// colors for win patterns
const winColor = (patt1,patt2,patt3) => {
  boxes[patt1].classList.add("colors");
  boxes[patt2].classList.add("colors");
  boxes[patt3].classList.add("colors");
};

// count the patterns checked how many times
let count = 0;
// Check the Winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern);

    let post1val = boxes[pattern[0]].innerText;
    let post2val = boxes[pattern[1]].innerText;
    let post3val = boxes[pattern[2]].innerText;

    if (post1val != "" && post2val != "" && post3val != "") {
      if (post1val === post2val && post2val === post3val) {
        console.log("winner", post1val);
        showWinner(post1val);
        winColor(pattern[0],pattern[1],pattern[2]);
      }
      count++;
      console.log(count);
      if (count == 25) {
        tie();
      }
    }
  }
};

//  Tie
const tie = () => {
  msgPara.innerText = `Tie`;
};

// Print the winner in the webpage
const showWinner = (winner) => {
  if (winner === "X") {
    msgPara.innerText = `Congratulation Player 2 wins the match`;
  } else {
    msgPara.innerText = `Congratulation Player 1 wins the match`;
  }
  // calling function to disable all boxes
  disableBoxes();
};
// Disabling the Boxes for New game
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
  resetBtn.innerText = "New Game";
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// reset game or new game
const resetGame = () => {
  count = 0;
  turnO = true;
  enableBoxes();
  player2.classList.add("hide");
  player1.classList.remove("hide");
};

// triggering newgame or reset game Button
resetBtn.addEventListener("click", resetGame);
