let http=require('http');
let fs=require('fs');
let path=require('path')

let httpServer=http.createServer(function(request,response){
    if(request.url.startsWith('/index')){
        let frs=fs.createReadStream(__dirname+'/index.html');
        frs.on('data',function(data){
            response.setHeader('Content-Type','text/html;charset=utf-8')
            response.end(data)
        })
    }else{
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.end("找不到页面")
    }
  
}).listen(666,'127.0.0.1')
