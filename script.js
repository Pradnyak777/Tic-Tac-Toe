let boxs = document.querySelectorAll("button");
let reset = document.querySelector("#reset-game");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player O , Player x

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

const arr = Array.from(boxs);

arr.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(" box was clicked");
        if (turnO) {
            //player o
            button.innerText = "0";
            turnO = false;
        } else {
            //player xs
            button.innerText = "x";
            turnO = true;
        }
        button.disabled = true;

        checkWinner();

    });
});
const disableBoxes = () => {
    for (let box of boxs){
        box.disabled = true;
    }
};
 //what problem
const showWinner = (winner , pos1) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for (let pattern of winPatterns) {
      

        pos1 = boxs[pattern[0]].innerText;
        pos2 = boxs[pattern[1]].innerText;
        pos3 = boxs[pattern[2]].innerText;
        //indexes=>possition


        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("winner", pos1);

                showWinner(pos1);
            }
        }
    }
};