var MilitaryResource = (function () {
  function MilitaryResource(title, health, mana) {
    this.title = title;
    this.health = health;
    this.maxHealth = health;
    this.mana = mana;
    this.maxMana = mana;
    this.elements = createMilitaryResource();
    this.initListeners();

    this.elements.healthValue.innerText = `${this.health}/${this.maxHealth}`;
    this.elements.manaValue.innerText = `${this.mana}/${this.maxMana}`;
    this.elements.title.innerText = `${this.title}`;
    this.elements.avatarImage.src = this.setPathToImage();
  };

  MilitaryResource.prototype.setPathToImage = function() {
    var pathToImage;
    switch (title) {
      case 'Barbarian':
        pathToImage = 'img/Barbarian.gif';
        break;
      case 'Demon':
        pathToImage = 'img/Demon.gif';
        break;
      case 'Diablo':
        pathToImage = 'img/Diablo.gif';
        break;
      case 'Fallen Shaman':
        pathToImage = 'img/Fallen Shaman.gif';
        break;
      case 'Fallen':
        pathToImage = 'img/Fallen.gif';
        break;
      case 'Beast':
        pathToImage = 'img/Beast.gif';
        break;
      case 'Goatman':
        pathToImage = 'img/Goatman.gif';
        break;
      case 'Skeleton Mage':
        pathToImage = 'img/Skeleton Mage.gif';
        break;
      case 'Sorceress':
        pathToImage = 'img/Sorceress.gif';
        break;
      case 'Wraith':
        pathToImage = 'img/Wraith.gif';
        break;
    }
    return pathToImage;
  }

  MilitaryResource.prototype.initListeners = function () {
    var self = this;
    this.elements.health.addEventListener("click", function () {
      self.damage(10);
      self.repaint();
    });

    this.elements.mana.addEventListener("click", function () {
      self.attack(10);
      self.repaint();
    });
  }

  MilitaryResource.prototype.damage = function (by) {
    this.health = this.health - this.maxHealth * (by / 100);
  };

  MilitaryResource.prototype.attack = function (by) {
    this.mana = this.mana - this.maxMana * (by / 100);
  };

  MilitaryResource.prototype.restore = function () {
    this.health = this.maxHealth;
    this.mana = this.maxMana;
    this.repaint();
  };

  MilitaryResource.prototype.repaint = function () {
    if(this.elements.healthBar.style.width <= "10%") {
    this.elements.el.classList.add("delete");
    var self = this;
    setTimeout(function() {
      self.elements.el.remove();
    }, 900);
    }
    if(this.elements.manaBar.style.width <= "10%") {
      this.elements.el.classList.add("inactive");
    }
    this.elements.healthBar.style.width = `${calculatePercentFrom(this.health, this.maxHealth)}%`;
    this.elements.healthValue.innerText = `${Math.round(this.health)}/${this.maxHealth}`;
    this.elements.title.innerText = `${this.title}`;
    this.elements.manaBar.style.width = `${calculatePercentFrom(this.mana, this.maxMana)}%`;
    this.elements.manaValue.innerText = `${Math.round(this.mana)}/${this.maxMana}`;
  };

  MilitaryResource.prototype.render = function (parent) {
    parent.appendChild(this.elements.el);
  };
  
  return MilitaryResource;
})();