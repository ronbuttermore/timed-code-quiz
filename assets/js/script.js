var startQuizBtn = document.querySelector("#startbutton");
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var feedback = document.querySelector("#feedback");
var timeRemaining = document.querySelector("#timeRemaining");

var questionNumber = 0;
var userScore = 0;
var timeLeft = 75;

function quizTimer () {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeRemaining.innerHTML = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timeRemaining.innerHTML = "Time's Up!"
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    question.textContent = "Sorry, you ran out of time! Try again";
    option1.innerHTML = "Your final score was: " + userScore;
    option2.innerHTML = "Enter initials: ";
    option3.innerHTML = "";
    option4.innerHTML = "";
    startQuizBtn.innerHTML = "Try again";
}

function startQuiz() {
    if (questionNumber == 0){  
    option1.addEventListener("click", advanceQuestion);
    option2.addEventListener("click", advanceQuestion);
    option3.addEventListener("click", advanceQuestion);
    option4.addEventListener("click", advanceQuestion);
    question.textContent = "Testing Question 1";
    option1.innerHTML = "Here's the first option for the first question.";
    option1.style.border = "solid black 2px";
    option2.innerHTML = "Here's the second option for the first question.";
    option2.style.border = "solid black 2px";
    option3.innerHTML = "Here's the third option for the first question.";
    option3.style.border = "solid black 2px";
    option4.innerHTML = "Here's the fourth option for the first question.";
    option4.style.border = "solid black 2px";
    startQuizBtn.innerHTML = "";
    questionNumber++;
    quizTimer();
    } else {
        option1.addEventListener("click", advanceQuestion);
        option2.addEventListener("click", advanceQuestion);
        option3.addEventListener("click", advanceQuestion);
        option4.addEventListener("click", advanceQuestion);
        option2.addEventListener("click", answerisB);
        option3.addEventListener("click", answerisC);
        option4.addEventListener("click", answerisD);
        option1.addEventListener("click", answerisA);
        timeLeft = 75;
        userScore = 0;
        question.textContent = "Testing Question 1";
        option1.innerHTML = "Here's the first option for the first question.";
        option1.style.border = "solid black 2px";
        option2.innerHTML = "Here's the second option for the first question.";
        option2.style.border = "solid black 2px";
        option3.innerHTML = "Here's the third option for the first question.";
        option3.style.border = "solid black 2px";
        option4.innerHTML = "Here's the fourth option for the first question.";
        option4.style.border = "solid black 2px";
        startQuizBtn.innerHTML = "";
        questionNumber = 0;
        questionNumber++;
        clearInterval(timeInterval);
        quizTimer();
    }
}



function advanceQuestion() {
    if (questionNumber === 1) {
        question.textContent = "Testing Question 2";
        option1.innerHTML = "Here's the first option for the second question.";
        option2.innerHTML = "Here's the second option for the second question.";
        option3.innerHTML = "Here's the third option for the second question.";
        option4.innerHTML = "Here's the fourth option for the second question.";
        questionNumber++;
    } else if (questionNumber === 2) {
        question.textContent = "Testing Question 3";
        option1.innerHTML = "Here's the first option for the third question.";
        option2.innerHTML = "Here's the second option for the third question.";
        option3.innerHTML = "Here's the third option for the third question.";
        option4.innerHTML = "Here's the fourth option for the third question.";
        questionNumber++;
    } else if (questionNumber === 3) {
        question.textContent = "Testing Question 4";
        option1.innerHTML = "Here's the first option for the fourth question.";
        option2.innerHTML = "Here's the second option for the fourth question.";
        option3.innerHTML = "Here's the third option for the fourth question.";
        option4.innerHTML = "Here's the fourth option for the fourth question.";
        questionNumber++;
    } else if (questionNumber === 4) {
        question.textContent = "Testing Question 5";
        option1.innerHTML = "Here's the first option for the fifth question.";
        option2.innerHTML = "Here's the second option for the fifth question.";
        option3.innerHTML = "Here's the third option for the fifth question.";
        option4.innerHTML = "Here's the fourth option for the fifth question.";
        questionNumber++;
    } else if (questionNumber === 5) {
        question.textContent = "Testing Question 6";
        option1.innerHTML = "Here's the first option for the sixth question.";
        option2.innerHTML = "Here's the second option for the sixth question.";
        option3.innerHTML = "Here's the third option for the sixth question.";
        option4.innerHTML = "Here's the fourth option for the second question.";
        questionNumber++;
    } else if (questionNumber === 6) {
        question.textContent = "Testing Question 7";
        option1.innerHTML = "Here's the first option for the seventh question.";
        option2.innerHTML = "Here's the second option for the seventh question.";
        option3.innerHTML = "Here's the third option for the seventh question.";
        option4.innerHTML = "Here's the fourth option for the seventh question.";
        questionNumber++;
    } else {
        question.textContent = "Congratulations, you finished!";
        var finalScore = userScore + timeLeft;
        option1.innerHTML = "Your final score was: " + finalScore;
        option2.innerHTML = "Enter initials: ";
        option3.innerHTML = "";
        option4.innerHTML = "";
        startQuizBtn.innerHTML = "Try Again";
        option1.removeEventListener("click", advanceQuestion);
        option2.removeEventListener("click", advanceQuestion);
        option3.removeEventListener("click", advanceQuestion);
        option4.removeEventListener("click", advanceQuestion);
        option2.removeEventListener("click", answerisB);
        option3.removeEventListener("click", answerisC);
        option4.removeEventListener("click", answerisD);
        option1.removeEventListener("click", answerisA);
    }
}

startQuizBtn.addEventListener("click", startQuiz);

function answerisB() {
    if (questionNumber == 1) {
        feedback.innerHTML = "Correct! 10 points!";
        userScore = userScore + 10;
    } else {
        feedback.innerHTML = "Incorrect! Sorry, 0 points!";
    }
}

function answerisC() {
    if (questionNumber == 2) {
        feedback.innerHTML = "Correct! 10 points!";
        userScore = userScore + 10;
    } else {
        feedback.innerHTML = "Incorrect! Sorry, 0 points!";
    }
}

function answerisD() {
    if (questionNumber == 3 || questionNumber == 4 || questionNumber == 6 || questionNumber == 7) {
        feedback.innerHTML = "Correct! 10 points!";
        userScore = userScore + 10;
    } else {
        feedback.innerHTML = "Incorrect! Sorry, 0 points!";
    }
}

function answerisA() {
    if (questionNumber == 5) {
        feedback.innerHTML = "Correct! 10 points!";
        userScore = userScore + 10;
    } else {
        feedback.innerHTML = "Incorrect! Sorry, 0 points!";
    }
}

option2.addEventListener("click", answerisB);
option3.addEventListener("click", answerisC);
option4.addEventListener("click", answerisD);
option1.addEventListener("click", answerisA);

option1.addEventListener("click", advanceQuestion);
option2.addEventListener("click", advanceQuestion);
option3.addEventListener("click", advanceQuestion);
option4.addEventListener("click", advanceQuestion);