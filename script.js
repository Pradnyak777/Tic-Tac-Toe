let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true; //player O , Player x

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    // [6,4,2],
    // [6,3,0],
    // [6,4,2],
    // [7,4,1],
    // [8,4,0],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxs();
    msgcontainer.classList.add("hide");
};

const arr = Array.from(boxs);

arr.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log(" box was clicked");
        if (turnO) {
            //player o
            button.innerText = "O";
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
const disableBoxs = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
};

const enableBoxs = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
};

//what problem
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxs();
};



const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1v = boxs[pattern[0]].innerText;
        let pos2v = boxs[pattern[1]].innerText;
        let pos3v = boxs[pattern[2]].innerText;
        //indexes=>possition


        if (pos1v != "" && pos2v != "" && pos3v != "") {

            if (pos1v === pos2v && pos2v === pos3v) {


                // console.log("winner is:", pos1v);


                showWinner(pos1v);
            
            }else  if(pos1v != pos2v && pos2v != pos3v ){
               
                console.log("Game was a Draw");
                notWinner();
        
            }
    }
}
};



const notWinner = () => {
    msg.innerText = `Sorry Your are Fail Try Again`;
    msgcontainer.classList.remove("hide");
   disableBoxs();

};
newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);