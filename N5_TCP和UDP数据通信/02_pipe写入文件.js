let net =require('net')
let server=net.createServer();
let fs=require("fs");
let file=fs.createWriteStream('./N5_TCP和UDP数据通信/file.txt',function(error){
    console.log(error);
})
server.on('connection',function(socket){
    console.log("连接成功")
    socket.pipe(file)
    // socket.unpipe(file);
    socket.setTimeout(5000);
    socket.on('timeout',function(){
        console.log("连接超时")
    })
    socket.pause()  //socket.pause() 暂停data事件的触发，也就是客户端发送的数据将暂存在缓存区。
    socket.resume() //解除pause()
})



server.listen(666,'127.0.0.1',function(){
    console.log("TCP服务开启")
})