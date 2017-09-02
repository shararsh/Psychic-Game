
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuesses = [];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var letterToGuess = null;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var listLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var guessesSoFar = function() {
  document.querySelector("#yourGuess").innerHTML = "Your Guesses so far: " + userGuesses.join(', ');
};

var checkGuessesLeft = function() {
  document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};

listLetterToGuess();

document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  guessesLeft--;
  userGuesses.push(userGuess);
  guessesSoFar();
  checkGuessesLeft();
 
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                alert("Correct! It was letter "+letterToGuess+"!");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("It was letter "+letterToGuess+ "! Try Again!");
            reset();
        }
};

var reset = function() {
  guesses = 9;
  guessesLeft = 9;
  userGuesses = [];

  listLetterToGuess();
  checkGuessesLeft();
  guessesSoFar();
}