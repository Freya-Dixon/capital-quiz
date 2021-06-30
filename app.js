// set variables on html page 
const newQuestion = document.querySelector('.display')
console.log(newQuestion);
const questionButtons = document.querySelector('.question_btns')
console.log(questionButtons);
const nextButton = document.querySelector('.next')
console.log(nextButton);

// object data 

const questions = {
    
    "england": {
        question: "Capital city of England is..",
        capital: "London",
        notCapitals: ["Glasgow", "Manchester", "Cardiff"]
    },
    "usa": {
        question: "Capital city of the USA is..",
        capital:"Washington.DC",
        notCapitals: ["New York", "Washington", "Los Angeles"]
    },
    "france": {
        question: "Capital city of France is..",
        capital:"Paris",
        notCapitals: ["Lille", "Lyon", "Berlin"]
    },
};
console.log(questions);
const entries = Object.entries(questions);
const values = Object.values(questions);
const keys = Object.keys(questions);
console.log(values);
console.log(entries);

// 
const getQuestion = () => {
    newQuestion.innerHTML = values[0].question;
}
console.log(getQuestion);
nextButton.addEventListener('click', getQuestion);


// add event listeners to when button is clicked by user, the right return is displayed as green and the display changes to "You're correct!"


//loop to next question, previous return finished, start next question. 


//create reset button that returns back to start of game 