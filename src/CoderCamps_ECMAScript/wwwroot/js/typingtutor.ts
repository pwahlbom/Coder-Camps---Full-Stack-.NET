//build an array containing the lower and uppercase characters
let aryCharacters = [];
let aryResponses = ["Good", "Wrong"]
let elmMatchCharacter = document.getElementById("idMatchCharacter");
let elmTypedCharacter = document.getElementById("idTypedCharacter");
let elmResult = document.getElementById("idResult");
let elmPlayArea = document.getElementById("idPlayArea");
let elmScore = document.getElementById("idScore");
let elmFeedback = document.getElementById("idFeedback");
let elmAccuracy = document.getElementById("idAccuracy");
let strMatchCharacter = "a";
let strTypedCharacter = "b";
let nbrCorrect = 0;
let nbrTries = 0;
let nbrAccuracy = 0;

//lowercase characters
for (var i = 0; i < 26; i++) {
    aryCharacters[i] = String.fromCharCode(97 + i).toLowerCase();
}

//lowercase characters
for (var i = 26; i < 52; i++) {
    aryCharacters[i] = String.fromCharCode(71 + i).toUpperCase();
}

elmPlayArea.style.visibility = "hidden";

//start
function fctStart(blnDisplay: boolean = true) {
    if (blnDisplay) {
        fctDisplayCharacter();
        elmPlayArea.style.visibility = "visible";
    } else {
        elmPlayArea.style.visibility = "hidden";
    }
}

//display a new character
function fctDisplayCharacter() {
    var nbrRandomCharacter = Math.floor((Math.random() * 52) + 1);
    strMatchCharacter = aryCharacters[nbrRandomCharacter];
    elmMatchCharacter.innerHTML = strMatchCharacter;
}

elmTypedCharacter.addEventListener("keypress", (e) => {
    strTypedCharacter = String.fromCharCode(e.keyCode || e.which);

    if (strTypedCharacter == strMatchCharacter) {
        //CORECT ANSWER
        nbrCorrect++;
        nbrTries++;
        elmResult.innerHTML = "Correct";
        strTypedCharacter = "";
        fctDisplayCharacter();
    } else {
        //INCORECT ANSWER
        nbrTries++;
        elmResult.innerHTML = "Wrong";
    }

    nbrAccuracy = (nbrCorrect / nbrTries) * 100;
    nbrAccuracy.toPrecision(2);
    
    elmFeedback.innerHTML = strTypedCharacter;
    elmScore.innerHTML = nbrCorrect + " / " + nbrTries;
    elmAccuracy.innerHTML = nbrAccuracy.toString() + " %";
    e.preventDefault();

});