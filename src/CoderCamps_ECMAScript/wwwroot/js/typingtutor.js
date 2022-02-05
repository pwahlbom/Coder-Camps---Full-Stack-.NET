//build an array containing the lower and uppercase characters
var aryCharacters = [];
var aryResponses = ["Good", "Wrong"];
var elmMatchCharacter = document.getElementById("idMatchCharacter");
var elmTypedCharacter = document.getElementById("idTypedCharacter");
var elmResult = document.getElementById("idResult");
var elmPlayArea = document.getElementById("idPlayArea");
var elmScore = document.getElementById("idScore");
var elmFeedback = document.getElementById("idFeedback");
var elmAccuracy = document.getElementById("idAccuracy");
var strMatchCharacter = "a";
var strTypedCharacter = "b";
var nbrCorrect = 0;
var nbrTries = 0;
var nbrAccuracy = 0;
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
function fctStart(blnDisplay) {
    if (blnDisplay === void 0) { blnDisplay = true; }
    if (blnDisplay) {
        fctDisplayCharacter();
        elmPlayArea.style.visibility = "visible";
    }
    else {
        elmPlayArea.style.visibility = "hidden";
    }
}
//display a new character
function fctDisplayCharacter() {
    var nbrRandomCharacter = Math.floor((Math.random() * 52) + 1);
    strMatchCharacter = aryCharacters[nbrRandomCharacter];
    elmMatchCharacter.innerHTML = strMatchCharacter;
}
elmTypedCharacter.addEventListener("keypress", function (e) {
    strTypedCharacter = String.fromCharCode(e.keyCode || e.which);
    if (strTypedCharacter == strMatchCharacter) {
        //CORECT ANSWER
        nbrCorrect++;
        nbrTries++;
        elmResult.innerHTML = "Correct";
        strTypedCharacter = "";
        fctDisplayCharacter();
    }
    else {
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
//# sourceMappingURL=typingtutor.js.map