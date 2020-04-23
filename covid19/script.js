var cards = document.getElementById("cards");
var form = document.getElementById("filter-form");

function requestCountries() {
  return get("https://covid-193.p.rapidapi.com/statistics/").then(function (
    data
  ) {
    return data.response.map((e) => e.country.toLowerCase());
  });
}

function requestStatistics(filter) {
  return get(
    "https://covid-193.p.rapidapi.com/statistics/?" + serialize(filter)
  ).then(function (data) {
    return data.response.map(function (card) {
      var c = new CountryCard(
        card.country,
        card.cases.new,
        card.cases.active,
        card.cases.critical,
        card.cases.recovered,
        card.cases.total,
        card.deaths.new,
        card.deaths.total,
        card.tests.total
      );
      return c;
    });
  });
}

form.elements.countryName.addEventListener(
  "input",
  debounce(function () {
    if (this.value !== "") {
      var self = this;
      requestCountries().then(function (arrayOfCountries) {
        var countriesStartingWith = arrayOfCountries.filter((el) =>
          el.startsWith(`${self.value}`, 0)
        );
        cards.innerHTML = "";
        for (let i = 0; i < countriesStartingWith.length; i++) {
          requestStatistics({
            country: countriesStartingWith[i],
          }).then(function (arrayOfCards) {
            arrayOfCards.forEach(function (card) {
              card.render(cards);
            });
          });
        }
      });
    } else {
      cards.innerHTML = "";
    }
  }, 200)
);
