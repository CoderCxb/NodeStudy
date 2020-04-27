// TCP和UDP服务需导入net模块
let net=require('net');
let fs=require('fs');
let file=fs.createReadStream('./logo.png')
// 创建服务
// let server=net.createServer();
let server=new net.Server({
    // allowHalfOpen为真，服务器可以继续向客户端发送数据，false，无法继续向客户端发送数据。
    allowHalfOpen:false 
    //回调函数相当于 server.on('connection,function(){})，也就是客户端连接时触发的回调函数。
},function(socket){
    console.log("客户端连接服务器成功")
    // console.log(socket)
    //会等现存的连接断开的时候才关闭，浏览器的连接并不会马上断开，而是一段时间以后才会断开，具体观察浏览器的刷新按钮。
    // socket.setKeepAlive() 第一个参数为true时，启动keep-alive机制，每个一段时间发送验证包，对方一定时间内没用响应则认为连接断开，第二个参数为时间，单位毫秒。
    // socket.setKeepAlive(true)
    server.close()
})

// (port,host,等待队列中客户端连接的最大数量,callback)
server.listen(666,'127.0.0.1',10,function(){
    console.log("TCP服务器开启....")
    //获取服务器的地址对象，如host port IP协议类型,如IPV4

   //测试显示 server.address()只有在listen中才有值，在其他位置都是null
   console.log(server.address())

   //添加unref方法使得客户端连接被全部关闭时退出应用程序
//    server.unref()
   //阻止应用程序退出
//    server.ref()
})

// 当客户端连接时触发的事件
server.on("connection",function(socket){
    file.on('data',function(data){
        socket.write(data)
        // socket.end()
    
    })
    // 获取listener的最大数量
    console.log(server.getMaxListeners())
    // 获取连接的个数
    server.getConnections(function(error,count){
        console.log(count)
    })
    //设置最大连接数
    server.maxConnections=5;
    //向客户端写入数据
    // socket.write('我是服务器')
    // 设置写入数据的编码集
    // socket.setEncoding('utf8');
    // 客户端传送数据时触发的函数 参数为data 
    socket.on('data',function(data){
        // console.log(data.toString())
    })

    socket.on("end",function(){

    })
    socket.setKeepAlive(true,1000)
})

server.on('error',function(error){
    //当端口被占用时,error.code的值为EADDRINUSE
    if(error.code==='EADDRINUSE'){
        console.log("端口已被占用，请更换端口")
    }
})



// 当服务器关闭时，触发的事件
server.on('close',function(close_flag){
    //接收一个布尔类型的参数，若为真，则是由于错误引起的关闭，false，则是正常关闭。
    console.log("TCP服务关闭")
})

setTimeout(function(){
    //使用close方法并不会断开现存的连接，当这些客户端关闭时，TCP服务自动关闭,同时触发close方法
    // server.close()
},10000)
