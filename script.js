const validChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {    
    const rand = Math.floor(Math.random() * validChoices.length);        
    return validChoices[rand];
}

function evaluatePlay(playerSelection, computerSelection) {
    // Normalize input
    playerSelectionFormatted = playerSelection.toLowerCase();
    computerSelectionFormatted = computerSelection.toLowerCase();

    let isWin = undefined;
    switch(playerSelectionFormatted) {        
        case "rock":            
            if(computerSelectionFormatted === "paper") isWin = false;            
            else if(computerSelectionFormatted === "scissors" ) isWin = true;            
            break;        
        case "paper":
            if(computerSelectionFormatted === "scissors") isWin = false;            
            else if(computerSelectionFormatted === "rock" ) isWin = true;
            break;        
        case "scissors":
            if(computerSelectionFormatted === "rock") isWin = false;            
            else if(computerSelectionFormatted === "paper" ) isWin = true;
            break;
        default:
            console.log("player selection is invalid");
    }

    return isWin;
}

function playRound(playerSelection, computerSelection) {
    let isWin = evaluatePlay(playerSelection, computerSelection);    
    
    if(isWin === undefined) {
        return "It's a Tie!";
    }
    
    return isWin 
        ? `You Win! ${playerSelection} beats ${computerSelection}`
        : `You Lose! ${computerSelection} beats ${playerSelection}`;
}