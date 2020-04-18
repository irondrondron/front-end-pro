function appendProperties(el, props) {
  var classes = props.classes;
  var style = props.style;
  delete props.classes;
  delete props.style;

  if (classes) {
    el.className = classes.join(' ');
  }

  if (style) {
    for (const key in style) {
      if (style.hasOwnProperty(key)) {
        const value = style[key];
        el.style[key] = value;
      }
    }
  }

  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      const value = props[key];
      el.setAttribute(key, value)
    }
  }
  return el;
}

function element(elementName, props, children) {
  var el = document.createElement(elementName);
  (children || []).forEach(function (childElement) {
    el.append(childElement);
  });
  return appendProperties(el, props || {});
}

function createCountryCard() {
  var titleCases = element('div', {
    classes: ['title']
  }),
  titleDeaths = element('div', {
    classes: ['title']
  }),
  titleTests = element('div', {
    classes: ['title']
  });
  var countryName = element('div', {
      classes: ['countryName']
    }),
    newCases = element('div', {
      classes: ['newCases']
    }),
    activeCases = element('div', {
      classes: ['activeCases']
    }),
    criticalCases = element('div', {
      classes: ['criticalCases']
    }),
    recoveredCases = element('div', {
      classes: ['recoveredCases']
    }),
    totalCases = element('div', {
      classes: ['totalCases']
    }),
    newDeaths = element('div', {
      classes: ['newDeaths']
    }),
    totalDeaths = element('div', {
      classes: ['totalDeaths']
    })
    totalTests = element('div', {
      classes: ['totalTests']
    });

  var cases = element('div', {
      classes: ['cases']
    }, [titleCases,newCases, activeCases,criticalCases,recoveredCases,totalCases]),
    deaths = element('div', {
      classes: ['deaths']
    }, [titleDeaths, newDeaths, totalDeaths]),
    tests = element('div', {
      classes: ['tests']
    }, [titleTests, totalTests]);
  var mainInfo = element('div', {
    classes: ['mainInfo grid']
  }, [cases, deaths, tests])
  var card = element('div', {
    classes: ['card grid']
  }, [countryName, mainInfo]);

  return {
    titleCases: titleCases,
    titleDeaths: titleDeaths,
    titleTests: titleTests,
    newCases: newCases,
    activeCases: activeCases,
    criticalCases: criticalCases,
    recoveredCases: recoveredCases,
    totalCases: totalCases,
    newDeaths: newDeaths,
    totalDeaths: totalDeaths,
    totalTests: totalTests,
    countryName: countryName,
    el: card
  };
}