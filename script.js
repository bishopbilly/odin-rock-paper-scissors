function playGame() {

    // Track scores
    let humanScore = 0;
    let computerScore = 0;

    // Play a round
    function playRound(humanChoice, computerChoice) {
        // tie
        if (humanChoice == computerChoice) {
            console.log("It's a tie...");
        }

        // human wins
        else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log("You win!");
            humanScore += 1;
        }

        // computer wins
        else {
            console.log("Hail the autobots.");
            computerScore += 1;
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        function getComputerChoice() {
            let num = Math.random();
            if (num < 1/3) {
                return 'rock'
            }
            else if (num < 2/3) {
                 return 'paper'
            }
            else return 'scissors'
        }
        
        function getHumanChoice() {
            const validChoices = ['rock', 'paper', 'scissors'];
            let choice;

            while (true) {
                choice = prompt('State your weapon of choice, human.').toLowerCase();
                if (validChoices.includes(choice)) {
                    return choice;
                    break;
                }
                alert("Invalid input");
            }
        }
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    // Declare winner
    if (humanScore > computerScore) {
        console.log("The darkness has been driven away. A new era of peace is upon us.");
    }
    else if (humanScore == computerScore) {
        console.log("No party has won. But there will be a truce for now.");
    }
    else {
        console.log("The technological singularity has consumed the universe in 5.3 seconds");
    }
}

playGame();