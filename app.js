// set variables on html page 
const newQuestion = document.querySelector('.display')
console.log(newQuestion);
const answers = document.querySelector('.btn')
console.log(answers);
const answersTwo = document.querySelector('.btnTwo')
console.log(answersTwo);
const answersThree = document.querySelector('.btnThree')
console.log(answersThree);
const answersFour = document.querySelector('.btnFour')
console.log(answersThree);
const nextButton = document.querySelector('.next')
console.log(nextButton);
const icon = document.querySelector('.icon')
console.log(icon);
const points = document.querySelector('.pointTotal')
console.log(points);
// object data 

const questions = {
    
    "england": {
        question: "The capital city of England is..",
        flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        capital: "London",
        notCapitals: ["Glasgow", "Manchester", "Cardiff"]
    },
    "usa": {
        question: "The capital city of the USA is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇺🇸",
        capital:"Washington.DC",
        notCapitals: ["New York", "Washington", "Los Angeles"]
    },
    "france": {
        question: "The capital city of France is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇫🇷",
        capital: "Paris",
        notCapitals: ["Lille", "Lyon", "Berlin"]
    },
    "italy": {
        question: "The capital city of Italy is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇮🇹",
        capital: "Rome",
        notCapitals: ["Venice", "Milan", "Naples"]
    },
    "spain": {
        question: "The capital city of Spain is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇪🇸",
        capital: "Madrid",
        notCapitals: ["Barcelona", "Valencia", "Selville"]
    },
    "nigeria": {
        question: "The capital city of Nigeria is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇳🇬",
        capital: "Abuja",
        notCapitals: ["Lagos", "Kano", "Jos"]
    },
    "denmark": {
        question: "The capital city of Denmark is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇩🇰",
        capital: "Copenhagen",
        notCapitals: ["Aarhus", "Roskilde", "Helsingør"]
    },
    "colombia": {
        question: "The capital city of Colombia is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇨🇴",
        capital: "Bogota",
        notCapitals: ["Medillin", "Cali", "Santa Marta"]
    },
    "thailand": {
        question: "The capital city of Thailand is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇹🇭",
        capital: "Bangkok",
        notCapitals: ["Changmai", "Nonthaburi", "Hat Yai City"]
    },
    "peru": {
        question: "The capital city of Peru is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇵🇪",
        capital: "Lima",
        notCapitals: ["Trujillo", "Piura", "Arequipa"]
    },
    "tanzania": {
        question: "The capital city of Tanzania is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇹🇿",
        capital: "Dodoma",
        notCapitals: ["Dar es Saalam", "Morogoro", "Arusha"]
    },
    "myanmar": {
        question: "The capital city of Myanmar is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇲🇲",
        capital: "Nay Pi Daw",
        notCapitals: ["Yangon", "Mandalay", "Taunggyi"]
    },
    "ghana": {
        question: "The capital city of Ghana is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇬🇭",
        capital: "Accra",
        notCapitals: ["Kumasi", "Sekondi-Takoradi", "Tamale"]
    },
    "argentina": {
        question: "The capital city of Argentina is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇦🇷",
        capital: "Buenos Aires",
        notCapitals: ["Rio Grande", "Cordoba", "Rosario"]
    },
    "sweden": {
        question: "The capital city of Sweden is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇸🇪",
        capital: "Stockholm",
        notCapitals: ["Lund", "Cordoba", "Rosario"]
    },
    "vietnam": {
        question: "The capital city of Vietnam is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇻🇳",
        capital: "Hanoi",
        notCapitals: ["Ho Chi Minh City", "Da Lat ", "Hue"]
    },
    "canada": {
        question: "The capital city of Canada is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇨🇦",
        capital: "Ottawa",
        notCapitals: ["Toronto", "Vancouver", "Montreal"]
    },
    "trinidad and tobago": {
        question: "The capital city of Trinidad and Tobago is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇹🇹",
        capital: "Port of Spain",
        notCapitals: ["Arima", "Scarborough", "Point Fortin"]
    },
    "iceland": {
        question: "The capital city of Iceland is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇮🇸",
        capital: "Reykjavík",
        notCapitals: ["Akureyri", "Vík í Mýrdal", "Húsavík"]
    },
    "mongolia": {
        question: "The capital city of Mongolia is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇲🇳",
        capital: "Ulaanbaatar",
        notCapitals: ["Marun", "Ulaangom", "Khovd"]
    },
    "norway": {
        question: "The capital city of Norway is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇳🇴",
        capital: "Olso",
        notCapitals: ["Bergen", "Bodø", "Ålesund"]
    },
    "sudan": {
        question: "The capital city of Sudan is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇸🇩",
        capital: "Khartoum",
        notCapitals: ["Omdurman", "Kassala", "Nyala"]
    },
    "lithuania": {
        question: "The capital city of Lithuania is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇱🇹",
        capital: "Vilnius",
        notCapitals: ["Kaunas", "Alytus", "Panevėžys"]
    },
    "democratic republic of congo": {
        question: "The capital city of DRC is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇨🇩",
        capital: "Kinshasa",
        notCapitals: ["Kisangani", "Goma", "Bukavu"]
    },
    "laos": {
        question: "The capital city of Laos is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇱🇦",
        capital: "Vientiane",
        notCapitals: ["Luang Prabang", "Savannakhet", "Pakse"]
    },
    "qatar": {
        question: "The capital city of Qatar is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇶🇦",
        capital: "Doha",
        notCapitals: ["Abu az Zuluf", "Ad Dawhah al Jadidah", "Al Ghuwariyah"]
    },
    "iraq": {
        question: "The capital city of Iraq is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇮🇶",
        capital: "Baghdad",
        notCapitals: ["Mosul", "Basrah", "Kirkuk"]
    },
    "turkmenistan": {
        question: "The capital city of Turkmenistan is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇹🇲",
        capital: "Ashgabat",
        notCapitals: ["Turkmenabat", "Turkmenbashi", "Dashoguz"]
    },
    "mexico": {
        question: "The capital city of Mexico is..",
        flag: "󠁧󠁢󠁥󠁮󠁧🇲🇽",
        capital: "Mexico City",
        notCapitals: ["Wahaca", "Guadalajara", "Cancún"]
    },
    // //    "finland": {
    //     question: "The capital city of Finland is..",
        // flag: "󠁧󠁢󠁥󠁮󠁧🇫🇮",
    //     capital: "Helsinki",
    //     notCapitals: ["Alavus", "Huittinen", "Äänekoski"]
    // },
     // //    "ethiopia": {
    //     question: "The capital city of Ethiopia is..",
        // flag: "󠁧󠁢󠁥󠁮󠁧🇪🇹",
    //     capital: "Addis Ababa",
    //     notCapitals: ["Mek'ele", "Gondar", "Harar"]
    // },
     // //    "micronesia": {
    //     question: "The capital city of Micronesia is..",
        // flag: "󠁧󠁢󠁥󠁮󠁧🇫🇲",
    //     capital: "Palikir",
    //     notCapitals: ["Tofol", "Colonia", "Tafunsak"]
    // },
     // //    "grenada": {
    //     question: "The capital city of Grenada is..",
        // flag: "󠁧󠁢󠁥󠁮󠁧🇬🇩",
    //     capital: "Saint George's",
    //     notCapitals: ["Victoria", "Sauteurs", "Chantimelle"]
    // },
     // //    "honduras": {
    //     question: "The capital city of Honduras is..",
        // flag: "󠁧󠁢󠁥󠁮󠁧🇭🇳",
    //     capital: "Tegucigalpa",
    //     notCapitals: ["La Ceiba", "Choloma", "Choluteca"]
    // },
};
console.log(questions);
const entries = Object.entries(questions);
const values = Object.values(questions);
const keys = Object.keys(questions);
console.log(values);
console.log(entries);
console.log(keys.length);

