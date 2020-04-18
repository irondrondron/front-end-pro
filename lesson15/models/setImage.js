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