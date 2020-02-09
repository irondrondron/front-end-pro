// https://codepen.io/irondrondron/pen/MWwYZpZ?editors=0011


/*
Запросить у пользователя год рождения. Если возраст больше
18 лет - сообщить о доступе к сервису, в противном случае - о запрете.
Если пользователю меньше 12 - посоветовать другой сервис. 
Если пользователь ввел не число - сообщить ему об этом.
Записать при помощи if/else и тернарного оператора.
*/



let now = new Date(),
    year = now.getFullYear(),
    ageRequest = +prompt("Введите год вашего рождения в формате ХХХХ"),
    age = year - ageRequest;

console.log(year);
console.log(ageRequest);
console.log(age);

function checkValue() {
  Number.isInteger(age) ? checkAge() : alert("Вы ввели не число. Попробуйте еще раз.");
}
function checkAge() {
  if (age >= 18 && ageRequest !== 0) {
    alert("Сервис доступен");
  } else if (age < 12) {
    alert("Воспользуйтесь другим сервисом");
  } else {
    alert("В доступе отказано");
  }
}

checkValue();