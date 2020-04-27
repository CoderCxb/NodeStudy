let http=require('http');
let template=require('art-template');
let fs=require('fs');
http.createServer(function(request,response){
    // 如果接收了第二个参数 则返回整个网页模板 
    // 如果没有接收第二个参数 则返回的是一个函数 需要调用
    let content=template(__dirname+'/template.html',{
        name:'cxb',age:22,sex:'man'
    });
    response.end(content)
}).listen(666)