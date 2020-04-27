let http=require('http');
let fs=require('fs');
let path=require('path');
let domain=require('domain').create();
// let resource=require('./04_getResource');
// require可以导入一个json文件 用法和对象一样
let mime=require('./mime.json');
console.log(mime['.jpg'])
let httpServer=http.createServer(function(request,response){
    let filePath=__dirname+request.url;
    let ext=path.extname(filePath)
    // console.log(filePath)
    domain.run(function(){
        if(ext!==''&&!request.url.startsWith('/index')){
            let frs=fs.createReadStream(filePath);
            // 无封装写法:
            frs.on('data',function(data){
                response.setHeader('Content-Type',mime[ext]+';charset=utf-8')
                response.end(data)
            })
            // 封装代码:
            
        }else if(request.url.startsWith('/index')){
            let frs=fs.createReadStream(__dirname+'/index.html');
            frs.on('data',function(data){
                response.setHeader('Content-Type','text/html;charset=utf-8')
                response.end(data)
            })
        }else{
            response.setHeader('Content-Type','text/html;charset=utf-8')
            response.end("找不到页面")
        }
    })  
    domain.on('error',function(){
        // console.log('使用了domain捕获了异常')
    })
}).listen(666)