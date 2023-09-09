// JavaScript code to set the current day of the week and update UTC time every second
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Function to update the UTC time
function updateUTCTime() {
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.getTime();

    // Update the HTML elements with the data-testid attributes
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;
}

// Initial update and set up interval to update every second
updateUTCTime();
setInterval(updateUTCTime, 1); // Update every millisecond (1 millisecond)
