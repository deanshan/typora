# 国密

## SM2.js

+ 对称加密算法
+ 通过后端给的"公钥"对前端生成的随机"密钥"进行加密————加密密钥

## SM4.js

+ 非对称加密算法
+ 通过前端生成的随机"密钥"对"数据"进行加密————加密数据

## 逻辑

1. 后端————生成一对“公钥”和“私钥”————保存“公钥”并传给前端
2. 前端————生成16位随机数的“密钥”和偏移量（iv）
3. SM2通过“公钥”对“密钥”进行加密————加密密钥
4. SM4通过“密钥”对前端数据进行加密之后————加密数据（密文）
5. 把“加密密钥”、“加密数据”、“偏移量”————传给后端
6. 后端通过“私钥”对“加密密钥”解密————获取解密之后的“密钥”————再对SM4加密的数据解密————解密后的数据（明文）

**注：后端解密密钥和生成公钥私钥对是同一算法（非对称），解密密文（加密数据）是对称加密算法**

# AES&RSA

原理：通过AES（对称）和RSA（非对称）加密解密

## AES对称加解密

```js
import CryptoJS from "CryptoJS";

const AES_KEY = "987654321ccp9102";// 16位
// 加密
export const _encryptParams = params => {
    let key = CryptoJS.enc.Utf8.parse(AES_KEY);
    let encryptedData = CryptoJS.AES.encrypt(params, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encryptedData.toString();
};

// 解密
export const _decryptParams = params => {
    let key = CryptoJS.enc.Utf8.parse(AES_KEY);
    let decryptedData = CryptoJS.AES.decrypt(params, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    return CryptoJS.enc.Utf8.stringify(decryptedData).toString();
};
```



## 请求方式及参数类型的判断

### GET

params：Object

加密前：Object

加密后：Object

### POST

+ data: Object（序列化， requestParameter接收，进入parameter）

  加密前：.遍历对象，只对value加密

  加密后：String（`data = qs.stringify(data)` 序列化处理）

+ data: Object（JSON对象，requestBody接收，进入bodyMap）

  加密前：.遍历对象，只对value加密

  加密后：Object

  | value数据类型     |      注意事项（前三种可通过`filterParams`方法遍历过滤）      |
  | :---------------- | :----------------------------------------------------------: |
  | 1、空字符串（""） |   如果没有默认值或不是必传参数，可把默认值设为==空字符串==   |
  | 2、null对象       | 没有特殊情况，不要赋值为null对象，否则会被解密为"null",（基本不存在） |
  | 3、undefined      | 如果该字段不是必填项，后端没有默认值，前端没有赋值时，相当于此value=undefiend，所以要么赋值 ，要么不传此参数 |
  | 4、Array/Object   |                加密前：JSON.stringify(params)                |

+ data：Array（后端requestBody接收，进入bodyMap，需要设置"Content-type"）

  加密前：（设置类型必须写在加密前，否则无效）

  + `data = JSON.stringify(data)`
  + 如果设置："Content-type": "application/json; charset=utf-8"（后端为body接收）
  + ==如果不设置："Content-type": "application/json; charset=utf-8"，参数类型会转为FormData类型（后端是进入params还是body取决于两者判断的顺序）==

  加密后：String

  ```js
  // 示例：如果data的值是String，必须在头部设置"Content-type"才不会进入后端params
  this.$https.post(url, {data: JSON.stringfy(data)}, 
            {headers:{"Content-type": "application/json; charset=utf-8"}})
  ```

  

+ data：FormData（主要是针对文件上传，requestParameter接收，进入parameter）

  加密前：需要对formData对象进行遍历加密，否则会对FormData对象加密

  加密后：需要重新添加到formData对象中，否则加密后的数据类型不是formData类型

  ```js
  let formData = new FormData();
  for (let item of params.entries()) {
      if (!getDataType(item[1], 'File')) {
          formData.append(item[0], value);
      } else {
          formData.append(item[0], item[1]);
      }
  }
  ```

  

### PUT

==只有对象（key,value）才会进入到bodyMap里==

+ data：Object/Array（进requestBody接收，但不进入bodyMap，需要单独处理）

  加密前：String（`params = qs.stringify(params)` 序列化）

  加密后：String

+ data：FormData（主要是针对文件上传，requestParameter接收，进入parameter）

  加密前：需要对formData对象进行遍历加密，否则会对FormData对象加密

  加密后：需要重新添加到formData对象中，否则加密后的数据类型不是formData类型

+ data: Object（JSON对象，requestBody接收，进入bodyMap）

  加密前：.遍历对象，只对value加密

  加密后：Object

  

  | value数据类型     |      注意事项（前三种可通过`filterParams`方法遍历过滤）      |
  | :---------------- | :----------------------------------------------------------: |
  | 1、空字符串（""） |   如果没有默认值或不是必传参数，可把默认值设为==空字符串==   |
  | 2、null对象       | 没有特殊情况，不要赋值为null对象，否则会被解密为"null",（基本不存在） |
  | 3、undefined      | 如果该字段不是必填项，后端没有默认值，前端没有赋值时，相当于此value=undefiend，所以要么赋值 ，要么不传此参数 |
  | 4、Array/Object   |                加密前：JSON.stringify(params)                |

### DELETE

==目前数据类型都为requestBody接收，进入bodyMap==

+ data：Object（进requestBody接收，但不进入bodyMap，需要单独处理）

  加密前：

  + `params = qs.stringify(params)` 序列化
  + 设置："Content-type": "application/x-www-form-urlencoded;charset=UTF-8"（后端为body接收）

  加密后：String

+ data：Array （进requestBody接收，但不进入bodyMap，需要单独处理）

  加密前：

  + `params = JSON.stringify(params)` 
  + 设置：`"Content-type": "application/json;charset=UTF-8"`（后端为body接收）

  加密后：String

+ data：Object（进requestBody接收，进入bodyMap）

  加密前：对value加密

  加密后：Object