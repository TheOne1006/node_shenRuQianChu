# 错误 以及 错误处理

### uncaughtException 事件

1. 大多数,异步 I/O 操作(读/写本地文件,网络链接) 发生的错误是无法被 `try catch` 捕捉,会导致 `Node.js` 直接退出.
2. 如果Node.js 抛出一个 异常 没有被任何 `try catch` 捕捉到,会 __尝试__ 将这些错误 交给 `uncaughtException` 事件处理
3. 没有注册 `uncaughtException` 事件处理程序时,才会导致进程直接退出.
