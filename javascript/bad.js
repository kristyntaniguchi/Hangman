//main sections
const picture = document.getElementById("picture");
const correctWord = document.getElementById("correct-word");
const guessesContainer = document.getElementById("guesses-container");
const lettersContainer = document.getElementById("letters-container");
const submitBtn = document.getElementById("submit-btn");
const score = document.getElementById("score");

// //guesses
// const guess1 = document.getElementById("guess1");
// const guess11 = document.getElementById("guess1-1");
// const guess12 = document.getElementById("guess1-2");
// const guess13 = document.getElementById("guess1-3");
// const guess14 = document.getElementById("guess1-4");
// const guess15 = document.getElementById("guess1-5");

// // const guess2 = document.getElementById("guess2");
// // const guess21 = document.getElementById("guess2-1");
// // const guess22 = document.getElementById("guess2-2");
// // const guess23 = document.getElementById("guess2-3");
// // const guess24 = document.getElementById("guess2-4");
// // const guess25 = document.getElementById("guess2-5");

// // const guess3 = document.getElementById("guess3");
// // const guess31 = document.getElementById("guess3-1");
// // const guess32 = document.getElementById("guess3-2");
// // const guess33 = document.getElementById("guess3-3");
// // const guess34 = document.getElementById("guess3-4");
// // const guess35 = document.getElementById("guess3-5");

// // const guess4 = document.getElementById("guess4");
// // const guess41 = document.getElementById("guess4-1");
// // const guess42 = document.getElementById("guess4-2");
// // const guess43 = document.getElementById("guess4-3");
// // const guess44 = document.getElementById("guess4-4");
// // const guess45 = document.getElementById("guess4-5");

// // const guess5 = document.getElementById("guess5");
// // const guess51 = document.getElementById("guess5-1");
// // const guess52 = document.getElementById("guess5-2");
// // const guess53 = document.getElementById("guess5-3");
// // const guess54 = document.getElementById("guess5-4");
// // const guess55 = document.getElementById("guess5-5");

// // const guess6 = document.getElementById("guess6");
// // const guess61 = document.getElementById("guess6-1");
// // const guess62 = document.getElementById("guess6-2");
// // const guess63 = document.getElementById("guess6-3");
// // const guess64 = document.getElementById("guess6-4");
// // const guess65 = document.getElementById("guess6-5");

// //letters
// const letterA = document.getElementById("letter-a");
// const letterB = document.getElementById("letter-b");
// const letterC = document.getElementById("letter-c");
// const letterD = document.getElementById("letter-d");
// const letterE = document.getElementById("letter-e");
// const letterF = document.getElementById("letter-f");
// const letterG = document.getElementById("letter-g");
// const letterH = document.getElementById("letter-h");
// const letterI = document.getElementById("letter-i");
// const letterJ = document.getElementById("letter-j");
// const letterK = document.getElementById("letter-k");
// const letterL = document.getElementById("letter-l");
// const letterM = document.getElementById("letter-m");
// const letterN = document.getElementById("letter-n");
// const letterO = document.getElementById("letter-o");
// const letterP = document.getElementById("letter-p");
// const letterQ = document.getElementById("letter-q");
// const letterR = document.getElementById("letter-r");
// const letterS = document.getElementById("letter-s");
// const letterT = document.getElementById("letter-t");
// const letterU = document.getElementById("letter-u");
// const letterV = document.getElementById("letter-v");
// const letterW = document.getElementById("letter-w");
// const letterX = document.getElementById("letter-x");
// const letterY = document.getElementById("letter-y");
// const letterZ = document.getElementById("letter-z");
// const clearKey = document.getElementById("clear-key");
// const deleteKey = document.getElementById("delete-key");

let letter = "";
let userWord;
let chosenWord;

let submitCount = 0;


