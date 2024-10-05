let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //PLAYER-X and PLAYER-O

const winPatterns =
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () =>
    {
        turnO = true; 
        enableBoxes();
        msgContainer.classList.add("hide");
    };

boxes.forEach((box) => {
    box.addEventListener("click", () =>
    {
        if(turnO) //TURN OF PLAYER-O
        {
            box.innerText = "O";
            turnO = false;
        }
        else //TURN OF PLAYER-X
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

    // CREATED-DISABLED-BOXES-FUNCTION
const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

// CREATED-ENABLED-BOXES-FUNCTION
const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>
{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () =>
{
    for(let pattern of winPatterns)
    {
        // console.log
        // (
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );

        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if( pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
                    //FINDING WINNING PATTERN
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
            }
        }
    }
};


//TRIGGER THE [RESET-GAME] FUNCTION

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);