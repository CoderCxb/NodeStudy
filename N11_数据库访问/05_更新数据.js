let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;
MongoClient.connect('mongodb://localhost:27017',{},function(error,mc){
    let db=mc.db('test');
    // 使用update进行更新 只更新一条记录 接收三个参数
    // 第一个参数是条件
    // 第二个参数是更新的内容 需要使用{ $set:{更新内容} }这样的格式
    // 第三个参数是回调函数
    // 需要一次性更改多条 则使用updateMany
    db.collection('class').update({
        class:'数统2'
    },{
        $set:{
            class:'计科4'
        }
    },function(error,result){
        console.log(result)
    })
})
