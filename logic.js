let comp;
let playerScore = 0, computerScore = 0;
let choices = ['Rock', 'Paper', 'Scissors'];
function computer() {
    comp = Math.floor(Math.random() * 3);
}

function guess(guess) {
    computer();
    window.document.getElementById("player").innerText = "Player chose " + choices[guess];
    document.getElementById("computer").innerText = "computer chose " + choices[comp];
    if (choices[comp] == choices[guess]) {
        document.getElementById("head").innerText = "it is a tie";
    }

    else if ((choices[comp] == 'Rock' && choices[guess] == 'Paper') || (choices[comp] == 'Paper' && choices[guess] == 'Scissors') || (choices[comp] == 'Scissors' && choices[guess] == 'Rock')) {
        document.getElementById("head").innerText = "you win";
        playerScore++;
        document.getElementById("p1").innerText = ("Player score: " + playerScore);


    }
    else if ((choices[guess] == 'Rock' && choices[comp] == 'Paper') || (choices[guess] == 'Paper' && choices[comp] == 'Scissors') || (choices[guess] == 'Scissors' && choices[comp] == 'Rock')) {
        document.getElementById("head").innerText = "Computer Wins";
        computerScore++;
        document.getElementById("p2").innerText = ("Computer score: " + computerScore);
    }
}