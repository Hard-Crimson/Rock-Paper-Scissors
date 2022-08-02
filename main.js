function getComputerChoice(){
    array = ["rock", "paper", "scissors"];
    choice = array[Math.floor(Math.random() * array.length)];
    console.log(`Computer: ${choice}`);
    return choice;
}

function getPlayerChoice(){
    let input = prompt("Choice:");
    input = input.toLowerCase();
    console.log(input);
    return input;
}

function playRound(computer, player){
    computer = getComputerChoice();
    player = getPlayerChoice();

    if (player == computer)
    {
        console.log("Draw!")
        return;
    }
    else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper"))
    {
        console.log("You win!")
        return;
    }
    else if ((computer == "rock" && player == "scissors") || (computer == "paper" && player == "rock") || (computer == "scissors" && player == "paper"))
    {
        console.log("You lose!");
        return;
    }
    else if (player != "rock" || "paper" || "scissors")
    {
        console.log("Invalid")
        return;
    }
    
    console.log(computer, player);
}