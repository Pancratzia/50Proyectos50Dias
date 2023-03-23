const quizData = [
    {
        question: "¿Año de nacimiento de la señora Kang Seulgi?",
        a: "10 de Mayo de 1995",
        b: "2 de Octubre de 1995",
        c: "10 de Febrero de 1994",
        d: "2 de Febrero de 1994",
        correct: "c",
    },
    {
        question: "¿Mejor canción de un grupo musical femenino?",
        a: "Esta no es",
        b: "Esta tampoco",
        c: "Lo mismo que a y b",
        d: "Dumb Dumb - Red Velvet",
        correct: "d",
    },
    {
        question: "Completa la letra de Queendom: La-di-da-doo, ba-ba-di-da, la-di-da-doo,...",
        a: "Duru Duru Du",
        b: "ba-ba-di-da",
        c: "Knock knock knock knock",
        d: "Dy-na-na-na, na-na, na-na-na, na-na-na, life is dynamite",
        correct: "b",
    },
    {
        question: "Integrantes de Red Velvet:",
        a: "Irene, Seulgi, Wendy y Joy",
        b: "Irina, Sarah, Wanda, Javiera y Yelitza",
        c: "Irene, Seulgi, Wendy, Joy y Yeri",
        d: "Jennie, Jisoo, Rosé y Lisa",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Respondiste ${score}/${quizData.length} preguntas correctamente</h2>
                <button onclick="location.reload()">Reintentar</button>
            `
        }
    }
})