const ifAnswerCorrect = (e,randNumber) => {
    if (e.target.innerHTML === values[randNumber].capital) {
        answers.classList.remove('')
    } else 
    //reference the two class lists created in css
    answersTwo.style.backgroundColor  = "red"
    answersThree.style.backgroundColor  = "red"
    answersFour.style.backgroundColor  = "red"
}


// display question on page 
const getQuestion = () => {
    let randomNumber = Math.round(Math.random() * (29))
    console.log(randomNumber);
    console.log(keys[randomNumber]);

    newQuestion.innerHTML = values[randomNumber].question;
    icon.innerHTML = values[randomNumber].flag;
    answers.innerHTML = values[randomNumber].capital;
    answersTwo.innerHTML = values[randomNumber].notCapitals[2];
    answersThree.innerHTML = values[randomNumber].notCapitals[1];
    answersFour.innerHTML = values[randomNumber].notCapitals[0];

answers.addEventListener('click',(e)=>ifAnswerCorrect(e,randomNumber));
answersTwo.addEventListener('click',(e)=> ifAnswerCorrect(e,randomNumber));
answersThree.addEventListener('click',(e)=> ifAnswerCorrect(e,randomNumber));
answersFour.addEventListener('click',(e)=> ifAnswerCorrect(e,randomNumber));
}
console.log(getQuestion);
getQuestion();

// event listener to display new question and answers
nextButton.addEventListener('click', getQuestion);

// alert user if value = capital or value = notCapitals by changing the colour. Element should return green if correct and red if incorrect. Bonus, add icon that displays a tick or cross after
