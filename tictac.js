let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msg = document.querySelector("h2");

let popup = document.querySelector(".popup");
let newGameBtn = popup.querySelector("button");

let turn = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerText === "") {
      if (turn) {
        e.style.color = "#457b9d";
        e.innerText = "X";
        turn = false;
      } else {
        e.style.color = "#e63946";
        e.innerText = "O";
        turn = true;
      }
      e.disabled = true;
      verify();
    }
  });
});
const boxdisabled = () => {
  boxes.forEach((element) => {
    element.disabled = true;
  });
};
const openpop = (position1) => {
  msg.innerText = `Winner : ${position1}`;
  popup.classList.add("opene");
  boxdisabled();
};
const draw = () => {
  msg.innerText = `No Result`;
  popup.classList.add("opene");
};

const closepop = () => {
  popup.classList.remove("opene");
};

const verify = () => {
  for (let p of winpattern) {
    let position1 = boxes[p[0]].innerText;
    let position2 = boxes[p[1]].innerText;
    let position3 = boxes[p[2]].innerText;

    if (
      position1 !== "" &&
      position1 === position2 &&
      position2 === position3
    ) {
      openpop(position1);
      return;
    }
  }
  let allFilled = Array.from(boxes).every((box) => box.innerText !== "");
  if (allFilled) {
    draw();
  }
};

resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turn = true;
  popup.classList.remove("opene");
});

newGameBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turn = true;
  closepop();
});
