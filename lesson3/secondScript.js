/*
Написать опросник для поступления на работу. 
К примеру, захардкоженные ( hardcode - те значения, которые
устанавливаются вами в коде самостоятельно )
условия требуют, чтобы человек был не младше 30 лет, 
имел опыт в данной области больше 3-х лет и т.п. 
Выдать результат: подходит человек на должность, или нет.
*/

let age = prompt("Сколько вам лет?"),
    frontEndExperience = confirm("Больше 3-х лет во Front-end?"),
    threeLibExperience = confirm("Имеется опыт работы с three.js?"),
    speakEnglish = confirm("Разговариваете на английском?");

function goodResult() {
  alert("Вы нам подходите :)");
}

function badResult() {
  alert("Извините, но вы на данный момент нам не подходите :(");
}

function interview() {
  if (age >= 30 && frontEndExperience === true && threeLibExperience === true && speakEnglish === true) {
    goodResult();
  } else {
    badResult();
  }
}

interview();