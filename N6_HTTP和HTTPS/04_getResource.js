// 封装返回静态资源的代码
let mime=require('./mime.json');
let fs=require('fs');
function Resource(request,response){
    let frs=fs.createReadStream(filePath);
    let response={};
    frs.on('data',function(data){
        response.data=data;
        response.contentType=mime[ext];
        console.log(response)
        return response;
    })
}
exports.Resource=Resource;