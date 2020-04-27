// 使用resolve方法将域名解析为DNS记录
let dns=require('dns');
// 第二个参数 A  获取IPv4地址
//        AAAA  获取Ipv6地址
//         MX   获取MX记录
//        TXT   获取TXT记录
dns.resolve('https://es6.ruanyifeng.com/','A',function(error,addresses){
    console.log('使用resolve获取地址:'+addresses)
})


console.log(dns.getServers())

// 使用lookup只会获取第一个
dns.lookup('www.marksman.fun',function(error,addresses){
    console.log('使用lookup:'+addresses)
})

// 使用reverse反向解析IP地址
dns.reverse('218.85.157.99',function(error,hostnames){
    if(error){
        console.log(error)
    }
    else{
        console.log(hostnames)
    }
})