let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

//#region Query Select & Listeners Attach
const title = document.querySelector("#head-title");
const choiceContainer = document.querySelector("#choice-container");

const result = document.querySelector("#result");
const choicesUI = result.firstElementChild;
const playerScoreUI = choicesUI.nextElementSibling;
const computerScoreUI = playerScoreUI.nextElementSibling;
const announcement = computerScoreUI.nextElementSibling;

const finalAnounce = document.querySelector("#final-announcement");
const finalWinner = document.querySelector("#final-winner");
const rematchPromotion = finalWinner.nextElementSibling;
const buttons = rematchPromotion.nextElementSibling;
const accept = buttons.firstElementChild;
const unaccept = accept.nextElementSibling;

resetStatus();

// Add Listeners
addEventListener("mouseover", e => {
    if (e.target &&  e.target.nodeName === "IMG") 
    {
        e.stopPropagation();
        e.target.setAttribute("style", "border: solid rgb(173, 230, 220) 10px");
    }

    if (e.target && e.target.nodeName === "BUTTON")
    {
        e.stopPropagation();
        e.target.setAttribute("style", "background-color: rgb(255, 255, 255); color: darkcyan");
    }
});

addEventListener("mouseout", e => {
    if (e.target &&  e.target.nodeName === "IMG") 
    {
        e.target.setAttribute("style", "border: none");
    }

    if (e.target && e.target.nodeName === "BUTTON")
    {
        e.target.setAttribute("style", "background-color: darkcyan; color: rgb(255, 255, 255)");
    }
});

buttons.addEventListener("click", e => {
    if (e.target && e.target.nodeName === "BUTTON" && e.target.id === "accept-button")
    {
        e.stopPropagation();
        resetStatus();
    }
    else if (e.target && e.target.nodeName === "BUTTON" && e.target.id === "unaccept-button")
    {
        e.stopPropagation();
        showGreetings();

    }
});

// Trigger Game Start
choiceContainer.addEventListener("click", e => {
    playerChoice = e.target.id;
    handlePlayground(playerChoice);
}); 
//#endregion

//#region Funcitons
function resetStatus()
{
    playerScore = 0;
    computerScore = 0;

    toggleFinalAnnounceOff();
    choicesUI.innerText = "";
    playerScoreUI.innerText = "";
    computerScoreUI.innerText = "";
    choicesUI.innerText = "";
    announcement.innerText = "";
}

function toggleFinalAnnounceOff()
{
    finalAnounce.classList.toggle("overlay");
    buttons.style.display = "none";
}

function toggleFinalAnnounceOn()
{
    finalAnounce.classList.toggle("overlay");
    buttons.style.display = "flex";
}

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
    getMatchWinner(playerScore, computerScore);
}

function getMatchWinner(playerScore, computerScore)
{
    if (playerScore === 3) 
    {
        finalWinner.innerText = "WINNER! WINNER! CHICKEN DINNER!";
        rematchPromotion.innerText = "Wanna dominate again ?";
        accept.innerText = "Why not?";
        unaccept.innerText = "Nah";
        toggleFinalAnnounceOn();    
    }
    else if (computerScore === 3)   
    {
        finalWinner.innerText = "WHAT A PITY! COMUTER DOMINATED YOU!";
        rematchPromotion.innerText = "How 'bout a revenge ?";
        accept.innerText = "C'mere";
        unaccept.innerText = "Get lost";
        toggleFinalAnnounceOn();    
    }
    else return;
}

function showGreetings()
{
    rematchPromotion.remove();
    buttons.remove();
    finalWinner.innerText = "Thanks for playing!";
    finalWinner.setAttribute("style", "font-size: 56px; margin: 0; flex: 1; display: flex; align-items: center; color: darkslategray");
    addEventListener("click", () => {
        toggleFinalAnnounceOff();
        finalWinner.innerText = "";
        document.body.replaceWith(document.body.cloneNode(true));
    });
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

