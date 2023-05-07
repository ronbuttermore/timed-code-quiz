var startQuiz = document.querySelector("#startbutton");
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var feedback = document.querySelector("#feedback");

var questionNumber = 0;

function setQuestion() {
    if (questionNumber === 0) {
        question.textContent = "Testing Question 1";
        option1.innerHTML = "Here's the first option for the first question.";
        option1.style.border = "solid black 2px";
        option2.innerHTML = "Here's the second option for the first question.";
        option2.style.border = "solid black 2px";
        option3.innerHTML = "Here's the third option for the first question.";
        option3.style.border = "solid black 2px";
        option4.innerHTML = "Here's the fourth option for the first question.";
        option4.style.border = "solid black 2px";
        startQuiz.innerHTML = "Next Question";
        questionNumber++;
    } else if (questionNumber === 1) {
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
        option1.innerHTML = "Your final score was: ";
        option2.innerHTML = "Enter initials: ";
        option3.innerHTML = "";
        option4.innerHTML = "";
    }
}

startQuiz.addEventListener("click", setQuestion);

option1.addEventListener("click", function(){
    if (questionNumber === 1 || questionNumber === 5){
        feedback.innerHTML = "Correct!";
    } else {
        feedback.innerHTML = "Incorrect!";
    }
});

option2.addEventListener("click", function(){
    if (questionNumber === 2 || questionNumber === 6) {
        feedback.innerHTML = "Correct!";
    } else {
        feedback.innerHTML = "Incorrect!";
    }
});

option3.addEventListener("click", function(){
    if (questionNumber === 3 || questionNumber === 7) {
        feedback.innerHTML = "Correct!";
    } else {
        feedback.innerHTML = "Incorrect!";
    }
});

option4.addEventListener("click", function(){
    if (questionNumber === 4 || questionNumber === 8) {
        feedback.innerHTML = "Correct!";
    } else {
        feedback.innerHTML = "Incorrect!";
    }
});