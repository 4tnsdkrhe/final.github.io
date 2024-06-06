function setLanguage(lang) {
    document.querySelectorAll('[data-lang-' + lang + ']').forEach(function(element) {
        element.textContent = element.getAttribute('data-lang-' + lang);
    });
}
setLanguage('en');


const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const elements = document.querySelectorAll("button, a");

elements.forEach(element => {
  element.addEventListener("click", () => {
    audio.play();
  });
});


// FOR QUIZZ
const quizData = [
  {
      question: "What does Yulia's Company do?",
      a: "SMM music club",
      b: "Creative digital marketing",
      c: "I don't know",
      correct: "b",
  },
  {
      question: "The last work of Yulia's Company",
      a: "Search Engine Optimization",
      b: "Vlog from Almaty",
      c: "Vlog from Karaganda",
      correct: "a",
  },
  {
      question: "What account does the instagram link lead to?",
      a: "Yulia's account",
      b: "The company",
      c: "Music club",
      correct: "c",
  },
  {
      question: "The slogan of the company",
      a: "Born to Win",
      b: "YOUR SUCCESS IS OUR GOAL!",
      c: "Do nothing",
      correct: "b",
  },
  {
      question: "The location of the company",
      a: "Ave. Mangilik El., Astana 020000",
      b: "Somewhere",
      c: "It shouldn't be A",
      correct: "a",
  },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
  answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
  let answer;

  answerElements.forEach(answerEl => {
      if(answerEl.checked){
          answer = answerEl.id;
      }
  });

  return answer;
}

submit.addEventListener('click', () => {
  const answer = getSelected();

  if(answer){
      if(answer === quizData[currentQuiz].correct){
          score++;
      }

      currentQuiz++;

      if(currentQuiz < quizData.length){
          loadQuiz();
      }
      else{
          quiz.innerHTML = `<h2 class="quiz-header" style="color:white;">You answered coreectly at ${score}/${quizData.length} questions</h2>
          <button class="btn btn-outline-success" onclick="location.reload()">Reload</button>
          `;
      }
  }
});
