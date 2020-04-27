let fs=require('fs');
fs.readFile('./logo.png',function(error1,data){
    fs.writeFile('./logo2.png',data,function(error2){
        if(error2){console.log("拷贝图片失败")}
        else{
            console.log("拷贝图片成功")
        }
    })
})