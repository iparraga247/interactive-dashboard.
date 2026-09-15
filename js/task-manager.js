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