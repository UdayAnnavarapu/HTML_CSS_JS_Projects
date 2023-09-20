const quizData = [
    {
        question: "What is the collective name for a group of unicorns?",
        a: "A herd",
        b: "A huddle",
        c: "A blessing",
        d: "A shiver",
        correct: "c"
    }, {
        question: "What color is an airplane's black box?",
        a: "orange",
        b: "black",
        c: "red",
        d: "indigo",
        correct: "a"
    }, {
        question: "What is the opposite of port on a boat?",
        a: "Deck",
        b: "Bow",
        c: "Rear",
        d: "Starboard",
        correct: "d"
    }, {
        question: "In what language is the phrase ‘Hakuna Matata’?",
        a: "Yoruba",
        b: "Telugu",
        c: "Dutch",
        d: "Swahili",
        correct: "d"
    }, {
        question: "In Ancient Rome, how many days of the week were there?",
        a: "Six",
        b: "Eight",
        c: "Seven",
        d: "Five",
        correct: "b"
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}



function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitbtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer){
            if (answer === quizData[currentQuiz].correct){
                score++;
            }
            
            currentQuiz++;

            if(currentQuiz < quizData.length){
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly.</h2> <button onclick="location.reload()">Reload</button>`;
            }
        }


});