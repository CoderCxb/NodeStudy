let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017',{},function(error,mc){
    let db=mc.db();
    db.collection('po').drop(function(error,delOK){
        if(delOK){
            console.log('删除成功')
        }else{
            console.log('删除失败')
        }
    })
})