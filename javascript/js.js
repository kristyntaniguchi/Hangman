const picture = document.getElementById("picture");
const restartBtn = document.getElementById("restart-btn");
const score = document.getElementById("score");

const letter = document.getElementsByClassName('letters');
const guess = document.getElementsByClassName('guess-span');
const correctWordSpan = document.getElementsByClassName('correct-word-span');
// const btnClear = document.getElementById('clear-key');
// const btnBackspace = document.getElementById('delete-key');
const usedLettersContainer = document.getElementById('used-letters-container');
const usedLetters = document.getElementsByClassName('used-letters');
const person1 = document.getElementById('person-1');
const car = document.getElementById('car');
const title = document.getElementById('title');

let currentGuess = '';
let currentLetter = '';
let guessCounter = 0;
let numberOfWrongGuesses = 10;
let splitWord = '';
let clickedLetters = '';
let usedLettersArray = '';
let thisIsTheWord = "";
let typedLetters = "";
let check1 = '';
let check2 = '';

const letterA = document.getElementById("letter-a");
const letterB = document.getElementById("letter-b");
const letterC = document.getElementById("letter-c");
const letterD = document.getElementById("letter-d");
const letterE = document.getElementById("letter-e");
const letterF = document.getElementById("letter-f");
const letterG = document.getElementById("letter-g");
const letterH = document.getElementById("letter-h");
const letterI = document.getElementById("letter-i");
const letterJ = document.getElementById("letter-j");
const letterK = document.getElementById("letter-k");
const letterL = document.getElementById("letter-l");
const letterM = document.getElementById("letter-m");
const letterN = document.getElementById("letter-n");
const letterO = document.getElementById("letter-o");
const letterP = document.getElementById("letter-p");
const letterQ = document.getElementById("letter-q");
const letterR = document.getElementById("letter-r");
const letterS = document.getElementById("letter-s");
const letterT = document.getElementById("letter-t");
const letterU = document.getElementById("letter-u");
const letterV = document.getElementById("letter-v");
const letterW = document.getElementById("letter-w");
const letterX = document.getElementById("letter-x");
const letterY = document.getElementById("letter-y");
const letterZ = document.getElementById("letter-z");


const wordOptions = [
    'HELLO', 'GREEN', 'DAISY', 'PIZZA', 'APPLE', 'PHONE', 'BEANS', 
    'FAIRY', 'GHOST', 'BLACK', 'MOUSE', 'CAPES', 'TIGER', 'SPOON',
    'HAPPY', 'TEARS', 'PLATE', 'COMBS', 'PLUMS', 'MANGO', 'QUIET',
    'MIMIC', 'ERROR', 'SWIRL', 'KEBAB', 'HATCH', 'PLUMB', 'CRANE',
    'HYPER', 'ALTAR', 'COAST', 'WORLD', 'WORDS', 'PEACH', 'SIEGE',
    'DRINK', 'SUGAR', 'WHACK', 'COOKS', 'ROBIN', 'BRIDE', 'GROOM', 
    'ALIVE', 'MOUTH', 'FIRES', 'WATER', 'TODAY', 'MOVIE', 'CRATE',
    'EPOXY', 'NYMPH', 'YIELD', 'MIDST', 'DONOR', 'APRON', 'FLUFF',
    'ANGRY', 'YOUTH', 'ALIEN', 'ELOPE', 'CHIEF', 'BOOZE', 'SLOTH',
    'PANDA', 'HELPS', 'UNITE', 'PHOTO', 'BEACH', 'SANDY', 'CLAMS',
    'HAIRY', 'BURNS', 'MAPLE', 'DUCKS', 'HAWKS', 'BIRDS', 'CROWS',
    'BERRY', 'THYME', 'CURRY', 'PUPPY', 'HOUSE', 'FERRY', 'KITTY',
    'PLANT', 'LEAFS', 'PASTE', 'GRAVE', 'RAINS', 'RAINY', 'CANOE', 
    'KAYAK', 'RIVER', 'OCEAN', 'WAVES', 'TREES', 'OLIVE', 'CLOUD',
    'DINER', 'LUNCH', 'PLATE', 'BOWLS', 'SALAD', 'BROWN', 'STEAL',
    'PENNY', 'BREAK', 'HEART', 'SMALL', 'LARGE', 'HEAVY', 'LIGHT',
    'TIRES', 'BUYER', 'CLOVE', 'PINES', 'SEATS', 'CLIFF', 'TRUCK',
    'HARDY', 'PROOF', 'CANDY', 'PASTA', 'FACES', 'STARS', 'RIGHT',
    'WRONG', 'GRACE', 'RUMOR', 'GIRLS', 'MASKS', 'SHOTS', 'BULBS'
]


function updateGuess() {
    for(let i = 0; i < correctWordSpan.length; i++){
        guess[i].innerText = letter.innerText;
    }
};

window.onload = function(){
    wordToGuess();
    // getKeyClicks();
    getButtonClicks();
};

function wordToGuess(){
    let i = Math.floor(Math.random()* wordOptions.length);
    thisIsTheWord = wordOptions[i];
    splitWord = thisIsTheWord.split("");
    // for(let i = 0; i < splitWord.length; i++){
    //     score.innerText += splitWord[i];
    // }
};

function vroom(){
    let moveCar = parseInt(car.style.right) + 8;
    car.style.right = moveCar + '%';
}

function personHit(){
    person1.classList.add('animated-person');
}

function getButtonClicks(){
    for(let i = 0; i < letter.length; i++){
        letter[i].addEventListener('click', function(e) {
            currentLetter = letter[i].innerText;
            clickedLetters += currentLetter;
            isTheLetterThere();

            if(!thisIsTheWord.includes(this.innerText)) {
                this.style.color = "white";
                this.style.backgroundColor = "grey";
                guessCounter++;
                let guessesLeft = numberOfWrongGuesses - guessCounter;
                score.innerText = 'Guesses Left: ' + guessesLeft;
                vroom();
            }
            else {
                this.style.color = "black";
                this.style.backgroundColor = "gold";
                currentGuess += currentLetter;
            }
            this.style.pointerEvents ="none";
            trackingGuesses();
            winner();
        });
    }
};

// function getKeyClicks(){
//     window.addEventListener('keydown', e =>{
//         currentLetter = e.key;
//         currentLetter = currentLetter.toUpperCase();
//         clickedLetters += currentLetter;
//         isTheLetterThere();
//         if(currentLetter == 'A'){
//             letterA.style.color = 'white';
//             letterA.style.backgroundColor = 'black';
//         }
//     });
// };



function isTheLetterThere(){
    let track = 0;
    for(let i = 0; i < splitWord.length; i++){
        if(currentLetter == splitWord[i]){
            correctWordSpan[i].innerText += currentLetter;
        } 
    }

};

function didWeAlreadyClickThat(){
    usedLettersArray = clickedLetters.split("");
    for(let i = 0; i < usedLettersArray.length; i++){
        if(currentLetter == usedLettersArray[i]){
            alert('letter already used')
        }
    }
}

function trackingGuesses(){
    if(guessCounter == numberOfWrongGuesses){
        personHit();
        lose();
        
        window.setTimeout(reloadPage, 5000);
    }
};

function reloadPage() {
    location.reload();
};

restartBtn.addEventListener('click', e => {
    location.reload();

});
function lose(){
    title.innerText = 'YOU GOT RAN OVER'
};
function winner(){
    for(let i = 0; i < splitWord[i]; i++){
        check1 += splitWord[i].innerText;
        check2 += correctWordSpan[i].innerText;
    }

};