let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

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
    playerChoice = e.target.id;
    handlePlayground(playerChoice);
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
            showAnnouncement("You won this round!");
            break;
        case "computer wins":
            computerScore++;
            showScoreUI(playerScore, computerScore);
            showAnnouncement("Computer won this round!");
            break;
        case "draw":
            showScoreUI(playerScore, computerScore);
            showAnnouncement("Drawn!");
            break;
    }
}

function handlePlayground(playerChoice)
{
    computerChoice = getComputerChoice();
    let roundResult = getRoundWinner(playerChoice, computerChoice);
    calculateScore(roundResult);
}

function getMatchWinner(playerScore, computerScore)
{
    if (playerScore === 3) 
    {
        
    }
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

function showAnnouncement(announce)
{
    announcement.innerText = announce;
}
//#endregion

