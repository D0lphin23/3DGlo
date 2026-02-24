function timer(deadline) {
    const timerDays = document.getElementById("timer-days");
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    let idTimeInterval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 3600 / 24);
        let hours = Math.floor((timeRemaining / 3600) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const formatedDate = (date) => {
        return date < 10 ? "0" + date : date;
    };

    const updateClock = () => {
        let { timeRemaining, days, hours, minutes, seconds } =
            getTimeRemaining();

        timerDays.textContent = formatedDate(days);
        timerHours.textContent = formatedDate(hours);
        timerMinutes.textContent = formatedDate(minutes);
        timerSeconds.textContent = formatedDate(seconds);

        if (timeRemaining <= 0) {
            timerDays.textContent = "00";
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";

            clearInterval(idTimeInterval);
        }
    };

    idTimeInterval = setInterval(updateClock, 1000);
}

export default timer;
