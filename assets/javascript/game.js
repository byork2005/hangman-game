

// var wordbank = ['castle', 'king', 'queen', 'joust'];
// var chosenword, guessedletters, currentletters, guessremaining, didwin, score;
// var min = 0;


	// function getRndInteger(min, max) {
 //    return Math.floor(Math.random() * (max - min) ) + min;
 //    }

 //    var randNumber = getRndInteger(0, wordbank.length - 1);

 //    var chosenword = wordbank[randNumber];

 //    var splitword = chosenword.split("");
    
 //    for (var i = 0; i < splitword.length; i++) {
 //    splitword[i];
 //    }

 //    console.log(randNumber, splitword)

 //    document.onkeyup = function(event) {
 //    var letter = event.key;
 //    console.log(event, letter); }



var wordbank = ["house", "cat", "dog", "ball", "plane", "boat", "tower", "mountain", "tree", "car"];   

function RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

var result = RandomNum(0, wordbank.length);

var rightguesses;
var wrongguesses;
var tries;
var word;
var score = 0;

var triesElement = document.getElementById("guessremain");
var thewordElement = document.getElementById("wordspaces");
var wrongElement = document.getElementById("guessed");

function startgame() {

    rightguesses = [];
    wrongguesses = [];
    tries = 10;
    word = wordbank[result];

    for (var i = 0; i < word.length; i++) {
    rightguesses.push('_ ');
    }
    console.log(rightguesses, word);
    thewordElement.innerHTML = rightguesses.join(" ");
}

function solvepuzzle(keypress) 
{
    tries--;
    triesElement.innerHTML = tries;
    console.log(rightguesses, wrongguesses)

    if (word.indexOf(keypress) === -1) 
    {
        wrongguesses.push(keypress);
        wrongElement.innerHTML = wrongguesses.join(', ');
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

document.onkeyup = function(event) {
    var keypress = event.key;
    console.log(keypress);
    solvepuzzle(keypress);
}





startgame ();
    
















