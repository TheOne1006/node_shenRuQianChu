var str = '深入浅出 node';
var buf = new Buffer(str, 'utf-8');
console.log(buf);
// <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 20 6e 6f 64 65>



// length 属性

console.log( 'length:' + buf.length );


// 下标

console.log( '下标:' +  buf[0]);


// 构造

var buf2 = new Buffer(100);
console.log('buf2 length:'+ buf2.length);
console.log(buf2[10]); // 0-255 随机数
console.log(buf2);


// 赋值不在范围
console.log('--不在范围--');
var buf3 = new Buffer(10);

buf3[5] = 'string1';

console.log(buf3[5]);

buf3[2] = {};

console.log(buf3[2]);
