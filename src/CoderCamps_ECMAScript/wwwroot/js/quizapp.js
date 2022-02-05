//////////////////////////////////////////////////////////////////////////////
// Set up the classes
var Quiz = (function () {
    function Quiz(Id, QuizName, Questions, TotalPoints) {
        this.Id = Id;
        this.QuizName = QuizName;
        this.Questions = Questions;
        this.TotalPoints = TotalPoints;
    }
    ;
    return Quiz;
}());
;
var QuizQuestion = (function () {
    function QuizQuestion(Id, Question, PossibleAnswers, Answer, Points, TestAnswer) {
        this.Id = Id;
        this.Question = Question;
        this.PossibleAnswers = PossibleAnswers;
        this.Answer = Answer;
        this.Points = Points;
        this.TestAnswer = TestAnswer;
    }
    ;
    return QuizQuestion;
}());
;
//////////////////////////////////////////////////////////////////////////////
// Assign variables to our class objects, i.e. define our quiz and it's questions
var myQuizQuestion1 = new QuizQuestion(1, "How many major planets are in our solar system?", ["8", "9", "10"], "8", 20, "x");
var myQuizQuestion2 = new QuizQuestion(2, "How many moons does Saturn have?", ["7", "62", "28"], "62", 20, "x");
var myQuizQuestion3 = new QuizQuestion(3, "Which planet is the largest planet in our solar system?", ["Neptune", "Saturn", "Jupiter"], "Jupiter", 20, "x");
var myQuizQuestion4 = new QuizQuestion(4, "Which major planet is furthest from the Sun?", ["Neptune", "Pluto", "Uranus"], "Neptune", 20, "x");
var myQuizQuestion5 = new QuizQuestion(5, "Which planet has prominent rings?", ["Neptune", "Saturn", "Uranus"], "Saturn", 20, "x");
var aryQuizQuestions = [myQuizQuestion1, myQuizQuestion2, myQuizQuestion3, myQuizQuestion4, myQuizQuestion5];
var myQuiz = new Quiz(1, "Solar System", aryQuizQuestions, 100);
//////////////////////////////////////////////////////////////////////////////
//Let's go ahead and store some useful values in variables we're going use again and again
var strQuizName = myQuiz.QuizName;
var nbrCurrentQuestion = 0;
var nbrCurrentArrayPosition = -1;
var nbrTotalQuestions = aryQuizQuestions.length;
var nbrCurrentPoints = 0;
var nbrTotalPoints = myQuiz.TotalPoints;
var strQuestion = "Initial question...";
var aryPossibleAnswers;
var strTestAnswer = "Initial test answer...";
var strAnswer = "Initial answer...";
//////////////////////////////////////////////////////////////////////////////
//Handle our button clicks
var btnPreviousQuestion = document.getElementById("btnPreviousQuestion");
btnPreviousQuestion.addEventListener("click", fctGetPreviousQuestion);
var btnNextQuestion = document.getElementById("btnNextQuestion");
btnNextQuestion.addEventListener("click", fctGetNextQuestion);
//////////////////////////////////////////////////////////////////////////////
//OK, let's launch this thing!
fctStart();
function fctStart() {
    //Set up the quiz page with it's initial values
    document.getElementById("idQuizName").innerHTML = strQuizName;
    document.getElementById("idCurrentQuestion").innerHTML = nbrCurrentQuestion.toString();
    document.getElementById("idTotalQuestions").innerHTML = nbrTotalQuestions.toString();
    document.getElementById("idCurrentPoints").innerHTML = nbrCurrentPoints.toString();
    document.getElementById("idTotalPoints").innerHTML = nbrTotalPoints.toString();
    nbrCurrentQuestion = 1;
    fctGetCurrentQuestion();
    fctRefreshScreenElements();
}
;
function fctGetPreviousQuestion() {
    fctSubmitAnswer();
    if (nbrCurrentQuestion > 1) {
        nbrCurrentQuestion--;
        fctGetCurrentQuestion();
    }
    ;
    fctRefreshScreenElements();
}
;
function fctGetNextQuestion() {
    fctSubmitAnswer();
    if (nbrCurrentQuestion < aryQuizQuestions.length) {
        nbrCurrentQuestion++;
        fctGetCurrentQuestion();
    }
    ;
    fctRefreshScreenElements();
}
;
//////////////////////////////////////////////////////////////////////////////
//The jist here is read the current question array, build the opion group,
//and then refresh the page with the new values.
function fctGetCurrentQuestion() {
    nbrCurrentArrayPosition = nbrCurrentQuestion - 1;
    strQuestion = aryQuizQuestions[nbrCurrentArrayPosition].Question;
    aryPossibleAnswers = aryQuizQuestions[nbrCurrentArrayPosition].PossibleAnswers;
    strTestAnswer = aryQuizQuestions[nbrCurrentArrayPosition].TestAnswer;
    strAnswer = aryQuizQuestions[nbrCurrentArrayPosition].Answer;
}
;
function fctBuildPossibleAnswers() {
    var strHTML = "";
    for (i = 0; i < aryPossibleAnswers.length; i++) {
        strHTML = strHTML + "<input type='radio' name= 'possibleanswer' value= '" + aryPossibleAnswers[i] + "'>" + aryPossibleAnswers[i] + "<br />";
    }
    ;
    return strHTML;
}
;
function fctRefreshScreenElements() {
    document.getElementById("idCurrentQuestion").innerHTML = nbrCurrentQuestion.toString();
    document.getElementById("idCurrentPoints").innerHTML = fctCurrentPoints().toString();
    document.getElementById("idQuestion").innerHTML = strQuestion;
    document.getElementById("idAnswerOptionGroup").innerHTML = fctBuildPossibleAnswers();
    fctCheckTheRadioButton();
}
;
function fctCheckTheRadioButton() {
    // loop through all radio butotns to display value
    var radiobuttons = document.querySelectorAll("input[type='radio']");
    for (var k = 0; k < radiobuttons.length; k++) {
        if (radiobuttons[k].value == strTestAnswer) {
            radiobuttons[k].checked = true;
        }
        ;
    }
}
;
//////////////////////////////////////////////////////////////////////////////
//Record the users answer in the questions array answer
function fctSubmitAnswer() {
    var strTestAnswer = "";
    // loop through all radio buttons to display value
    var radiobuttons = document.querySelectorAll("input[type='radio']:checked");
    //There should be only one checked radio button
    if (radiobuttons.length == 1) {
        strTestAnswer = radiobuttons[0].value;
        //Record the users answer
        aryQuizQuestions[nbrCurrentArrayPosition].TestAnswer = strTestAnswer;
    }
    ;
}
;
//////////////////////////////////////////////////////////////////////////////
//Score the quiz. Do this on each move.
//Go ahead and look and each question/answer and score over everything each time.
function fctCurrentPoints() {
    var strCorrectAnswer = "";
    var strTestAnswer = "";
    var nbrQuestionPoints = 0;
    nbrCurrentPoints = 0;
    for (i = 0; i < aryQuizQuestions.length; i++) {
        strCorrectAnswer = aryQuizQuestions[i].Answer;
        strTestAnswer = aryQuizQuestions[i].TestAnswer;
        nbrQuestionPoints = aryQuizQuestions[i].Points;
        if (strTestAnswer == strCorrectAnswer) {
            nbrQuestionPoints = aryQuizQuestions[i].Points;
            nbrCurrentPoints = nbrCurrentPoints + nbrQuestionPoints;
        }
        ;
    }
    ;
    return nbrCurrentPoints;
}
;
//# sourceMappingURL=quizapp.js.map