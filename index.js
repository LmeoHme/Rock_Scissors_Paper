let playerChoice 
let computerChoice = getComputerChoice();
console.log(computerChoice);
let playerScore = 0;
let computerScore = 0;

//#region Query Select & Listeners Attach
const title = document.querySelector("#title");
const promote = document.querySelector("#promote");
const choiceContainer = document.querySelector("#choice-container");
const result = document.querySelector("#result");
const choicesUI = result.firstElementChild;
const playerScoreUI = choicesUI.nextElementSibling;
const computerScoreUI = playerScoreUI.nextElementSibling;
const announcement = computerScoreUI.nextElementSibling;

choiceContainer.addEventListener("mouseover", e => {
    if (e.target &&  e.target.nodeName === "IMG") 
    {
        e.stopPropagation();
        e.target.setAttribute("style", "border: solid rgb(173, 230, 220) 10px");
    }
});

choiceContainer.addEventListener("mouseout", e => e.target.setAttribute("style", "border: none"));

choiceContainer.addEventListener("click", e => {
    playerChoice = e.target.id

}); 
//#endregion

//#region Funcitons
function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) return "rock";
    else if (randomNumber === 2) return "scissors";
    else return "paper";
}

function getRoundWinner(playerChoice, computerChoice)
{
    if 
        ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock"))
    {
        showChoiceUI(playerChoice, computerChoice);
        return "player wins";
    }

    else if 
        ((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "scissors" && computerChoice === "rock") ||
        (playerChoice === "paper" && computerChoice === "scissors"))
    {
        showChoiceUI(playerChoice, computerChoice);
        return "computer wins";
    }
    
    else 
    {
        showChoiceUI(playerChoice, computerChoice);
        return "draw";
    }
}

function calculateScore(roundResult)
{
    switch (roundResult)
    {
        case "player wins":
            playerScore++;
            showScoreUI(playerScore, computerScore);
            announcement.innerText = "You won this round!";
        case "computer wins":
            computerScore++;
            showScoreUI(playerScore, computerScore);
            announcement.innerText = "Computer won this round!";
        case "draw":
            showScoreUI(playerScore, computerScore);
            announcement.innerText = "Drawn!";
    }
}

function handlePlayGround()
{

}
// -- Show UI --
function showChoiceUI(playerChoice, computerChoice)
{
    choicesUI.innerText = `You choose ${playerChoice}, conputer choose ${computerChoice}.`;
}

function showScoreUI(playerScore, computerScore)
{
    playerScoreUI.innerText = "Player Score: " + playerScore;
    computerScoreUI.innerText = "Computer Score: " + computerScore;
}
//#endregion

