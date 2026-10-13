// Calculates and displays the user's weekly task goal.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    const weeklyTaskGoal = dailyGoal * 5;
    const totalGoal = weeklyTaskGoal + bonusTasks;

    const output =
        `${userName}, your weekly task goal is ${weeklyTaskGoal} tasks. ` +
        `With ${bonusTasks} bonus tasks, your total weekly goal is ${totalGoal} tasks.`;

    document.getElementById("goal-message").innerHTML = output;
}

// Runs the weekly goal calculation when the button is clicked.
document.getElementById("goal-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const userName = document.getElementById("user-name").value;
    const dailyGoal = Number(document.getElementById("daily-goal").value);
    const bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
}); 


// Array to store tasks
let myTasks = [];

// Create the unordered list
let taskList = document.getElementById("task-list");
let userTasks = document.createElement("ul");

// Give the list an ID
userTasks.id = "user-tasks";

// Add the list to the task-list div
taskList.appendChild(userTasks);

// Get the Add Task button
let addTaskButton = document.getElementById("add-task");

// Get the task input
let taskInput = document.getElementById("task-name");

// Add a click event listener
addTaskButton.addEventListener("click", function() {

    // Get the task name
    let taskName = taskInput.value.trim();

    // Check that the input is not empty
    if (taskName !== "") {

        // Store the task in the array
        myTasks.push(taskName);

        // Create a list item
        let listItem = document.createElement("li");

        // Add the task text
        listItem.textContent = taskName;

        // Add the item to the unordered list
        userTasks.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
});
