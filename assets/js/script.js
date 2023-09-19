var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer-box");
var quizEl = document.getElementById("quiz");
var currentQuestionIndex = 0;

var timeRemaining = 20;
function setQuizTimer() {
  var timerInterval = setInterval(function () {
    timerEl.textContent = timeRemaining;
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      quizEl.innerHTML = "";
      timerEl.textContent = "Time is up";
      endQuiz();
    }
  }, 1000);
}

var quizQuestions = [
  {
    prompt: "What does CSS stand for?",
    choices: [
      "Crunchy Spicy Sauce",
      "Cascading Syle Sheets",
      "Captain Super Stan",
      "Crazy Stupid Style",
    ],
    correctChoice: "Cascading Style Sheets",
  },
  {
    prompt: "What does HTML stand for?",
    choices: ["HoneyTML", "HugeTML", "Hypertext Markup Language", "Cheese"],
    correctChoice: "Hypertext Markup Language",
  },
  {
    prompt:
      "What is a very popular JavaScript library that uses the polymorphous method $()",
    choices: ["Banoodle", "Swiffer Wet Jet?", "jCheese", "jQuery"],
    correctChoice: "jQuery",
  },
];

var highScores = {
  initials: "",
  score: "",
};

function showQuestion() {
  //
  var currentQuestion = quizQuestions[currentQuestionIndex];
  console.log(currentQuestion);

  var promptEl = document.createElement("p");
  promptEl.textContent = currentQuestion.prompt;
  quizEl.appendChild(promptEl);
  console.log(promptEl);

  var listEl = document.createElement("ul");

  for (i = 0; i < currentQuestion.choices.length; i++) {
    var choiceEl = document.createElement("button");
    listEl.appendChild(choiceEl);
    choiceEl.textContent = currentQuestion.choices[i];
    choiceEl.addEventListener("click", checkAnswer);
  }
  quizEl.appendChild(listEl);
}

function checkAnswer(event) {
  console.log("checking");
  console.log(event);
  var selectedAnswer = event.target.textContent;
  console.log(selectedAnswer);
  var correctAnswer = quizQuestions[currentQuestionIndex].correctChoice;
  console.log(correctAnswer);
  //check if right or wrong
  if (selectedAnswer !== correctAnswer) {
    timeRemaining = timeRemaining - 5;
  }

  if (currentQuestionIndex <= quizQuestions.length) {
    currentQuestionIndex++;
    quizEl.innerHTML = "";
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  console.log("ending the quiz");
}

startButton.addEventListener("click", function () {
  showQuestion();
  setQuizTimer();
});
