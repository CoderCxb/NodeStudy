let http=require('http');
let server=http.createServer(function(){
  console.log("服务器已经启动")
});

server.on('connection',function(data){
  console.log('客户端连接服务器成功')
})

server.listen(666,'127.0.0.1')
setTimeout(function(){
  console.log('OK')
},5000)

console.log(process.argv3)