var barbarian = new MilitaryResource(title = "Barbarian", health = 48, mana = 25);
var demon = new MilitaryResource(title = "Demon", health = 120, mana = 98);
var diablo = new MilitaryResource(title = "Diablo", health = 120, mana = 98);
var fallenShaman = new MilitaryResource(title = "Fallen Shaman", health = 120, mana = 98);
var fallen = new MilitaryResource(title = "Fallen", health = 120, mana = 98);
var beast = new MilitaryResource(title = "Beast", health = 120, mana = 98);
var goatman = new MilitaryResource(title = "Goatman", health = 120, mana = 98);
var skeletonMage = new MilitaryResource(title = "Skeleton Mage", health = 120, mana = 98);
var sorceress = new MilitaryResource(title = "Sorceress", health = 120, mana = 98);
var wraith = new MilitaryResource(title = "Wraith", health = 120, mana = 98);

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