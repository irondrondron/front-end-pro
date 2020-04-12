function appendProperties(el, props) {
  var classes = props.classes;
  var style = props.style;
  delete props.classes;
  delete props.style;

  if(classes) {
    el.className = classes.join(' ');
  }

  if(style) {
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
  (children || []).forEach(function(childElement) {
    el.append(childElement);
  });
  return appendProperties(el, props || {});
}

function createMilitaryResource() {
  var avatarImage = element('img');
  var healthValue = element('div', {
      classes: ['bar-title health-value']
    }),
    healthBar = element('div', {
      classes: ['health-bar bar'],
      style: {
        width: '100%'
      }
    }),
    manaValue = element('div', {
      classes: ['bar-title mana-value']
    }),
    manaBar = element('div', {
      classes: ['mana-bar bar'],
      style: {
        width: '100%'
      }
    }),
    avatarContainer = element('div', {
      classes: ['image-container']
    }, [avatarImage]);
  var health = element('div', {
      classes: ['health-wrap bar']
    }, [healthValue, healthBar]),
    mana = element('div', {
      classes: ['mana-wrap bar']
    }, [manaValue, manaBar]),
    title = element('div', {
      classes: ['title']
    }),
    avatar = element('div', {
      classes: ['image grid']
    }, [avatarContainer]);
  var card = element('div', {
    classes: ['card grid']
  }, [health, mana, title, avatar]);

  return {
    avatarImage: avatarImage,
    healthValue: healthValue,
    healthBar: healthBar,
    manaValue: manaValue,
    manaBar: manaBar,
    avatarContainer: avatarContainer,
    health: health,
    mana: mana,
    title: title,
    avatar: avatar,
    el: card
  };
}
