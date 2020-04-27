let net =require('net');
let fs=require('fs');
let file=fs.createWriteStream('../logo3.png');
//写法一:
let client=new net.Socket();
client.connect(666,'localhost',function(){
    console.log('连接服务器成功');
    client.write('我是客户端');
    // client.setEncoding('utf8');

})
//写法二:
// let client=net.createConnection(666,'localhost',function(){
//     console.log('连接服务器成功');
//     client.write('我是客户端');
//     client.setEncoding('utf8');

// });

// client.connect()

client.on('data',function(data){
    file.write(data)
})

client.on('error',function(error){
    console.log(error)
    // client.destroy()
    // client.end("结束前发送的数据",'utf8')
})

client.on('end',function(){
    console.log('连接关闭')
})