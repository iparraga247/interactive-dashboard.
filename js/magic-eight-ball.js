
/* Magic Eight Ball Application */

// Array containing possible Magic Eight Ball answers
let answers = [
    "Yes, definitely!",
    "Ask again later.",
    "It is certain.",
    "My sources say no.",
    "Without a doubt!",
    "Outlook not so good.",
    "Most likely.",
    "Cannot predict right now."
];

// Function to display a random answer
function displayAnswer() {

    // Generate a random number to select an answer
    let randomIndex = Math.floor(Math.random() * answers.length);

    // Get the selected answer
    let randomAnswer = answers[randomIndex];

    // Display the answer inside the circle
    let circle = document.getElementById("circle");

    circle.innerHTML = randomAnswer;
    circle.style.display = "block";
}

// Get the Magic Eight Ball image
let ball = document.getElementById("ball");

// Check the question when the ball is clicked
ball.addEventListener("mousedown", function() {

    let question = document.getElementById("question").value;

    // Check if the user entered a question
    if (question.trim() === "") {

        alert("Please enter a question first.");

    } else {

        // Display a random answer
        displayAnswer();

    }

});

// Get the reset button
let resetButton = document.getElementById("reset");

// Hide the answer when reset is clicked
resetButton.addEventListener("click", function() {

    document.getElementById("circle").style.display = "none";

});

// BONUS: Allow the user to add a new response
let addResponseButton = document.getElementById("add-response");

addResponseButton.addEventListener("click", function() {

    // Ask the user to enter a new response
    let newResponse = prompt("Enter a new Magic Eight Ball response:");

    // Add the response if the user entered something
    if (newResponse !== null && newResponse.trim() !== "") {

        answers.push(newResponse);

        // Display the new response and total number of answers
        console.log("New response added: " + newResponse);
        console.log("Total responses: " + answers.length);

        alert("Your new response was added!");

    }

});
