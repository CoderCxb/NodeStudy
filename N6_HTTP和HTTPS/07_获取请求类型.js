let http=require('http');
http.createServer(function(request,response){
    // 获取的是大写的请求类型
    console.log(request.method)
}).listen(666)