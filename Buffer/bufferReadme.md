# Buffer

Node中,应用需要处理大量二进制数据,JavaScript只有字符串无法满足这些需求,于是有了Buffer对象.

__Buffer对象__ :一个像Array对象,但主要用于操作字节.

## 模块结构

### 基础

1. Buffer 是一个经典的JavaScript与C++ _结合_ 的模块, 性能部分由C++实现, 非性能相关部分用JavaScript实现.
2. Buffer 所占用内存不是通过V8分配,属于 __堆外__ 内存.
3. Buffer 系统 __启动时已加载__ .

### Buffer 对象

1. 类似于数组,元素由16进制的两位数(即0-255的数值)
2. 不同编码的字符串占用元素个数各不同
  - 中文utf-8 占用三个元素
3. Buffer 受 Array 类型影响很大
  - length 属性
  - 通过下标访问元素 , 返回数值
  - 构造对象也非常像
4. 使用 `new Buffer( size)` , (size 字节大小)初始化后, 对象内元素都是 0-255 的随机数
5. 如果给元素赋值不是 0-255 的整数的情况.
  - 小数: 舍弃小数
  - 不满足0-255: +/- 255 直到满足范围
  - 非数值: 0
  - true : 1



demo 基础案例:  
```js
var str = '深入浅出 node';
var buf = new Buffer(str, 'utf-8');
console.log(buf);
// <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 20 6e 6f 64 65>
// 深 e6 b7 b1
// 入 e5 85 a5
// 浅 e6 b5 85
// 出 e5 87 ba
// [空] 20
// node 6e 6f 64 65

```


###  Buffer 内存分配

1. slab 分配机制
2. slab 三种状态
  - full: 完全分配
  - partial: 部分分配
  - empty: 没有被分配
3. Node 以 `8KB` 区分 Buffer 是大对象,还是小对象, (也就是说 每个slab的大小值是: `8KB`)
4. 分配小对象 (<8KB)
5. 分配大对象 (>8KB), `slowBuffer`


## Buffer 的转化

Buffer 对象可以与字符串之间相互转化.目前支持的字符串编码类型有:  

- ASCII
- UTF-8
- UTF-16LE/UCS-2
- Base64
- Binary
- Hex

### 字符串转Buffer

1. 字符串转Buffer对象主要通过构造函数完成
  - `new Buffer(str, [encoding])`, 默认UTF-8
  - 通过构造函数转化的Buffer对象, 只能存储一种编码类型
2. 一个Buffer 对象可以存储不同的编码类型的字符串转码值
  - buf.write(string [,offset] [,length] [,encoding])

### Buffer 转字符串

1. `.toString([encoding] [,start] [,end])` 默认encoding UTF-8

### Buffer不支持的编码类型

1. 判断编码类型是否支持
  - Buffer.isEncoding( encoding)
2. 其他类型的转换模块
  - iconv And iconv-lite


## Buffer 拼接

以下场景:
```js
var fs = require('fs');
var rs = fs.createReadStream('test.md');

var data = '';
rs.on('data', function(chunk) {
  data += chunk;
  // 隐藏 toString 操作
  // 等价于
  // data = data.toString() + chunk.toString();
  //　例如中文　则会造成截取错误
});

rs.on('end', function(chunk){
  console.log(data);
});
```
Q:
1. chunk 对象即是Buffer对象．
2. 问题容易出现流中有宽字节编码．


### setEncoding() 与　string_decoder()

读写流还可以 __设置编码__ 的方法　`readable.setEncoding()`.  
  - 该方法作用：　让data事件传递的对象不再是一个 Buffer,而是转码后的 字符串
  - 能解决大部分拼接问题，　但依然不能从根本上解决该问题

### 正确拼接Buffer `Buffer.concat`

正确的拼接方式　是利用一个数组，存储接收到所有Buffer片段并记录所有片段的总长度，然后调用　`Buffer.concat(chunks, size)`

1. 拼接方式
2. `.concat()` 实现方式

## Buffer 与性能

1. 网络I/O
2. 文件读取 `fs.createReadStream(path , opts)`
  - opts 设置　?






















- - -
