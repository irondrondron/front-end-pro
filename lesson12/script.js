// // Реализовать наследования следующей цепочки:
// // Животное -> Млекопитающее -> Енот
// // Между этими прослойками можно создать еще несколько своих =)

// // Прототип животного должен иметь 2 метода передвижения (пр. прыжок, бег) и свойство пол
// // Прототип млекопитающего должен иметь метод, который, в зависимости от пола дает молоко.
// // Прототип енота должен уметь воровать =)

// [1] Constructor of Animals. first level
function Animal(sex) {
  this.sex = sex;
  this.toRun();
  this.toJump();
}
Animal.prototype.toRun = function () {
  return this.run = true;
}
Animal.prototype.toJump = function () {
  return this.jump = true;
}
// [2]Second level
// [2.1]Constructor of Mammals
function Mammal(sex) {
  Animal.call(this, sex);
  this.sex = sex;
  this.isAnimalProduceMilk();
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.isAnimalProduceMilk = function () {
  if (this.sex === "f") {
    return this.produceMilk = true;
  }
  return this.produceMilk = false;
}

// [2.2]Constructor of Amphibia
function Amphibia() {
  Animal.call(this);
  this.toSwim();
}

Amphibia.prototype = Object.create(Animal.prototype);
Amphibia.prototype.constructor = Amphibia;

Amphibia.prototype.toSwim = function () {
  return this.swim = true;
}

// Third level
// [2.1.1]Animal=>Mammal=>Raccoon
function Raccoon(sex) {
  Mammal.call(this, sex);
  this.sex = sex;
  this.toSteal();
}

Raccoon.prototype = Object.create(Mammal.prototype);
Raccoon.prototype.constructor = Raccoon;

Raccoon.prototype.toSteal = function () {
  return this.steal = "Hell yeah!!! 😈"
}

// [2.2.1]Animal=>Amphibia=>Frog
function Frog(name, sex) {
  Amphibia.call(this);
  this.sex = sex;
  this.name = name;
}

Frog.prototype = Object.create(Amphibia.prototype);
Frog.prototype.constructor = Frog;


var myAnimal = [new Raccoon("f"), new Raccoon("m"), new Frog("Pepe", "m")];

console.log(myAnimal[0], myAnimal[1], myAnimal[2]);
