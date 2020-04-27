let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;
MongoClient.connect('mongodb://localhost:27017',function(error,MongoClient){
    let db=MongoClient.db('test');
    let myClass=db.collection('class');
    myClass.find({
        name:'cxb'
    }).toArray(function(error,result){
        console.log(result)
    })
})