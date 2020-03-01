// function createArray() {
//     var arr = [];
//     var transposedArr = [];
//     var numberOfAttemps = +prompt("Количество попыток");
//     for (var i = 0; i < numberOfAttemps; i++) {
//         arr = [];
//         for (var j = 0; j < 3; j++) {
//             arr.push([
//                 Math.floor(Math.random() * 3 + 1),
//                 Math.floor(Math.random() * 3 + 1),
//                 Math.floor(Math.random() * 3 + 1)
//             ]);
//         }
//         // Вывод массива массивов, заполненного значениями
//         console.log(arr);

//         // Транспонируем матрицу (строки переводим столбцы)
//         for (var k = 0; k < 3; k++) {
//             transposedArr[k] = [];
//             for (var l = 0; l < 3; l++) {
//                 transposedArr[k][l] = arr[l][k];
//             }
//         }
//         console.log(transposedArr);
//         // Значения в средней строке массива 3х3
//         var elem1 = transposedArr[1][0];
//         var elem2 = transposedArr[1][1];
//         var elem3 = transposedArr[1][2];

//         if (elem1 === elem2 && elem2 === elem3) {
//             console.log(`Элементы совпали: ${elem1} ${elem2} ${elem3}`);
//         } else {
//             console.log(`${elem1} ${elem2} ${elem3} Элементы не совпали :(`);
//         }
//     }
// }
// task1.addEventListener("click", createArray);


function randomWords() {
    var symbols = "abcdefghijklmnoprstuqwxyz";
    var splittedSymbols = symbols.split("");

    var amountOfWords = +prompt("Введите количество слов");
    var minLength = +prompt("Введите минимальное значение количества символов");
    var maxLength = +prompt("Введите максимальное значение количества символов");
    var arrayOfWords = {};

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (var i = 0; i < amountOfWords; i++) {
        var word = '';
        var lengthOfWord = random(minLength, maxLength);

        for (var j = 0; j < lengthOfWord; j++) {
            word += symbols[random(0, symbols.length - 1)];
        }

        if (arrayOfWords[lengthOfWord]) {
            arrayOfWords[lengthOfWord].push(word);
        } else {
            arrayOfWords[lengthOfWord] = [word];
        }
    }

    console.log(arrayOfWords)

    for (var key in arrayOfWords) {
        console.log(`You have ${arrayOfWords[key].length} words with length of ${key}`)
    }
}
task2.addEventListener("click", randomWords);