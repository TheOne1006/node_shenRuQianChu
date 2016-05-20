var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

console.log('salt: %s', salt);

var hash = bcrypt.hashSync("B4c0/\/", salt);

console.log('hash: %s', hash);
// Store hash in your password DB.


// Load hash from your password DB.
console.log('comparse result:', bcrypt.compareSync("B4c0/\/", hash) ); // true
console.log('comparse result:', bcrypt.compareSync("not_bacon", hash)); // false
