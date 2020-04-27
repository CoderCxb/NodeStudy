// 注意点：通常JS使用的try...catch... 只能用来捕获同步方法中抛出的错误，异步方法中抛出的错误不能使用try...catch...捕获。
// 原因:因为try...catch中的代码是同步的 也就是说 当try中的代码执行完毕了，异步的代码都还没开始执行，所以就捕获不到这个异常了。
let fs=require('fs');
try{
    let data=fs.readFileSync('./index','utf8')
    console.log(data)
}catch(error){
    console.log("读取文件的过程中发生错误")
}


let http=require('http');
try{
    
    setTimeout(function(){
        run();  //不会被catch捕获 但是会被系统捕获,如果是同步的就会被catch捕获
    },0)
    let server=http.createServer(function(request,response){
    
    }).listen(666,'127.0.0.1');
    
    server.on('connection',function(){
        console.log('客户端连接服务器成功')
    })
}catch(error){
    console.log("创建服务器的过程中发生错误")
}

// 可以使用process.on('uncaughtException',callback)来对未捕获的进行处理
process.on('uncaughtException',function(){
    console.log('捕获未被捕获的异常')
})
