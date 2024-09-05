function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');

    function parseDate(dateStr) {
        let month = parseInt(dateStr.slice(0, 2), 10);
        let day = parseInt(dateStr.slice(2, 4), 10);
        let year = parseInt(dateStr.slice(4, 8), 10);
        let hour = parseInt(dateStr.slice(8, 10), 10);

        // Create the date in local time zone
        return new Date(year, month - 1, day, hour);
    }

    let endTime = parseDate(targetDate);

    function updateCountdown() {
        let now = new Date();

        // Calculate the difference in milliseconds
        let timeLeft = endTime.getTime() - now.getTime();

        if (timeLeft <= 0) {
            countdownElement.textContent = '<3';
            clearInterval(interval);
            return;
        }

        // Calculate the difference in months, days, hours, minutes, and seconds
        let totalDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let totalMonths = Math.floor(totalDays / 30); // Approximate months
        let days = totalDays % 30;
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `Days Until I Do's: ${totalMonths}mo ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    let interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
}

// Input target date in MMDDYYYYHH format
startCountdown('1207202415'); // Example: December 7, 2024, 13:00 local time
