
console.log('in child_process');


process.send('mes from child');

process.on('message', function (mes) {
  console.log(mes);
  console.log('get message - in childProcess');
});
