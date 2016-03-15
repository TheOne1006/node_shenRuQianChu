var dgram = require('dgram');

var mes =  new Buffer('深入浅出Nodejs');
var client = dgram.createSocket('udp4');

client.send(mes, 0, mes.length, 3006, 'localhost', function (err, bytes) {
  client.close();
});
