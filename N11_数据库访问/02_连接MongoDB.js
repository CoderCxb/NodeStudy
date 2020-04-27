// 1.导入mondodb模块
let mongo=require('mongodb');
// 2.创建服务 接收三个参数(host,port,options)
// options中属性：
// 1)ssl:布尔值,是否建立一个基于ssl安全协议的连接,默认是false
// 2)
let MongoClient=mongo.MongoClient;
MongoClient.connect('mongodb://localhost:27017/',{ useUnifiedTopology: true },function(error,database){
    if(error){
        console.log(error)
    }
    else{
        console.log("成功连接数据库")
        const db=database.db();
        // 创建集合
        db.createCollection('class',function(error,result){
            if(error){console.log('发生错误')}
            console.log('创建集合成功');
        })
    }
});
