function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');

    function parseDate(dateStr) {
        let month = parseInt(dateStr.slice(0, 2), 10);
        let day = parseInt(dateStr.slice(2, 4), 10);
        let year = parseInt(dateStr.slice(4, 8), 10);
        return new Date(year, month - 1, day); // Months are 0-based in JavaScript Date
    }

    let endTime = parseDate(targetDate).getTime();

    function updateCountdown() {
        let now = Date.now();
        let timeLeft = endTime - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = 'Time’s up!';
            clearInterval(interval);
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `Wedding Countdown ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    let interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
}

// Input target date in MMDDYYYY format
startCountdown('12072024'); // Example: August 30, 2024