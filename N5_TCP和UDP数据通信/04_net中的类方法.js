let net =require('net');
// 用于判断一个字符串是否是IP地址  返回0:不是IP地址，返回4，是IPv4地址，返回6是IPv6地址。
console.log(net.isIP('127.0.0.1'))
// 判断是否是IPv4地址
console.log(net.isIPv4('127.0.0.1'))
// 判断是否是IPv6地址
console.log(net.isIPv6('1314:1314:1314::29'))

