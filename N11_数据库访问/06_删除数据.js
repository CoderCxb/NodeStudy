let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017',{},
function(error,mc){
    let db=mc.db('test');
    db.collection('class').deleteMany({
        name:'ydl'
    },function(error,result){
        if(error){
            throw new Error('删除失败');
        }
        console.log(result.result.nModified)
        console.log('删除成功')
    })
})