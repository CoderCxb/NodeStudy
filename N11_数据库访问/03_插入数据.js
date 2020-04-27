let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;
MongoClient.connect('mongodb://localhost:27017/',function(error,MongoClient){  
    if(error){}
    //返回的是MongoClient对象 
    let db=MongoClient.db();
    // db.collection获取集合
    // insert插入一条或多条数据,接收数组或对象
    // insertOne插入一条数据
    let myClass=db.collection('class');
    myClass.insert([
        {
            name:'cw',
            age:22,
            class:"数统2"
        },
        {
            name:'lzj',
            age:22,
            class:"计科4"
        },
        {
            name:'ydl',
            age:22,
            class:"数统2"
        }
    ])
});