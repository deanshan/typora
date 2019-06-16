var PUBLIC_KEY = "0449E45822EE914183BFD9DF12B80DBFF89FD27A552874CC5AB5E986ED8F783D381435BB044DD90675DF4098D273EFECB17C6DC6A6EEB56197BD5962941312C929";
var sm4Util = new SM4Util();
/**
 * smEncrypt.generateKeyPairHex.[privateKey/publicKey]: 生成私钥公钥对
 * smEncrypt.sm2Decrypt(key, PUBLIC_KEY)解密密钥
 */
// 数据加密
function encryptParams(params){
    var arr = [];
    var data = {};
    var key = getSubstrItem(16);    //密钥:生成16的随机数
    var iv = getSubstrItem(16);     //偏移量:生成16的随机数
    var headers = {
        keyword:smEncrypt.sm2Encrypt(key, PUBLIC_KEY),  //SM2用公钥加密密钥
        iv:iv
    }
    arr.push(headers);
    for (i in params){
        data[i] = sm4Util.encryptData_CBC(key,iv,params[i]);    //SM4用密钥和偏移量加密数据
    }
    arr.push(data)
    return arr;
}
