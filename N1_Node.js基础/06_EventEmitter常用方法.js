//默认是会由两次请求的 有一次是请求图标 favicon.ico也就是网站的小图标
let http=require('http');
let server=http.createServer();
let events=require('events');
server.on('request',function(request,response){
    // console.log(request.url);
    if(request.url!=='/favicon.ico'){
        console.log("接收到客户端发送的请求")
        response.end('one');
    }
})
server.on('request',function(request,response){
    // console.log(request.url);
    if(request.url!=='/favicon.ico'){
    console.log('发送响应完毕');
    response.end('two');
}
})
let once=function(request,response){
    if(request.url!=='/favicon.ico'){
    console.log('这次once处理函数，只执行一次');
    }
}
server.once('request',once)
server.setMaxListeners(3);                //设置事件处理函数数量的最大值
server.removeListener('request',once);    //移除指定类型中指定名称的事件处理函数
// server.removeAllListeners();              //移除所有事件处理函数
console.log(server.listeners('request')); //获取server的所有处理request的函数
server.on('myRequest',function(options){
    console.log(options)
})
//手动触发指定事件 可以向事件传递多个参数 
//注意点：需要向触发的函数传递其所需要的参数 如request要触发 就需要传递request和response
server.emit('myRequest',{
    name:'cxb',
    age:22
});
//获取某个对象某种事件的处理函数的数量
console.log(server.listenerCount('request'));
console.log(events.EventEmitter.listenerCount(server,'request'))



server.listen(3000,'127.0.0.1')

