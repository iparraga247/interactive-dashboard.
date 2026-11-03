/* Weekly Task Goal Calculator */

document.getElementById("goal-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = "Hello " + userName +
        "! Your weekly task goal is " + weeklyGoal +
        " tasks. With your " + bonusTasks +
        " bonus tasks, your total goal is " + totalGoal + " tasks.";

    document.getElementById("goal-message").textContent = output;
});


/* Weekly Task Goals */

// Weekly Goal Calculator
document.getElementById("goal-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = "Hello " + userName +
        "! Your weekly task goal is " + weeklyGoal +
        " tasks. With your " + bonusTasks +
        " bonus tasks, your total goal is " + totalGoal + " tasks.";

    document.getElementById("goal-message").textContent = output;
});


/* Module 7: Weekly Task Manager */

// Create an empty array to store tasks
let myTasks = [];

// Create an unordered list
let taskList = document.createElement("ul");

// Give the list an ID
taskList.id = "user-tasks";

// Add the list to the task-list div
document.getElementById("task-list").appendChild(taskList);

// Get the Add Task button
let addTaskButton = document.getElementById("add-task");

// Add a click event listener
addTaskButton.addEventListener("click", function() {

    // Get the task from the input
    let taskInput = document.getElementById("task-name");
    let task = taskInput.value.trim();

    // Check that the input is not empty
    if (task !== "") {

        // Store the task in the array
        myTasks.push(task);

        // Create a new list item
        let listItem = document.createElement("li");

        // Add the task text to the list item
        listItem.textContent = task;

        // Add the list item to the unordered list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";

    } else {
        alert("Please enter a task.");
    }
});
