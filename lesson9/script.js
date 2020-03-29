function MilitaryResource(type, health, distance) {
  this.type = type;
  this.health = health;
  this.maxHealth = health;
  this.distance = distance;
  this.maxDistance = distance;
}

MilitaryResource.prototype.isReadyToMove = function () {
  return this.distance > 50 ? true : false;
}

MilitaryResource.prototype.isReadyToFight = function () {
  return this.health > 0 ? true : false;
}

MilitaryResource.prototype.restore = function () {
  this.health = this.maxHealth;
  this.distance = this.maxDistance;
  return this.health, this.distance;
}

MilitaryResource.prototype.clone = function () {
  return Object.assign({}, this);
}

function Squad(defaultResources) {
  this.squad = [];
  if (defaultResources) this.combineResources(defaultResources);
}

Squad.prototype.isReadyToMove = function () {
  var arrayOfAllDistance = [];
  for (i = 0; i < this.squad.length; i++) {
    arrayOfAllDistance.push(this.squad[i].distance);
  }

  function isDistanceHigher(number) {
    return number > 50;
  }
  return arrayOfAllDistance.every(isDistanceHigher);
};

Squad.prototype.isReadyToFight = function () {
  var arrayOfAllHealth = [];
  for (i = 0; i < this.squad.length; i++) {
    arrayOfAllHealth.push(this.squad[i].health);
  }

  function isHealthHigher(number) {
    return number > 1;
  }

  return arrayOfAllHealth.every(isHealthHigher);
};

Squad.prototype.restore = function () {
  for (i = 0; i < this.squad.length; i++) {
    this.squad[i].health = this.squad[i].maxHealth;
    this.squad[i].distance = this.squad[i].maxDistance;
    return this.squad[i].health, this.squad[i].distance;
  }
};

Squad.prototype.getReadyToMoveResources = function () {
  var arrayOfReadyToMoveResources = [];
    for (i = 0; i < this.squad.length; i++) {
      if(this.squad[i].distance > 50) {
        arrayOfReadyToMoveResources.push(this.squad[i]);
      }
    }
  return arrayOfReadyToMoveResources;
};

Squad.prototype.combineResources = function (defaultResources) {
  if (Array.isArray(defaultResources)) {
    for (i = 0; i < defaultResources.length; i++) {
      this.squad.push(defaultResources[i]);
    }
  }
};

Squad.prototype.cloneResource = function() {
  var indexOfResourceToClone = +prompt("Введите индекс ресурса, который нужно склонировать");
  return Object.assign({}, this.squad[indexOfResourceToClone]);
};

// my resources and squad

var defaultResources = [
  new MilitaryResource(type = "Warrior", health = 70, distance = 80),
  new MilitaryResource(type = "Archer", health = 60, distance = 70),
  new MilitaryResource(type = "Knight", health = 100, distance = 100),
];

var mySquad = new Squad(defaultResources);
