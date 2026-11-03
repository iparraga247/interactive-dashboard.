


/* Weekly Task Goal Calculator */

function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = "Hello " + userName +
        "! Your weekly task goal is " + weeklyGoal +
        " tasks. With your " + bonusTasks +
        " bonus tasks, your total goal is " + totalGoal + " tasks.";

    document.getElementById("goal-message").innerHTML = output;
}

document.getElementById("goal-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});
