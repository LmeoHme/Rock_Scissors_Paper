function getPlayerInput(title, proceedChoice, exitChoice)
{
    let playerInput = prompt(title).trim();
    let validInput = validatePlayerInput(playerInput, proceedChoice, exitChoice);
    if (validInput === exitChoice) return;
    else return validInput;
}

function validatePlayerInput(playerInput, proceedChoice, exitChoice)
{
    if (playerInput === "" || playerInput === null || playerInput === undefined) return "2";
    while (playerInput !== proceedChoice || playerInput !== exitChoice)
    {
        if (playerInput !== proceedChoice || playerInput !== exitChoice)
        {
            playerInput = prompt("Invalid chocie, please try again").trim();
        }
    }
    return playerInput;
}

getPlayerInput("Do you wanna play Rock - Scissors - Paper?\n1.Yes\n2.No", "1", "2");
