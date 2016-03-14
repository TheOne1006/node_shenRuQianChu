var cp = require('child_process');
var c1 = cp.fork('child_http.js');
var c2 = cp.fork('child_http.js');

var server = require('net').createServer();

server.listen(3002, function () {
  c1.send('server', server);
  c2.send('server', server);
  server.close();
});
