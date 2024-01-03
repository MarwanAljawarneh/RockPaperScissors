// all possibilites that can be used in the game stored in an array
const choice = ["rock", "paper", "scissors"];

// a function to get the pc's choice from the array above
function getComputerChoice(array){
    const generate_choice = Math.floor(Math.random() * array.length);
    return array[generate_choice];
}

// a function that passes the players choice and the pc's choice and returns the result of each round
function playground(playerSelection, computerSelection){
    if (computerSelection === playerSelection){
        return "Drew! No one won!";
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        return "Computer won! "+ computerSelection+" beats "+ playerSelection +"!";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "Computer won! "+ computerSelection+" beats "+ playerSelection +"!";
    }
    else if (computerSelection === "scissors" && playerSelection === "paper"){
        return "Computer Won! "+ computerSelection+" beats "+ playerSelection +"!";
    }
    else {
        return "Congrats! You won! "+ playerSelection+" beats "+ computerSelection +"!";
    }
}

// a function that makes the game best-of-5 and re play the game if it ends in a draw 
// function also keeps record of the score after each round
function game(){
    let computerWins = 0;
    let playerWins = 0;
    let winner = "";

    for (let i = 0; i < 5; i++) {
        let curr_game_result;
        // point of this do-while is to re do the game if it ends up with a draw
        do{
        let my_Selection = prompt("Please make a choice Rock, Paper, or Scissors: ").toLowerCase();
        while (!(my_Selection === "rock" || my_Selection === "paper" || my_Selection === "scissors")) {
            alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
            my_Selection = prompt("Please make a choice Rock, Paper, or Scissors: ").toLowerCase();  // Continue the loop to prompt the user again
        }
        const comp_Selection = getComputerChoice(choice);

        console.log("Game " + (i + 1));
        console.log("Computer selected: " + comp_Selection);
        console.log("User selected: " + my_Selection);
        curr_game_result = playground(my_Selection, comp_Selection);
        console.log("Result: "+ curr_game_result);
        console.log("\n");
        } while(curr_game_result === "Drew! No one won!");
        

        if (curr_game_result.includes("You won")) {
            playerWins++;
        }
        else if (curr_game_result.includes("Computer won")) {
            computerWins++;
        }
        // if User or pc reaches three wins, game ends 
        if (playerWins === 3  || computerWins=== 3){
            break;
        }
    }
    
    // check for the winner
    if (playerWins > computerWins) {
        winner = "User!";
    }
    else if (playerWins < computerWins){
        winner ="Computer!";
    }
    

    console.log("The Winner is "+ winner);
}

function main(){
    game();
}

main();