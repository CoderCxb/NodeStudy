let querystring=require('querystring');
let http=require('http');
http.createServer(function(request,response){
    // 1.定义变量保存传递过来的参数
    let params="";
    // 注意点:在Node中,post请求的参数我们不能一次性拿到,必须分批获取,只会获取参数，不包含路径
    // 
    request.on('data',function(chunk){
        params +=chunk;
    })
    request.on('end',function(){
        console.log(querystring.parse(params))
    })
}).listen(666)