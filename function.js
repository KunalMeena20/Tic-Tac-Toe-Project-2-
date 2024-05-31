let buttons =  document.querySelectorAll(".btns");
let resetButton =  document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let turnX = true;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(turnX) {
            button.innerText = "X";
            turnX = false;
        }
        else {
            button.innerText = "O";
            turnX = true;
        }   
        button.disabled = true;
        checkWinner();
    })
});

const disablebtns = () => {
    for(let btn of buttons){
        btn.disabled = true;
    }
};

const enablebtns = () => {
    for(let btn of buttons){
        btn.disabled = false;
        btn.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtns();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;    
    
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
          if (pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner", pos1Val); 
            showWinner(pos1Val);
    }
}
    }
};

const resetGame = () => {
    turnX = true;
    enablebtns();
    msgContainer.classList.add("hide");
};

resetButton.addEventListener("click", resetGame);