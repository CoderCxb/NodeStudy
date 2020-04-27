let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017',{},function(error,mc){
    if(error){}
    else{
        let db=mc.db('test');
        db.collection('class').aggregate([
            {
                $lookup:{
                    from:'sex',   //右集合
                    localField: 'name',    // 左集合 join 字段
                    foreignField: 'name',  // 右集合 join 字段
                    as: 'new'     // 新生成的字段
                }
            }
        ]).toArray(function(error,result){
            console.log(JSON.stringify(result))
        })
    }
})