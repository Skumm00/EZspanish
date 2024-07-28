const questions = [
  {
    question: "What Type of Framework is Django?",
    answers: [
      { text: "Web Framework", correct: false },
      { text: "Backend Framework", correct: true },
      { text: "Frontend Framework", correct: false },
      { text: "Full Stack Framework", correct: false },
    ],
  },
  {
    question: "What Language Type is python?",
    answers: [
      { text: "Backend Language", correct: true },
      { text: "OOP Language", correct: false },
      { text: "Frontend Language", correct: false },
      { text: "Full Stack Language", correct: false },
    ],
  },
  {
    question: "What does OOP stand for?",
    answers: [
      { text: "Olive Orange Programing", correct: false },
      { text: "Olympic Ozempic Program", correct: false },
      { text: "Objected Orientated Programming", correct: true },
      { text: "Full Stack Framework", correct: false },
    ],
  },
  {
    question: "How do check for bugs?",
    answers: [
      { text: "Check the console", correct: true },
      { text: "Check the Terminal", correct: false },
      { text: "Check the code", correct: false },
      { text: "Check GIT", correct: false },
    ],
  },
  {
    question: "What is the command to push a commit to the main/local repo?",
    answers: [
      { text: "git push ", correct: false },
      { text: "git pull", correct: false },
      { text: "git force", correct: false },
      { text: "git push origin main", correct: true },
    ],
  },
  {
    question: "What is git?",
    answers: [
      { text: "A system to commit and record changes ", correct: true },
      { text: "A amazing food to eat", correct: false },
      { text: "A system to avoid hackers and copyright", correct: false },
      { text: "A website", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  previousBtn.innerHTML = "Previous";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text;
    btn.classList.add(
      "flex","items-center",
      "w-full",
      "py-4",
      "pl-5",
      "m-2",
      "ml-0",
      "space-x-2",
      "border-2",
      "cursor-pointer",
      "border-black/10",
      "rounded-xl",
      "bg-black/5",
      "hover:border-black/40"
    );
    answerButtonsElement.appendChild(btn);
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("bg-white", "text-black");
  } else {
    selectedBtn.classList.add("bg-red", "text-black");
  }
}

startQuiz();
