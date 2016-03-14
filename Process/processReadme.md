# process


## 系统模块 `os`
`os api`


## 系统模块 `childProcess`

创建子进程:  
1. `.spawn()`: 启动一个子进程来执行命令
2. `.exec()`: 启动一个子进程来执行命令, 与 `.spawn()`不同,它有一个回调函数获知子进程的状况
3. `.execFile()`: 启动一个子进程来执行可执行文件
4. `.fork()`: 与`.spawn()`类似, 不同点在于它 __只__ 创建Node的子进程只需要执行JavaScript文件模块即可


## 父子进程之间的通信

- psObject.send(mes, handler)
- psObject.on('message')


## 自动重启
