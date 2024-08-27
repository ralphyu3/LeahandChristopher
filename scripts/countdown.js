function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');

    function parseDate(dateStr) {
        let month = parseInt(dateStr.slice(0, 2), 10);
        let day = parseInt(dateStr.slice(2, 4), 10);
        let year = parseInt(dateStr.slice(4, 8), 10);
        return new Date(year, month - 1, day); // Months are 0-based in JavaScript Date
    }

    let endTime = parseDate(targetDate);

    function updateCountdown() {
        let now = new Date();
        let currentYear = now.getFullYear();
        let currentMonth = now.getMonth();
        let currentDay = now.getDate();

        let endYear = endTime.getFullYear();
        let endMonth = endTime.getMonth();
        let endDay = endTime.getDate();

        // Calculate the difference in years, months, and days
        let months = (endYear - currentYear) * 12 + (endMonth - currentMonth);
        let days = endDay - currentDay;

        // Adjust if the current day is greater than the target day
        if (days < 0) {
            months--;
            let previousMonth = new Date(endYear, endMonth, 0).getDate();
            days += previousMonth;
        }

        // Calculate time components
        let timeLeft = endTime.getTime() - now.getTime();
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (timeLeft <= 0) {
            countdownElement.textContent = 'Time’s up!';
            clearInterval(interval);
            return;
        }

        countdownElement.textContent = `Wedding Countdown: ${months}mo ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    let interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
}

// Input target date in MMDDYYYY format
startCountdown('12072024'); // Example: December 7, 2024
