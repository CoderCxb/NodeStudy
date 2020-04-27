console.log('同步代码开始')
// memoryUsage用于获取Node应用程序的进程的内存使用量。
// rss：整数 表示运行Node程序的内存消耗量，单位是字节。
// heapToal: 整数 V8所分配的内存量，单位是字节。
// heapUsed: 整数 V8的内存消耗量，单位是字节。1
// external: 整数 V8管理的绑定到 Javascript 的 C++ 对象的内存使用情况。
let memoryUsage=process.memoryUsage();
console.log(memoryUsage);

// nextTick:指定一个函数在同步方法执行完毕后被调用,在异步方法前，这是和setTimeout不同的地方
// nextTick也是异步代码 并且是微任务 但是它的优先级比promise高 所以会先执行
process.nextTick(function(){
    console.log('使用nextTick的函数')
})
async function test(){
    //async中的第一个await或者同步代码执行的时间和调用函数的位置保持一致
    await console.log('异步代码1')
    await console.log('异步代码2')
    await console.log('异步代码3')
}

test().then(function(){
    console.log('then中代码')
});


setTimeout(function(){
    console.log('setTimeout中的代码')
},0)
console.log('同步代码结束')

//  abort方法用于向程序的进程发送SIGABRT信号，使程序异常终止，并产生一个核心文件。不接收参数
// process.abort()

console.log(process.cwd())

// chdir  改变程序使用的当前目录
process.chdir('../')
// cwd 返回当前程序运行的目录,也就是运行node命令的目录层次 
console.log(process.cwd())


// 直接退出Node程序
// process.exit()

// 顾名思义 杀死进程，也就是关闭指定进程 根据进程id 也就是pid
try{
    process.kill('7952')
}catch(error){

}


setTimeout(function(){
    console.log('程序运行到现在所花的时间'+process.uptime())
},5000)

let time=process.hrtime();
setTimeout(function(){},1000);
console.log('使用proce.hrtime()计时:'+process.hrtime(time))

// 使用process.on('uncaughtException',function(){}
process.on('uncaughtException',function(){
    console.log("作用：用于捕获进程中未被捕获的异常，以免程序异常关闭")
})
// 原本使用CTRL+c可以提前终止程序 加了这个以后不行 CTRL+c向程序发送SIGINT信号
process.on('SIGINT',function(){
    console.log('收到SIGINT信号')
})