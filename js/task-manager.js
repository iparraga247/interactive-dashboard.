
/* Weekly Task Goal Calculator */

const goalForm = document.getElementById("goal-form");

goalForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("user-name").value;

    const dailyGoal = Number(document.getElementById("daily-goal").value);

    const bonusTasks = Number(document.getElementById("bonus-tasks").value);

    const weeklyGoal = (dailyGoal * 7) + bonusTasks;

    document.getElementById("goal-message").textContent =
        "Great job, " + name + "! Your weekly task goal is " +
        weeklyGoal + " tasks.";

});


/* Imperial/Metric Converter */

const converterForm = document.getElementById("converter-form");

converterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const value = Number(document.getElementById("input-value").value);

    const conversion = document.getElementById("conversion-type").value;

    let result = 0;

    if (conversion === "Inches to Centimeters") {
        result = value * 2.54;
    }

    else if (conversion === "Feet to Centimeters") {
        result = value * 30.48;
    }

    else if (conversion === "Yards to Meters") {
        result = value * 0.9144;
    }

    else if (conversion === "Miles to Kilometers") {
        result = value * 1.60934;
    }

    else if (conversion === "Centimeters to Inches") {
        result = value / 2.54;
    }

    else if (conversion === "Centimeters to Feet") {
        result = value / 30.48;
    }

    else if (conversion === "Meters to Yards") {
        result = value / 0.9144;
    }

    else if (conversion === "Kilometers to Miles") {
        result = value / 1.60934;
    }

    document.getElementById("conversion-result").textContent =
        "Result: " + result.toFixed(2);

});


/* Magic Eight Ball */

const eightBallForm = document.getElementById("eight-ball-form");

const answers = [
    "Yes, definitely!",
    "It is certain.",
    "Without a doubt!",
    "Ask again later.",
    "Maybe.",
    "The future is unclear.",
    "My sources say no.",
    "Don't count on it.",
    "Very likely!",
    "Outlook is good!"
];

eightBallForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const question = document.getElementById("question").value.trim();

    if (question === "") {
        return;
    }

    const randomIndex = Math.floor(Math.random() * answers.length);

    document.getElementById("eight-ball-answer").textContent =
        answers[randomIndex];

});


/* Reset Magic Eight Ball */

document.getElementById("reset-question").addEventListener("click", function() {

    eightBallForm.reset();

    document.getElementById("eight-ball-answer").textContent = "";

});


/* Weekly Task List */

const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const taskInput = document.getElementById("task-name");

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        return;
    }

    const taskList = document.getElementById("tasks");

    const listItem = document.createElement("li");

    const taskText = document.createElement("span");

    taskText.textContent = taskName;

    /* Complete Task Checkbox */

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function() {

        listItem.classList.toggle("completed");

    });

    /* Delete Task Button */

    const deleteButton = document.createElement("button");

    deleteButton.type = "button";

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {

        listItem.remove();

    });

    listItem.appendChild(checkbox);

    listItem.appendChild(taskText);

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";

});
