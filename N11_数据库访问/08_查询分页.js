let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017',{},function(error,mc){
    let db=mc.db('test');
    //  limit 返回指定数量的记录
    //  skip  跳过指定数量的记录
    db.collection('class').find().limit(2).toArray(function(error,result){
        console.log(result)
    })
})