// Написать функцию, которая возвращает количество часов, прошедших с момента введенной даты.

function getTimezone() {
    var currentTime = new Date();
    var currentTimezoneOffsetInHours = currentTime.getTimezoneOffset() / 60;
    if (currentTimezoneOffsetInHours < 0) {
        return currentTimezoneOffsetInHours * (-1);
    } else {
        return currentTimezoneOffsetInHours;
    }
}

function timeInterval() {
    var startDate = prompt("Введите дату в формате YYYY-MM-DD");

    var ms = Date.parse(new Date()) - Date.parse(startDate),
        minutes = Math.floor(((ms / 1000 / 60)) % 60),
        hours = Math.floor(((ms / (1000 * 60 * 60)) + getTimezone()) % 24),
        days = Math.floor(ms / (1000 * 60 * 60 * 24));
        
    console.log(`С момента введенной даты прошло: ${days} day(s), ${hours} hour(s) and ${minutes} minute(s)`);
}

timeInterval();