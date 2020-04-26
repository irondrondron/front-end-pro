var http = require('http');
var data = require("./data")

var arrayOfUsers = data.map(function(user) {
  return user.name;
});

const hostname = 'localhost';
const port = 8080;

var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('' + arrayOfUsers);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});