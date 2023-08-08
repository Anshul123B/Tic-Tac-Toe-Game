let btnRef = document.querySelectorAll(".button");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

//for winning pattern using array
let winningPattern = [
    [0,3,6],
    [0,1,2],
    [2,5,8], 
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6], 
];
//for player 'X' playing first
let xTurn = true;
let count = 0;

//Disable all buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
};

//enacle all buttons
const enableButtons = () => {
    btnRef.forEach(element => {
        element.innerText = "";
        element.disabled = false;
    });
    popupRef.classList.add("hide");
};

//when a player win
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X"){
        msgRef.innerHTML = "&#x1F389; <br> 'X' wins";
    }
    else{
        msgRef.innerHTML = "&#x1F389; <br> 'O' wins";
    }
};

//for draw
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw"
};

//new game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

//winning logic
const winChecker = () => {
    for(let i of winningPattern){
        let[element1, element2, element3] = [ 
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        if(element1 != "" && (element2 != "") & (element3 !=
        "")) {
            if (element1 == element2 && element2 == element3){

            winFunction(element1);
            }
        }
    }
};

//displaying X/O on click 
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn){
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        }else {
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        //increment
        count += 1;
        if(count == 9){
            drawFunction();

        }
        winChecker();
    });
});

window.onload = enableButtons;
