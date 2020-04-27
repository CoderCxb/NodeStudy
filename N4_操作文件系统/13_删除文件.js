let fs=require('fs')
fs.unlink(__dirname+'/test2.txt',function(error){
  if(error){
    console.log(error)
  }
  else{
    console.log("删除成功")
  }
})