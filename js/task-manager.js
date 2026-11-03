
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


/* Module 7: Weekly Task Manager */

// Create an empty array to store tasks
let myTasks = [];

// Find the task container
let taskContainer = document.getElementById("task-list");

// Create an unordered list
let taskList = document.createElement("ul");

// Give the list an ID
taskList.id = "user-tasks";

// Add the unordered list to the container
taskContainer.appendChild(taskList);

// Find the Add Task button
let addTaskButton = document.getElementById("add-task");

// Add a click event listener
addTaskButton.addEventListener("click", function() {

    // Get the task input
    let taskInput = document.getElementById("task-name");

    // Get the entered task
    let task = taskInput.value.trim();

    // Check if the input is empty
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Add the task to the array
    myTasks.push(task);

    // Create a list item
    let listItem = document.createElement("li");

    // Add the task text to the list item
    listItem.textContent = task;

    // Add the list item to the unordered list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";

});

console.log("Task Manager JavaScript is working!");
