function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');

    // Validate and parse the input date string
    function parseDate(dateStr) {
        const datePattern = /^\d{12}$/; // MMDDYYYYHHMM
        if (!datePattern.test(dateStr)) {
            console.error("Invalid date format. Use MMDDYYYYHHMM.");
            countdownElement.textContent = "Invalid date format. Please use MMDDYYYYHHMM.";
            return null;
        }

        const month = parseInt(dateStr.slice(0, 2), 10) - 1; // Months are 0-based in JS Date
        const day = parseInt(dateStr.slice(2, 4), 10);
        const year = parseInt(dateStr.slice(4, 8), 10);
        const hour = parseInt(dateStr.slice(8, 10), 10);
        const minute = parseInt(dateStr.slice(10, 12), 10);

        return new Date(year, month, day, hour, minute);
    }

    const endTime = parseDate(targetDate);
    if (!endTime) return; // Stop if the date is invalid

    function updateCountdown() {
        const now = new Date();

        // Calculate the time difference
        const timeLeft = endTime.getTime() - now.getTime();

        if (timeLeft <= 0) {
            countdownElement.textContent = '<3';
            clearInterval(interval);
            return;
        }

        // Time calculations
        const totalDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the countdown text
        countdownElement.textContent = `Days Until I DOs: ${totalDays}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
}

// Input target date in MMDDYYYYHHMM format
startCountdown('120720240930'); // Example: December 7, 2024, 15:30 local time
