// to manipulate the DOM

const cpuChoice = document.getElementById('computerChoice');
const pChoice = document.getElementById('playerChoice');
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll('button'); //to select all buttons


// use object notation to create result matrix
// 2 = Computer winds
// 1 = Player wins
// 0 = Tie
const possibleResults = {

    "rock": {
        "rock": 0,
        "paper": 2,
        "scissors": 1,
    },

    "paper": {
        "rock": 1,
        "paper": 0,
        "scissors": 2,
    },

    "scissors": {
        "rock": 2,
        "paper": 1,
        "scissors": 0,
    },
};

const gameResults = ["It's a Draw", "Congratulations, you win!", "Computer wins. Better luck next time."] // Array of different result outputs


// declare global variables
let playerChoice;
let computerChoice;


// forEach to execute function on every array element when it is clicked.
// with the addEventListener the function is only called when the event "Click" occurs.
choices.forEach(choices => choices.addEventListener('click', (event) => {
    playerChoice = event.target.id; //to save the Choice of the player at the event "Click" 
    switch (playerChoice) {

        case "rock":
            pChoice.innerHTML = "<img src='img/rock.png' width='50' height='50'>";
            break;

        case "paper":
            pChoice.innerHTML = "<img src='img/paper.png' width='50' height='50'>";
            break;
        case "scissors":
            pChoice.innerHTML = "<img src='img/scissors.png' width='50' height='50'>";
            break;
        default:
            break;
    };
    //pChoice.innerHTML = playerChoice;  to display the player choice
    generateCpuChoice(); // function that genererated the random computer pick
    getResult(); // compares computer choice and player choice

}));


// function to generate random Computer Choice
function generateCpuChoice() {

    let choices = ["rock", "paper", "scissors"]; // array of possible choices
    computerChoice = choices[Math.floor(Math.random() * choices.length)]; // use math.random
    // display computer choice as picture
    switch (computerChoice) {

        case "rock":
            cpuChoice.innerHTML = "<img src='img/rock.png' width='50' height='50'>";
            break;

        case "paper":
            cpuChoice.innerHTML = "<img src='img/paper.png' width='50' height='50'>";
            break;
        case "scissors":
            cpuChoice.innerHTML = "<img src='img/scissors.png' width='50' height='50'>";
            break;
        default:
            break;
    };
}

// function to compare choices
function getResult() {
    let r = possibleResults[playerChoice][computerChoice];
    resultDisplay.innerHTML = gameResults[r];
}