
// 从一个文件中导出的模块，都是同一个对象
// 模块的变量是延迟执行，用到时候，才会去那具体的值

// Es6 模块中， 所有代码在解析之前会先进行import 静态解析。

import { a, b, c, show, age, name,AddAge } from './aicoder';
import * as aicoder from './aicoder';  //  *  代表import 里所有的东西 都要导入到 aicoder 里面去
import sld from './b';
import './c';  // js 可省略
 
show();

AddAge(10);

show();

aicoder.show();


console.log('sld :', sld);

 