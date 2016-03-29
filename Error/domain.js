var domain = require('domain');
var d = domain.create();

d.on('error', function (err) {
  console.log(err);
});

function callErr() {
  setTimeout(function () {
    var s = wrong = true;
    console.log(someSth);
  },10);
}

d.run(function () {
  callErr();
});
