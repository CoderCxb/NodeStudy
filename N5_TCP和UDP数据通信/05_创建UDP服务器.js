let dgram=require('dgram');
let server=dgram.createSocket('udp4');
server.on('message',function(msg,info){
    console.log("接收到客户端发送的数据")
    console.log('客户端地址信息为%j',info)
    let buf=new Buffer("确认信息:"+msg);
    server.send(buf,0,buf.length,info.port,info.address);
    setTimeout(function(){
        console.log("关闭")
        // unref的作用就是当所有连接都断开时，关闭服务器并退出应用程序。
        // ref 相反
        // server.unref();
    },5000)
})
server.on('listening',function(){
    let address=server.address();
    console.log('服务器开始监听。地址信息为：%j',address);
})
server.bind(666,'localhost')