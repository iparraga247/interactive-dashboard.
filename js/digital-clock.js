
/* Module 8: Digital Clock and Date */

function updateClock() {

    // Get the current date and time
    let currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Set the AM or PM session
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert to 12-hour time
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    // Add leading zeros
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Create the time and date strings
    let time = hours + ":" + minutes + ":" + seconds + " " + session;
    let date = currentDate.toLocaleDateString();

    // Display the time and date
    document.getElementById("clock-face").innerHTML = time;
    document.getElementById("calendar-date").innerHTML = date;
}

// Update the clock every second
updateClock();
setInterval(updateClock, 1000);
