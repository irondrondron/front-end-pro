let a = +prompt("Первое");
let b = +prompt("Второе");
let c = +prompt("Третье");

let average = (a + b + c) / 3;
alert(`Среднее арифметическое суммы чисел ${a}, ${b} и ${c} равно ${average}`);





let numbers = prompt("Введите числа через запятую. Например: 2,1,8,3");
let array = numbers.split(',');
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += parseInt(array[i]);

};
let averageNums = sum / array.length;
alert(`Среднее арифметическое: (${array.join(' + ')}) / ${array.length} = ${averageNums}`);
console.log(numbers);
console.log(sum);



let firstValue = prompt("Введите первое значение");
let secondValue = prompt("Введите второе значение");

console.log(firstValue === secondValue);
if (firstValue === secondValue) {
  alert("Значения равны");
} else {
  alert("Значения не равны");
};

console.log(typeof firstValue === typeof secondValue);
if (typeof firstValue === typeof secondValue) {
  alert("Типы равны");
} else {
  alert("Типы не равны");
};





let yourNum = +prompt("Угадай число от 1 до 3");
let randomNum = Math.floor(Math.random() * 3 + 1);
console.log(randomNum);
if (yourNum == randomNum) {
  alert(`Рандомное число было ${randomNum}! Ты круче всех гадалок! Возьми с полки пирожок.`)
} else {
  alert(`Не угадал! Рандомное число было ${randomNum}.`)
}