
  
// Random Number Generator
function RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// variables and wordbank
var wordbank = ["sword","shield","king","queen","prince","princess","knight","joust","armor","dragon","castle","gauntlet","squire","crusade","renaissance",
    "bard","duke","earl","lancelot","excalibur","ale","mead","mace","handmaiden","peasant","camelot","noble","vassal","privy","apothecary",
    "blacksmith","plague","chivalry","catapult","trebuchet","crossbow","lance","drawbridge","tower","portcullis","buttress","fletcher","longbow",
    "moat","lineage","crown","royalty","throne","merlin"]
    
var images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"]
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var rightguesses;
var wrongguesses;
var tries;
var word;
var wins = 0;
var losses = 0;

var triesElement = document.getElementById("guessremain");
var thewordElement = document.getElementById("wordspaces");
var wrongElement = document.getElementById("guessed");
var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");
var imageElement = document.getElementById("stickman");

// var result = RandomNum(0, wordbank.length);

// Game start and reset
function startgame() {

    var result = RandomNum(0, wordbank.length);

    rightguesses = [];
    wrongguesses = [];
    tries = 10;
    word = wordbank[result];
    triesElement.innerHTML = ("Guesses Remaining: 10");
    wrongElement.innerHTML = ('');

    for (var i = 0; i < word.length; i++) {
    rightguesses.push('_ ');
    }
    console.log(rightguesses, word);
    thewordElement.innerHTML = rightguesses.join(" "); 

    imageElement.src = "assets/images/10.jpg"; 
}

// Logic for selecting letters
function solvepuzzle(keypress) 
{
    if (word.indexOf(keypress) === -1) 
    {
        tries--;
        triesElement.innerHTML = "Guesses Remaining: " + tries;
        wrongguesses.push(keypress);
        wrongElement.innerHTML = wrongguesses.join(', ');
        stickman();
    } else 
    {
        for (var j = 0; j < word.length; j++)
        {
            if (word[j] === keypress)
            {
                rightguesses[j] = keypress;
            }
        }
        thewordElement.innerHTML = rightguesses.join(" "); 
    }
}

// Keypress Functions and determining valid keys, then running solve logic.
document.onkeyup = function(event) {
    var keypress = event.key;
    console.log (event.key);
        if (alphabet.indexOf(keypress) == -1)
        {
            alert("Select a valid letter!");
            return;
        }
        else if (wrongguesses.indexOf(keypress) != -1 || rightguesses.indexOf(keypress) != -1) {
            alert("You already guessed that letter!")
            return;
        }
        else {
            solvepuzzle(keypress);
            winConditions();
            return;
        } 
}

// Need to add: 1. Change live counter to not decrease on correct choices. - Done
//              2. Add Win and Loss counters, and boxes to show them.
//              3. Add check win function and messages. - Done
//              4. Add button to reset Game and Score.

function winConditions() {
    if (rightguesses.indexOf('_ ') === -1) {
        alert("You Won!");
        wins++;
        winsElement.innerHTML = "Wins: " + wins;
    } else if (tries === 0) {
        alert("You Lost!");
        losses++;
        lossesElement.innerHTML = "Losses: " + losses;
    }
}

function reset() {
    wins = 0;
    winsElement.innerHTML = "Wins: " + wins;
    losses = 0;
    lossesElement.innerHTML = "Losses: " + losses;
    startgame();
}

function stickman() {
   imageElement.src = "assets/images/" + images[tries];
    
}



startgame ();
    






["sword","shield","king","queen","prince","princess","knight","joust","armor","dragon","castle","gauntlet","squire","crusade","renaissance",
    "bard","duke","earl","lancelot","excalibur","ale","mead","mace","handmaiden","peasant","camelot","noble","vassal","privy","apothecary",
    "blacksmith","plague","chivalry","catapult","trebuchet","crossbow","lance","drawbridge","tower","portcullis","buttress","fletcher","longbow",
    "moat","lineage","crown","royalty","throne","merlin"]









