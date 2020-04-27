let http=require('http');
http.createServer(function(request,response){
    // console.log(request);
    // console.log(response);
    response.writeHead(203,{
        'Content-Type':'text/html'
    })
    response.write('<head><meta charset="utf-8"></head>')
    response.end('连接服务器成功');
}).listen(3000,'127.0.0.1');

console.log('服务器已经启动');