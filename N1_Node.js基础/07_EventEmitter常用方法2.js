//1.newListener事件和removeListener事件
// newListener 每当用on或者addListener添加新的事件处理函数时触发
// removeListener 当移除事件处理函数时触发
let http=require('http');
let server=http.createServer();
server.on('removeListener',function(){
    console.log("移除了某个事件");
})
server.on('newListener',function(){
    console.log("新增了新的事件");
})

let myQuest=function(){
    console.log("这是我的请求函数");
     
}
server.on('request',function(request,response){
    response.end('ok')
})
server.on('myquest',myQuest);
// server.removeListener('myquest',myQuest);
server.removeAllListeners();  //移除所有事件也会触发 并且每移除一个事件处理函数 都会触发一次
server.listen(3000,'127.0.0.1');