# import和require的区别



|   区别   |                       require/exports                        |                        import/export                         |
| :------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|   规范   |                 它是AMD/CommonJS规范引入方式                 |              它是es6的语法标准，需转化为es5语法              |
| 调用方式 |            运行时调用,基本可以用在代码的任何地方             |                   编译时调用，一般放在头部                   |
|   本质   | 它是赋值过程，require的结果一般是对象，数字，字符串，函数等，然后把require的结果赋值给某个变量或者某个对象的属性的值 | 它是解构过程，由于所有浏览器并没有全部实现improt，所以需转成ES5 |
|    值    |                             拷贝                             |                             引用                             |

写法：

```js
//require/exports
const fs = require('fs');
— — — — — — — — — — — — — — 
exports.fs = fs;
module.exports = fs;
```

```js
//import/export
import fs from 'fs';
import {default as fs} from 'fs';
import * as fs from 'fs';
import {readFile} from 'fs';
import {readFile as read} from 'fs';
import fs, {readFile} from 'fs';
— — — — — — — — — — — — — — — — — — — — 
export default fs;
export const fs;
export function readFile;
export {readFile, read};
export * from 'fs';
```





























































