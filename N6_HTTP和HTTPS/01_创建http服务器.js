let http=require('http');
let querystring=require('querystring');
let url=require('url');
//接收的参数是一个函数 当接收到客户端发送的请求时触发的函数
let server=http.createServer(function(request,response){
    // console.log(request)
    // console.log(response)
    //可以使用response.writeHeader 或者 response.setHeader设置响应头
    //可以使用response.getHeader('属性名')获取响应头中的某个属性
    //可以使用response.removeHeader('属性名')  移除响应头中的某个属性
    //可以使用response.headersSent查看响应头是否发送，发送为true，否则false
    console.log("创建一个http服务器")

    request.on('data',function(chunk){
        console.log(chunk.toString())
    })
    response.on('abort',function(){
        console.log('abort执行')
    })
    //使用response.sendDate设置响应头是否包含Date字段，tru则包含,false则相反。
    // response.sendDate=false;
    //使用response.statusCode设置状态码
    // response.statusCode=404;
    response.setHeader('Content-Type','text/html;charset=utf8')
  
    server.setTimeout(1000,function(){
        console.log('客户端连接超时')
    })
});


server.on('request',function(request,response){
    console.log(request.url)
    // 使用url.parse将request.url转成一个对象，第二个参数是是否使用querystring,true则使用，会将url中的query转成一个对象，false则不进行转换。
    let requestUrl=url.parse(request.url,true);
    let params=requestUrl.query
    console.log(requestUrl)
    console.log(params)
    // console.log('接收到客户端发送的请求')
    response.write('你好');
    response.end()
})


server.on('connection',function(){
    console.log('客户端连接成功');
})


server.on('error',function(error){
    console.log('服务器发生错误'+error.message)
})

server.listen(666,'localhost',5,function(){
    console.log('服务器正在监听.........')
})


// let request=http.request({
//     host:'localhost',
//     port:666,
//     path:"/home",
//     method:'post',
//     headers:{},
// },function(response){
//     response.on('data',function(data){
//         console.log(data)
//     })
// })

// console.log(request.path)


setTimeout(function(){
    server.close()
},10000)


server.on('close',function(){
    console.log('服务器关闭')
})