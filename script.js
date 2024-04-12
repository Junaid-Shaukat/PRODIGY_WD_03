//Access of the elements of HTML File
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".newgame");
let winMsg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".wincontainer");

let turnX = true; //playerO
// Winning Patterens

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//Logic of inputting X and O
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX === true) {
      box.innerText = "X";
      box.classList.add("colX");
      turnX = false;
    } else {
      box.innerText = "O";
      box.classList.remove("colX");
      turnX = true;
    }
    box.disabled = true;
    winCheck();
  });
});
//new game function
const newgame = () => {
  turnX = true;
  enablebox();
};
//enablebox function
const enablebox = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msgcontainer.classList.add("hide");
  }
};
//Disable Function after winning
const disabled = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
//Show Winner Function
const showWin = (winner) => {
  winMsg.innerText = `Congrats! The Winner Of The Game is Player ${winner}`;
  msgcontainer.classList.remove("hide");
  disabled();
};
//show Tie function
// const showTie = ()zzz

// Checking Winner

const winCheck = () => {
  for (let pattern of winningPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWin(pos1);
        showTie(pos1);
      }
    }
  }
};


newbtn.addEventListener("click", newgame);
resetbtn.addEventListener("click", newgame);
