/* Imports */

/* Get DOM Elements */
const submitBtn = document.getElementById('submit-button');
const promptBtn = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const answerP = document.getElementById('answer');
const reBtn = document.getElementById('re-roll');

/* State */

/* Events */
submitBtn.addEventListener('click', () => {
    toggleSections();
    const randomInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randomInt];
    answerP.textContent = randomChoice;
});

reBtn.addEventListener('click', () => {
    toggleSections();
});

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Outlook hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
