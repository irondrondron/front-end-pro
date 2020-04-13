var barbarian = new MilitaryResource(title = "Barbarian", health = 48, mana = 25);
var demon = new MilitaryResource(title = "Demon", health = 120, mana = 98);
var diablo = new MilitaryResource(title = "Diablo", health = 298, mana = 400);
var fallenShaman = new MilitaryResource(title = "Fallen Shaman", health = 20, mana = 35);
var fallen = new MilitaryResource(title = "Fallen", health = 6, mana = 14);
var beast = new MilitaryResource(title = "Beast", health = 60, mana = 28);
var goatman = new MilitaryResource(title = "Goatman", health = 56, mana = 38);
var skeletonMage = new MilitaryResource(title = "Skeleton Mage", health = 20, mana = 54);
var sorceress = new MilitaryResource(title = "Sorceress", health = 25, mana = 70);
var wraith = new MilitaryResource(title = "Wraith", health = 38, mana = 110);

var cards = document.getElementById('cards');

barbarian.render(cards);
demon.render(cards);
diablo.render(cards);
fallenShaman.render(cards);
fallen.render(cards);
beast.render(cards);
goatman.render(cards);
skeletonMage.render(cards);
sorceress.render(cards);
wraith.render(cards);