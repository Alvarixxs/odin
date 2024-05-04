console.log("Hello World!");

let humanscore = 0
let computerscore = 0

function getComputerChoice() {
    let rand = Math.random() * 3

    if (rand < 1)
        return "rock"
    else if (rand < 2)
        return "scissors"
    else
        return "paper"
}

function getHumanChoice() {
    let choice = prompt("Introduce que quiere jugar")
    return choice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice)
        console.log("draw")
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
