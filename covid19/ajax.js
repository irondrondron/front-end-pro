function request(method, url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
  
    xhr.open(method, url);
    xhr.addEventListener('load', function () {
        resolve(JSON.parse(this.responseText))
    });
    xhr.addEventListener('error', reject);
    xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "9b4cd80a8emsh009c6e5e4d00bf6p196305jsn8028d8d6647f");
  
    xhr.send();
    return xhr;
  });
}

function get(url) {
  return request('GET', url);
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
      var context = this,
          args = arguments;
      var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
}