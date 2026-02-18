const calendarFunction = () => {
    const container = document.createElement("div");

    const week = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];

    const weekDay = new Date().getDay();
    const currentTime = new Date().toLocaleTimeString();
    const hour = new Date().getHours();

    const currentDate = new Date();
    const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
    const timeRemaining = newYearDate - currentDate;
    const remainingDaysNewYear = Math.floor(timeRemaining / (1000 * 3600 * 24));

    let greeting = document.createElement("h1");
    let days = document.createElement("p");
    let time = document.createElement("p");
    let newYear = document.createElement("p");

    if (hour >= 23 || hour < 6) {
        greeting.textContent = "Доброй ночи!";
    }
    if (hour >= 6 && hour < 12) {
        greeting.textContent = "Доброе утро!";
    }
    if (hour >= 12 && hour < 18) {
        greeting.textContent = "Добрый день!";
    }
    if (hour >= 18 && hour < 23) {
        greeting.textContent = "Добрый вечер!";
    }

    days.textContent = `Сегодня: ${week[weekDay]}`;
    time.textContent = `Текущее время: ${currentTime}`;
    newYear.textContent = `До нового года осталось: ${remainingDaysNewYear} дней`;

    container.append(greeting, days, time, newYear);

    return container;
};

document.body.append(calendarFunction());
