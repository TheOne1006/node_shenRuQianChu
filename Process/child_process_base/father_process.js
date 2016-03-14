var fork = require('child_process').fork;


var childProcess = fork('./child_process.js');

childProcess.on('message', function (mes) {
  console.log(mes);
  console.log('get message - in faterProcess');
});

childProcess.send('fater mes to child');
