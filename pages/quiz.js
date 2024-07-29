
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
let quiztype = "python";
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
 
  showQuestion();
}
//showing the question and its styles
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text;
    btn.classList.add(
      "flex","items-center","w-full","py-4","pl-5","m-2","ml-0","space-x-2","border-2",
      "cursor-pointer","border-black/10","rounded-xl","bg-black/5","hover:border-black/40","text-black"
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

document.querySelectorAll('button[data-quiz]').forEach(button => {
  
    button.addEventListener('click', selectQuiz);
});

function selectQuiz(e){
  const SelectedQuiz = e.currentTarget;
  const QuizType = SelectedQuiz.dataset.quiz;
  console.log(quiztype);
}

//selecting the dif answers
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  console.log("Selected Answer:", selectedBtn.innerHTML);
  console.log("Is Correct:", isCorrect);
  if (isCorrect == true) {
    selectedBtn.classList.add("bg-green-500","text-white",);
    score++
   
  } else {
    selectedBtn.classList.add("bg-red-500","text-white",);
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.dataset.correct === "true"){
      button.classList.add("bg-green-500","text-white",);
    }
    button.disabled = true;
  });
  nextBtn.style.display = "Block"
}

function showScore(){
  resetState();
  questionElement.innerHTML = `Score: ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Take Again";
  nextBtn.style.display = "Block";
  
}
function handleNextButton(){
  //If less then length of questions it will display the code.
  currentQuestionIndex++
  if (currentQuestionIndex < questions.length){
    showQuestion()
  }else{
    showScore()
  }
}
nextBtn.addEventListener("click", ()=> {
  if (currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    //restart quiz
    startQuiz();
  }
});
startQuiz();
