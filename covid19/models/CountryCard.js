function CountryCard(countryName, newCases, activeCases, criticalCases, recoveredCases, totalCases, newDeaths, totalDeaths, totalTests) {
  this.countryName = countryName;
  this.newCases = newCases;
  this.activeCases = activeCases;
  this.criticalCases = criticalCases;
  this.recoveredCases = recoveredCases;
  this.totalCases = totalCases;
  this.newDeaths = newDeaths;
  this.totalDeaths = totalDeaths;
  this.totalTests = totalTests;
  this.elements = createCountryCard();
  this.repaint();
}

CountryCard.prototype.repaint = function () {
  this.elements.titleCases.innerText = `Cases`;
  this.elements.titleDeaths.innerText = `Deaths`;
  this.elements.titleTests.innerText = `Tests`;
  this.elements.countryName.innerText = `${this.countryName}`;
  this.elements.newCases.innerText = `New: ${this.newCases}`;
  this.elements.activeCases.innerText = `Active: ${this.activeCases}`;
  this.elements.criticalCases.innerText = `Critical: ${this.criticalCases}`;
  this.elements.recoveredCases.innerText = `Recovered: ${this.recoveredCases}`;
  this.elements.totalCases.innerText = `Total Cases: ${this.totalCases}`;
  this.elements.newDeaths.innerText = `New Deaths: ${this.newDeaths}`;
  this.elements.totalDeaths.innerText = `Total Deaths: ${this.totalDeaths}`;
  this.elements.totalTests.innerText = `Total Tests: ${this.totalTests === null ? "Unknown" : this.totalTests}`;
}

CountryCard.prototype.render = function (parent) {
  parent.appendChild(this.elements.el);
};