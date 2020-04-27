let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017',{},function(error,mc){
    let db=mc.db('test');
    db.collection('class').find().sort({
        age:1  //1升序 -1降序
    }).toArray(function(error,result){
        console.log(result)
    })
})