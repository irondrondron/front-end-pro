// Реализовать наследования следующей цепочки:
// Животное -> Млекопитающее -> Енот
// Между этими прослойками можно создать еще несколько своих =)

// Прототип животного должен иметь 2 метода передвижения (пр. прыжок, бег) и свойство пол
// Прототип млекопитающего должен иметь метод, который, в зависимости от пола дает молоко.
// Прототип енота должен уметь воровать =)
// Опираясь на домашнее задание к занятию
// переписать все конструкторы с использованием шаблона "модуль"

// [1] Constructor of Animals. first level
var Animal = (function () {
  function Animal(sex) {
    this.sex = sex;
    this.run = true;
    this.jump = true;
  }
  return Animal;
})();

// [2]Second level
// [2.1]Constructor of Mammals
var Mammal = (function (__super) {
  function Mammal(sex) {
    __super.call(this, sex);
    this.isAnimalProduceMilk();
  }

  Mammal.prototype = Object.create(__super.prototype);
  Mammal.prototype.constructor = Mammal;

  Mammal.prototype.isAnimalProduceMilk = function () {
    if (this.sex === "f") {
      return this.produceMilk = true;
    }
    return this.produceMilk = false;
  }
  return Mammal;
})(Animal);

// [2.2]Constructor of Amphibia
var Amphibia = (function (__super) {
  function Amphibia(sex) {
    __super.call(this, sex);
    this.swim = true;
  }

  Amphibia.prototype = Object.create(__super.prototype);
  Amphibia.prototype.constructor = Amphibia;

  return Amphibia;
})(Animal);

// Third level
// [2.1.1]Animal=>Mammal=>Raccoon
var Raccoon = (function (__super) {
  function Raccoon(sex) {
    __super.call(this, sex);
    this.steal = "Hell yeah!!! 😈"
  }

  Raccoon.prototype = Object.create(__super.prototype);
  Raccoon.prototype.constructor = Raccoon;

  return Raccoon;
})(Mammal);

// [2.2.1]Animal=>Amphibia=>Frog

var Frog = (function (__super) {
  function Frog(name, sex) {
    __super.call(this, sex);
    this.name = name;
  }

  Frog.prototype = Object.create(__super.prototype);
  Frog.prototype.constructor = Frog;

  return Frog;
})(Amphibia);