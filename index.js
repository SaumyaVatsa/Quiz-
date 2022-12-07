const quizData = [{
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},{
    question: "Which does CSS stands for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
},{
    question: "What does HTML Stands for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
},{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
},{
    question: "Which of the following is not an HTML Tag?",
    a: "Doctype",
    b: "P",
    c: "Table",
    d: "Style",
    correct: "a",
},{
    question: "How many ways can you apply colors in CSS?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "3",
},{
    question: "What are the two methods of form transfer?",
    a: "Get and Receive",
    b: "Get and Post",
    c: "Post and Receive",
    d: "Post and take",
    correct: "b",
},{
    question: "Which of the following is described as collection of images put in a single image?",
    a: "Float",
    b: "Align",
    c: "Sprite",
    d: "Image",
    correct: "c",
},{
    question: "What should be the very last thing in an HTML Document?",
    a: "The heading",
    b: "Title",
    c: "Body",
    d: "Doc Type",
    correct: "d",
},{
    question: "A collection of data containing both properties and methods is called...",
    a: "Tag",
    b: "Selector",
    c: "Object",
    d: "Class",
    correct: "c",
},];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("ques");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementsByClassName("submit");
const score = document.getElementById("score");

let currentQuiz = 0;
let currentScore = 0;

const deselectAnswers = () =>{
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if(answerElement.checked){
            answer = answerElement.id;
        }
    });
    return answer;
}


const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();

submitButton[0].addEventListener("click",()=>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            currentScore++;
            score.innerText = currentScore;
        }
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        // alert("You Won!");
        quiz.innerHTML = `<h2>
                            You answered ${currentScore}/${quizData.length} questions Correctly
                            </h2>
                            <button class= "submit" onclick = "history.go(0)">PLay Again</button>
                            `
    }
})