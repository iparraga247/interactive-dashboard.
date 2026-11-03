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

// Find the task list container
let taskContainer = document.getElementById("task-list");

// Create an unordered list
let taskList = document.createElement("ul");

// Give the list an ID
taskList.id = "user-tasks";

// Add the list to the page
taskContainer.appendChild(taskList);

// Find the Add Task button
let addTaskButton = document.getElementById("add-task");

// Add a click event listener
addTaskButton.addEventListener("click", function() {

    // Get the input value
    let taskInput = document.getElementById("task-name");
    let task = taskInput.value.trim();

    if (task !== "") {

        // Add task to array
        myTasks.push(task);

        // Create a list item
        let listItem = document.createElement("li");

        // Add task text
        listItem.textContent = task;

        // Display task
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = "";

    } else {
        alert("Please enter a task.");
    }
});