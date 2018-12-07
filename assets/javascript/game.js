// Array of mystery letters
var computerChoice = ["a", "b", "c", " d", " e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Track score and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerGuess = [];


// Getting computer choice

window.onload = function () {
    var computer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    computerGuess.push(computer);
    console.log(computerGuess)
}

// Player go

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesSoFar.push(" " + userGuess);
    console.log(userGuess)
    console.log(computerGuess)


    if ((userGuess == computerGuess) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        guessesSoFar.length = 0;
        var computer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        computerGuess.push(computer);
    }

    else if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
        guessesLeft--;
    }

    else {
        losses++;
        guessesLeft = 9;
        guessesSoFar.length = 0;
        computerGuess.length = 0;
        var computer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        computerGuess.push(computer);
    }

    // HTML

    var html = "<h1>Psychic Game</h1>" +
        "<h2>Guess What Letter I'm Thinking Of!</h2>" +
        "<h2>Total Wins: " + wins + "</h2>" +
        "<h2>Total Losses: " + losses + "</h2>" +
        "<h2>Guesses Left: " + guessesLeft + "</h2>" +
        "<h2>Your Guesses so far: " + guessesSoFar + "</h2>";

    // Placing the html into the game ID

    document.querySelector('#game').innerHTML = html;
   
}







