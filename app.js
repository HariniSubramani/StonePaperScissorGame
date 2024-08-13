function getComputerChoice() {
    const choices = ['STONE', 'PAPER', 'SCISSOR'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'STONE' && computerChoice === 'SCISSOR') ||
        (userChoice === 'PAPER' && computerChoice === 'STONE') ||
        (userChoice === 'SCISSOR' && computerChoice === 'PAPER')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}\n${result}`);
}