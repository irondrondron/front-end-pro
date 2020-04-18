var cards = document.getElementById("cards");
var form = document.getElementById("filter-form");
// var input = form.elements.countryName;

function requestCountries(filter, success) {
  get("https://covid-193.p.rapidapi.com/statistics/?" + serialize(filter), function (data) {
    var arrayOfCards = data.response.map(function (card) {
      var c = new CountryCard(card.country, card.cases.new, card.cases.active, card.cases.critical, card.cases.recovered,
        card.cases.total, card.deaths.new, card.deaths.total, card.tests.total)
      return c;
    });

    success(arrayOfCards);
  });
}

form.elements.countryName.addEventListener('input', debounce(function () {
  requestCountries({
      country: this.value
    },
    function (arrayOfCards) {
      cards.innerHTML = "";
      arrayOfCards.forEach(function (card) {
        card.render(cards);
      });
    });
}, 200));