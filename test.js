const http=require("http");
let request=http.request({
    host:'localhost',
    port:666,
    // path:"/",
    method:'get',
    headers:{}
},function(result){
    console.log(result)
   
})