//get keyboard clicks
window.addEventListener('keydown', e => {
    switch(e.key){
    case 'a':
    case 'A':
        letter = 'A';
        break;
    case 'b':
    case 'B':
        letter = 'B';
        break;
    case 'c':
    case 'C':
        letter = 'C';
        break;
    case 'd':
    case 'D':
        letter = 'D';
        break;
    case 'e':
    case 'E':
        letter = 'E';
        break;
    case 'f':
    case 'F':
        letter = 'F';
        break;
    case 'h':
    case 'H':
        letter = 'H';
        break;
    case 'i':
    case 'I':
        letter = 'I';
        break;
    case 'j':
    case 'J':
        letter = 'J';
        break;
    case 'k':
    case 'K':
        letter = 'K';
        break;
    case 'l':
    case 'L':
        letter = 'L';
        break;
    case 'm':
    case 'M':
        letter = 'M';
        break;
    case 'n':
    case 'N':
        letter = 'N';
        break;
    case 'o':
    case 'O':
        letter = 'O';
        break;
    case 'p':
    case 'P':
        letter = 'P';
        break;
    case 'q':
    case 'Q':
        letter = 'Q';
        break;
    case 'r':
    case 'R':
        letter = 'R';
        break;
    case 's':
    case 'S':
        letter = 'S';
        break;
    case 't':
    case 'T':
        letter = 'T';
        break;
    case 'u':
    case 'U':
        letter = 'U';
        break;
    case 'v':
    case 'V':
        letter = 'V';
        break;
    case 'w':
    case 'W':
        letter = 'W';
        break;
    case 'x':
    case 'X':
        letter = 'X';
        break;
    case 'y':
    case 'Y':
        letter = 'Y';
        break;
    case 'z':
    case 'Z':
        letter = "Z";
        break;
    default:
        return;
    }  
    newLetter(letter);
});

//get click letters
letterA.addEventListener("click", e =>{
    letter = 'A';
    newLetter(letter);

});
letterB.addEventListener("click", e => {
    letter = 'B';
    newLetter(letter);

});
letterC.addEventListener("click", e => {
    letter = 'C';
    newLetter(letter);
});
letterD.addEventListener("click", e => {
    letter = 'D';
    newLetter(letter);
});
letterE.addEventListener("click", e => {
    letter = 'E';
    newLetter(letter);
});
letterF.addEventListener("click", e => {
    letter = 'F';
    newLetter(letter);

});
letterG.addEventListener("click", e => {
    letter = 'G';
    newLetter(letter);
});
letterH.addEventListener("click", e => {
    letter = 'H';
    newLetter(letter);

});
letterI.addEventListener("click", e => {
    letter = 'I';
    newLetter(letter);

});
letterJ.addEventListener("click", e => {
    letter = 'J';
    newLetter(letter);

});
letterK.addEventListener("click", e => {
    letter = 'K';
    newLetter(letter);

});
letterL.addEventListener("click", e => {
    letter = 'L';
    newLetter(letter);

});
letterM.addEventListener("click", e => {
    letter = 'M';
    newLetter(letter);

});
letterN.addEventListener("click", e => {
    letter = 'N';
    newLetter(letter);

});
letterO.addEventListener("click", e => {
    letter = 'O';
    newLetter(letter);

});
letterP.addEventListener("click", e => {
    letter = 'P';
    newLetter(letter);

});
letterQ.addEventListener("click", e => {
    letter = 'Q';
    newLetter(letter);

});
letterR.addEventListener("click", e => {
    letter = 'R';
    newLetter(letter);

});
letterS.addEventListener("click", e => {
    letter = 'S';
    newLetter(letter);

});
letterT.addEventListener("click", e => {
    letter = 'T';
    newLetter(letter);

});
letterU.addEventListener("click", e => {
    letter = 'U';
    newLetter(letter);

});
letterV.addEventListener("click", e => {
    letter = 'V';
    newLetter(letter);

});
letterW.addEventListener("click", e => {
    letter = 'W';
    newLetter(letter);

});
letterX.addEventListener("click", e => {
    letter = 'X';
    newLetter(letter);

});
letterY.addEventListener("click", e => {
    letter = 'Y';
    newLetter(letter);

});
letterZ.addEventListener("click", e => {
    letter = 'Z';
    newLetter(letter);

});


deleteKey.addEventListener("click", e =>{

});
clearKey.addEventListener("click", e =>{
    
});

submitBtn.addEventListener("click", e => {

});    

let currentGuess = 1;

function newLetter(letter){   
    
    for(let currentLetter = 1; currentLetter < 6; currentLetter++){
        const currentInput = document.getElementById('guess'+currentGuess+'-'+currentLetter);
        currentInput.innerText = letter;
        console.log(letter);
    }
    
}
