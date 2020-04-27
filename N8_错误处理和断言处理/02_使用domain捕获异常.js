let http=require('http');
let domain=require('domain').create();
// domain.run(function(){
    // 可以使用domain.bind绑定回调函数，这样回调函数中发送错误也会被捕获，也可以使用intercept，区别是bind中的错误需要用throw抛出，但是intercept不用。
    let server=http.createServer(domain.bind(function(){
        console.log("创建服务器成功");
        })).listen(666,'127.0.0.1')
        server.on("connection",function(){
            console.log('客户端连接服务器成功')
        
    })
    domain.on('error',function(error){
        console.log('使用domain捕获异常%j',error)
     })
// })
