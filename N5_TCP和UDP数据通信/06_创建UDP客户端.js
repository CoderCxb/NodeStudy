let dgram=require('dgram');
let message=new Buffer('你好。');
let client=dgram.createSocket('udp4');
client.send(message,0,message.length,666,'127.0.0.1',function(error,bytes){
    if(error){console.log('发送数据失败')}
    else{
        console.log("已发送%d字节数据",bytes);
    }
})
client.on('message',function(msg,info){
    console.log("已接收服务器发送的数据:%s",msg);
    console.log('服务器地址:%s',info.address);
    console.log('服务器端口号:%s',info.port);
    client.close()
})


client.on('close',function(){
    console.log("客户端关闭")
})