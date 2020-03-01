/* Разделить задачу с угадыванием числа на функции. 
Первая функция - циклический запуск запроса и проверка на завершенность.
Вторая функция - запрос и проверка на соответствие со сгенерированным числом
*/


function cycle() {
  while (true) {
    var randomNum = Math.floor(Math.random() * 5 + 1);
    var result = checkValue(randomNum);

    if (result) {
      break;
    }

  }
}

function checkValue(randomNum) {
  do {
    var yourNum = prompt("Угадай число от 1 до 5");
    if (+yourNum === randomNum) {
      alert(`Рандомное число было ${randomNum}! Ты угадал!`);
      return true;
    } else if (yourNum !== null) {
      alert(`Не угадал! Рандомное число было ${randomNum}.`);
      return false;
    } else {
      return true;
    }
  } while (+yourNum === randomNum || yourNum === null)
}

cycle()
