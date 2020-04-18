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

MilitaryResource.prototype.initListeners = function () {
  var self = this;
  this.elements.health.addEventListener("click", function () {
    self.damage(10);
    self.repaint();
  });

  this.elements.mana.addEventListener("click", function () {
    self.manaLost(10);
    self.repaint();
  });
}

MilitaryResource.prototype.damage = function (by) {
  this.health = this.health - this.maxHealth * (by / 100);
};

MilitaryResource.prototype.manaLost = function (by) {
  this.mana = this.mana - this.maxMana * (by / 100);
};

MilitaryResource.prototype.restore = function () {
  this.health = this.maxHealth;
  this.mana = this.maxMana;
  this.repaint();
};

MilitaryResource.prototype.repaint = function () {
  if (this.health < 1) {
    this.elements.el.classList.add("delete");
    var self = this;
    setTimeout(function () {
      self.elements.el.remove();
    }, 900);
  }
  if (this.mana < 1) {
    this.elements.el.classList.add("inactive");
  }
  console.log(this.health);
  
  this.elements.healthBar.style.width = `${calculatePercentFrom(this.health, this.maxHealth)}%`;
  this.elements.healthValue.innerText = `${Math.round(this.health)}/${this.maxHealth}`;
  this.elements.title.innerText = `${this.title}`;
  this.elements.manaBar.style.width = `${calculatePercentFrom(this.mana, this.maxMana)}%`;
  this.elements.manaValue.innerText = `${Math.round(this.mana)}/${this.maxMana}`;
};

MilitaryResource.prototype.render = function (parent) {
  parent.appendChild(this.elements.el);
};