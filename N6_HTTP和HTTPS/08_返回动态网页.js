let http=require('http');
let url=require('url');
let querystring=require('querystring');
let person={
    'cxb':{
        name:'cxb',
        age:22,
        sex:'man'
    },
    'cw':{
        name:'cw',
        age:22,
        sex:'woman'
    }
}
let fs=require('fs');
http.createServer(function(request,response){
    if(request.url.startsWith('/submit')){
        fs.createReadStream(__dirname+'/submit.html').on('data',function(data){
            response.end(data)
        })
    }else if(request.url.startsWith('/info')&&request.method=='POST'){
        let params="";
        request.on('data',function(chunk){
            params+=chunk;
        })
        request.on('end',function(){
            let info=querystring.parse(params);
            console.log(info.name)  
        fs.createReadStream(__dirname+'/info.html').on('data',function(data){
            let content=data.toString();
            for(let item in person[info.name]){
                content=content.replace(`{{${item}}}`,person[info.name][item])
            }
          
            // let content=data.toString().replace('{{name}}',person[info.name].name).replace('{{age}}',person[info.name].age).replace('{{sex}}',person[info.name].sex);
            response.end(content)
        })
        })
    }
}).listen(666)