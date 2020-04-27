let http=require('http');
let url=require('url');

let httpServer=http.createServer(function(request,response){
    let requestUrl=request.url;
    let urlObj=url.parse(requestUrl,true);
    let query=urlObj.query;
    console.log(requestUrl);
    console.log(urlObj);
    console.log(query)
}).listen(666)