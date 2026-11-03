/* Magic Eight Ball Application */

// Possible answers
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

// Get the HTML elements
let ball = document.getElementById("ball");
let question = document.getElementById("question");
let circle = document.getElementById("circle");
let resetButton = document.getElementById("reset");
let addResponseButton = document.getElementById("add-response");
let eightBallForm = document.getElementById("eight-ball-form");

// Stop the form from refreshing the page
eightBallForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

// Display a random answer when the ball is clicked
ball.addEventListener("click", function() {

    if (question.value.trim() === "") {
        alert("Please enter a question first.");
    } else {
        let randomIndex = Math.floor(Math.random() * answers.length);

        circle.innerHTML = answers[randomIndex];
        circle.style.display = "block";
    }

});

// Hide the answer when reset is clicked
resetButton.addEventListener("click", function() {
    circle.style.display = "none";
});

// Add a new answer
addResponseButton.addEventListener("click", function() {

    let newResponse = prompt("Enter a new Magic Eight Ball response:");

    if (newResponse !== null && newResponse.trim() !== "") {
        answers.push(newResponse);

        alert("Your new response was added!");
    }

});
