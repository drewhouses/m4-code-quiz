var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer-box");
var quizEl = document.getElementById("quiz");

function sendTimesUpPage() {
  //   document.body.innerHTML = "";
  timerEl.textContent = "Time is up";
}

var timeRemaining = 2;
function setQuizTimer() {
  var timerInterval = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      sendTimesUpPage();
    }
  }, 1000);
}

var quizQuestions = [
  "This is question1",
  "This is question2",
  "This is question3",
  "This is question4",
  "This is question5",
];

var quizAnswers = [
  ["q1a1", "q1a2", "q1a3", "q1a4"],
  ["q2a1", "q2a2", "q2a3", "q2a4"],
  ["q3a1", "q3a2", "q3a3", "q3a4"],
  ["q4a1", "q4a2", "q4a3", "q4a4"],
  ["q5a1", "q5a2", "q5a3", "q5a4"],
];

function setQuizPage(pageNum) {
  var questionEl = document.createElement("p");
  var listEl = document.createElement("ul");
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");
  var li4 = document.createElement("li");

  var question = quizEl.appendChild(questionEl);
  question.textContent = quizQuestions[pageNum - 1];

  var answerList = quizEl.appendChild(listEl);
  var choiceA = answerList.appendChild(li1);
  var choiceB = answerList.appendChild(li2);
  var choiceC = answerList.appendChild(li3);
  var choiceD = answerList.appendChild(li4);
  console.log(question);
}

setQuizPage(1);

startButton.addEventListener("click", function () {
  setQuizTimer();
});
