function numberIteration() {
  /*
  for (var i = 1; i < 10; i++) {
   if (!(i % 2)) break;
   console.log(i);
  }
  */

  do {
    var i = 1;
    if (i < 10) console.log(i);
    i++;
  } while (i % 2);

}
task1.addEventListener("click", numberIteration);

function cycleContinue() {
  /*
  for (var i = 1; i < 10; i++) {
   if (i % 2) continue;
   console.log(i);
  }
  */

  var i = 1;
  while (i < 10) {
    if (!(i % 2)) console.log(i);
    i++;
  }

}
task2.addEventListener("click", cycleContinue);

function guessTheNumber() {
  do {
    var randomNum = Math.floor(Math.random() * 5 + 1);
    var yourNum = +prompt("Угадай число от 1 до 5");
    
    if (yourNum === randomNum) {
      alert(`Рандомное число было ${randomNum}! Ты угадал!`);
      break;
    } else if (yourNum === 0) {
      break;
    } else {
      alert(`Не угадал! Рандомное число было ${randomNum}.`);
    }
  } while (yourNum !== randomNum || yourNum !== 0);

  
}
task3.addEventListener("click", guessTheNumber);

function multipleNumber() {
  var enterMultipleNum = prompt("Введите значение, кратное которому будут выводиться числа");
  var amountOfNums = prompt("Введите количество чисел");
  for (var i = 0; i <= amountOfNums; i++) {
    if (!(i % enterMultipleNum)) {
      console.log(i)
    }
  }
}
task4.addEventListener("click", multipleNumber);