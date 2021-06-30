// set variables on html page 
const newQuestion = document.querySelector('.display')
console.log(newQuestion);
const questionButtons = document.querySelector('.question_btns')
console.log(questionButtons);
// object data 

const england = {
    question: "Capital city of England is..",
    capital:"London",
    notCapitals: ["Glasgow", "Manchester", "Cardiff"]
}
const usa = {
    question: "Capital city of the USA is..",
    capital:"Washington.DC",
    notCapitals: ["New York", "Washington", "Los Angeles"]
}
const france = {
    question: "Capital city of France is..",
    capital:"Paris",
    notCapitals: ["Lille", "Lyon", "Berlin"]
}

// add event listeners to when button is clicked by user, the right return is displayed as green and the display changes to "You're correct!"


//loop to next question, previous return finished, start next question. 


//create reset button that returns back to start of game 