const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

// Get the current year
const currentYear = new Date().getFullYear();

// Set the target year to next year
let targetYear = currentYear + 1;

// Update the content of the div with the target year
document.querySelector(".year").textContent = targetYear;

// Set the target date for the countdown
let newYearTime = new Date(`January 1, ${targetYear} 00:00:00`).getTime();

// Start the countdown
updateCountdown();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    // Check if the countdown has reached zero or gone negative
    if (gap < 0) {
        clearInterval(countdownInterval); // Stop the countdown
        document.querySelector(".countdown").innerHTML = '<div class="new-year-message">Happy New Year!</div>';

        // Stop the animation and restart the countdown after 30 minutes
        setTimeout(() => {
            document.querySelector(".new-year-message").style.animation = "none"; // Stop the animation
            restartCountdown(); // Restart the countdown for the next year
        },  1800000); // 1800000ms = 30 minutes
        return;
    }

    // Time calculations
    const second = 1000; // 1 second = 1000ms
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    // Display the countdown values (formatted as two digits)
    dayEl.innerText = formatTime(d);
    hourEl.innerText = formatTime(h);
    minuteEl.innerText = formatTime(m);
    secondEl.innerText = formatTime(s);
}

// Helper function to format time values as two digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Function to restart the countdown
function restartCountdown() {
    // Update the target year to the next year
    targetYear += 1;
    document.querySelector(".year").textContent = targetYear;

    // Set the new target date
    newYearTime = new Date(`January 1, ${targetYear} 00:00:00`).getTime();

    // Restart the countdown
    countdownInterval = setInterval(updateCountdown, 1000);
}

// Update the countdown every second
let countdownInterval = setInterval(updateCountdown, 1000);

// setup date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());
