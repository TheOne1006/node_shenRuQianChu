# 错误 以及 错误处理

### uncaughtException 事件

1. 大多数,异步 I/O 操作(读/写本地文件,网络链接) 发生的错误是无法被 `try catch` 捕捉,会导致 `Node.js` 直接退出.
2. 如果Node.js 抛出一个 异常 没有被任何 `try catch` 捕捉到,会 __尝试__ 将这些错误 交给 `uncaughtException` 事件处理
3. 没有注册 `uncaughtException` 事件处理程序时,才会导致进程直接退出.


## 服务器异常
  - Node.js 异常的危害
  - 常见Node.js异常逻辑
  - 保证健壮性

### Node.js 异常的危害

1. Node.js 异常逻辑
2. 异常危害
  - 服务异常:如 内存泄露
  - 进程退出, 最致命

#### 异常详解

1. 变量异常
  - 未定义变量
  - 未包含对象
  - 变量类型错误
2. 函数异常
  - 未申明
  - 回调异常
  - 待回调函数同步返回: 以同步方法处理回调错误
  - 回调函数跑出错误
3. 调用异常
  - 对象与数组: 对下标进行检测
  - exports 与 module.exports: 区别
    1. exports 只能返回对象
    2. module.exports 能返回多种数据类型


## 健壮性方案

1. 常见的一些保护逻辑
2. 通用的 try catch
3. domain 深层保护


### 常见的一些保护逻辑

1. 变量申明
2. 调用前判断 - 对象属性调用前判断
  - `var getAttr = obj && obj.attr;`
3. 类型错误
  - `typeof`


### try catch

1. 一般的处理方法
  - 局限: 适用于同步方法

### domain
domain 模块









- - -
