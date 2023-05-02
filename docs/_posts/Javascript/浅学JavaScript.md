---
title: 浅学JavaScript
date: 2022-10-18
tags: [JavaScript, 编程语言学习]
---
# JavaScript

快速入门笔记（只能说是浅浅的学了一点！）（后续会补充ES6新语法！）

文档建议使用   [w3school](https://www.w3school.com.cn/)



------

## 1、什么是JavaScript?

### 1.1、概述

`JavaScript`是一门世界上最流行的脚本语言

`JavaScript`一门弱类型脚本语言，其源代码在发往客户端运行之前不需要编译，而是将文本格式的字符代码发送给浏览器由浏览器解释运行。

### 1.2、历史

[ECMAScript](https://so.csdn.net/so/search?q=ECMAScript&spm=1001.2101.3001.7020)：可以理解为JavaScript的一个标准

Native原生JS开发
原生JS开发，也就是让我们按照【ECMAScript】标准的开发方式，简称是ES，特点是所有浏览器都支持，ES标准已发布如下版本：
ES3
ES4（内部，未正式发布）
ES5（全浏览器支持）
ES6（常用，当前主流版本：webpack打包成为ES5支持）
ES7
ES8
ES9

### 1.3、 大前端开发

#### 1.3.1 TypeScript 微软的标准

`TypeScript` 是一种由微软开发的自由和开源的编程语言。它是`JavaScript`的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。
该语言的特点就是除了具备ES的特征之外还纳入了许多不在标准范围内的新特性，所以会导致很多浏览器不能直接支持。`TypeScript`语法，需要编译后（编译成js文件）才能被浏览器正确执行。

#### 1.3.2 JavaScript库

jQuery：
优点是简化了DOM操作，缺点是DOM操作太频繁，影响前台性能。在前端眼里使用它仅仅是为了兼容IE6、7、8。

#### 1.3.3 JavaScript框架

**Angular：**
Google收购的前端框架，由一群Java程序员开发，其特点是将后台的MVC模式搬到了前端并增加了模块化开发的理念，与微软合作，采用TypeScript语法开发，对后台程序员友好，对前端程序员不友好，缺点是版本迭代不合理（1代->2代，除了名字相同，基本就是两个东西）。
**React：**
Facebook出品，一款高性能能的JS前端框架，特点是提出了新概念【虚拟DOM】用于减少真实DOM操作，在内存中模拟DOM操作，有效的提升了前端渲染效率，缺点是使用复杂，因为需要额外学习一门【JSX】语言。
**Vue：**
一款渐进式Javascript框架，所谓渐进式就是逐步实现新特性的意思，如实现模块化开发、路由、状态管理等新特性。其特点是综合了Angular（模块化）和React（虚拟DOM）的优点。
**Axios：**
前端通信框架，因为Vue的边界很明确，即使为了处理DOM，所以并不具备通信能能力，因此就需要额外使用一个通信框架与服务器交互，当然也可以直接使用jQuery提供的AJAX通信功能。

#### 1.3.4 UI框架

`Ant-Design：` 阿里巴巴出品，基于React的UI框架。
`ElementUI、iview、ice：` 饿了么出品，基于Vue的UI框架。
`Bootstrap：` Twitter推出的一个用于前端开发的工具包。
`AmazeUI：` 一款HTML5跨屏前端框架。

#### 1.3.5 Javascript构建工具

`Babel：` js编译工具，主要用于浏览器不支持的ES新特性，比如用于编译TypeScript。
`WebPack：` 模块打包工具，主要作用是打包、压缩、合并以及按序加载。

#### 1.3.6 后端技术

前端人员为了方便开发也需要掌握一定的后端技术，但`Java`后台人员知道后台知识体系极其庞大复杂，所以为了方便前端人员开发后台应用，出现了Node.JS`（JavaScript的运行环境）`这样的技术。
`Node.JS`的作者已经生成放弃`Node.JS`（说是架构做的不好在加上笨重的`node_modules`），开始开发全新架构的Deno。
既然是后台技术，那肯定也需要框架和项目管理工具，`Node.JS`框架及项目管理工具如下：
`Express：` NodeJS框架
`Koa：` Express简化版
`NPM：` 项目综合管理工具，类似于Maven
`YARN：` NPM的代提方案，类似于Maven和Gradle的关系



------

## 2、快速入门

### 2.1、引入JavaScript

#### 2.1.1内部标签

**script位置**
可以放在head标签内或body

```html
<!-- 弹窗输出hello word -->
<script>
	alert('hello word');
</script>
```

#### 2.1.2外部引入

**问题**：外部引用一定要写全，不要写这样

```html
<!-- 弹窗输出hello word -->
<script src="js/sw.js"></script>
<!-- 当前类型，不用显示定义也可以 -->
<script type="text/javascript">
```

### 2.2、浏览器调试

在浏览器按F12进入开发中模式，选择控制台可以写JavaScript观察输出，并且有调试功能。
浏览器控制台打印：console.log();

调试器：可以打断点，一行一行执行，观看代码运行情况。

### 2.3、严格模式

js自己检查代码是否书写正确

```html
// 必须写在第一行
'use strict'
// 定义变量可以用var 或 let 最好使用let
let a = 9;
// let a = 9;（局部变量） a = 9（全局变量）
console.log(a);
```



------

## 3、数据类型

### 3.1、字符串

1、正常字符我们使用 单引号，或者双引号

2、转义字符 \

```
\'
\n
\t
\u4e2d \u#### Unicode字符

\x41          Ascll字符
```

3、多行字符串编写

```javascript
// tab 上面 esc 键下面
var msg = `
	hello
    world
    你好ya
    你好
`
```

4、模板字符串

```javascript
let name = "shiwei";
let age = 3;

let msg = `你好呀，${name}`
```

5、字符串长度

```javascript
str.length
```

6、字符串的可变性，不可变

7、大小写转换

```javascript
// 注意，这里是方法，不是属性了
student.toUpperCase() // 变为大写
student.toLowerCase() // 变为小写
```

8、student.indexOf('t') 获取指定字符串的下标

9、substring

```javascript
[)
 student.substring(1) // 从第一个字符串截取到最后一个字符串
 student.substring(1, 3) // [1, 3)
```



### 3.2、数组

**Array（数组）可以包含任意的数据类型**

eg：

```javascript
var a = [1, 2, 3, "1", 'shiwei', "石玮", null, undefined]
```



```javascript
var arr = [1, 2, 3, 4, 5, 6] // 通过下标取值和赋值
arr[0]
arr[0] = 1
```

1、长度

```javascript
arr.length
```

注意 :  加入给arr.length 赋值，数组的大小就会发生改变，如果赋值过小，元素就会丢失，如果数据超过长度，也不会报错，会显示undefined，是JavaScript特有的

2、indexof()，通过元素获得下标索引

```javascript
arr.indexof(2)
1
```

字符串的额"1" 和数字的 1 是不同的

+ == （判断数值相等，类型可以不相同，不建议使用，属于是js的缺陷）
+ === （判断数值和类型相同，和java相同，建议使用）

**3、slice()**   截取Array的一部分，返回一个新数组，类似String中的substring

**4、push()、pop() 尾部**

```javascript
arr.push()  // 压入到尾部
arr.pop()   // 弹出尾部的一个元素
```

**5、unshift()、shift() 头部**

```javascript
arr.unshift('a', 'b') // 压入头部，返回数组的长度
arr.shifit() // 弹出头部的一个元素，返回弹出的元素
```

6、排序 sort()

```javascript
arr = ["B","C","A"]
arr.sort()
arr = ["A","B","C"]
```

7、元素反转 reverse()

```javascript
arr = ["A","B","C"]
arr.sort()
arr = ["C","B","A"]
```

**8、concat () 拼接**

```javascript
arr = ["C","B","A"]
arr.concat([1, 2, 3])
arr = ["C","B","A",1,2,3]
```

注意: concat () 并没有修改数组. 只是返回一个新的数组

9、连接符 join

打印拼接数组，使用特定的字符换拼接

```javascript
(3) ['B', 'C', 'A']
arr.join('-')
> 'B-C-A'
```

10、多维数组

```javascript
arr = [[1,2], [3,4],["5","6"]];
arr[1][1]
> 4
```

11、还有简单的一些

 ```javascript
// fill 填充
arr.fill(1)
> [1, 1, 1]
// find 查找 （不是一个方法）
// arr.find(作为函数提供)
 ```



数组：存储数据（如何存，如何取，方法都可以自己实现！）

### 3.3、对象

1. JavaScript 中的**所有事物**都是对象：字符串、数字、数组、日期，等等。
2. 在 JavaScript 中，对象是拥有**属性**和**方法**的数据。

若干个赋值对

```javascript
var 对象名 = {
    属性名:属性值,
    属性名:属性值,
    属性名:属性值
}

// 定义了一个person对象，它有四个属性！
var person = {
    name: "shiwei",
    age: 18,
    email: "1828045443@qq.com",
    score: 0
}
```

Js中对象，{.....} 表示一个对象，键值对描述属性 xxxx: xxxx，多个属性之间使用逗号隔开，最后一个属性不加逗号！

JavaScript中的所有的键都是字符串，值是任意对象！

1、对象赋值

```javascript
person.name = "shiwei"
> "shiwei"
person.name
> "shiwei"
```

2、使用一个不存在的对象属性，不会报错！undefined

```javascript
person.haha
> undefined
```

3、动态的删减属性

```javascript
delete person.name
> true
person
> {age: 18, email: "1828045443@qq.com", score: 0}
```

4、动态的添加，直接给新的属性添加值即可

```javascript
person.haha = "haha"
> "haha"
person
> {age: 18, email: "1828045443@qq.com", score: 0, haha: "haha"}
```

5、判断属性值是否在这个对象中！ xxx in xxx!

```javascript
'age' in person
> true
// 继承
'tostring' in person
> true
```

6、判断一个属性是否是这个对象自身拥有的  *hasOwnProperty()*

```javascript
person.hasOwnProperty('tostring')
> false
person.hasOwnProperty('age')
> true
```

### 3.4、流程控制

if 判断

循环  for   while    do while 

```javascript
for (let i = 0; i < 100 ; i ++ ) {
    console.log(i);
}
```

forEach 循环

```javascript
var age = [12, 3, 12, 3, 4, 4, 5, 6, 18, 66]

// 函数
age.forEach(function(value) {
    console.log(value);
})
```

for ... in     (索引值 key)  for (var index in object) {} 

for ... of     (具体的值 value)（也可以打印map和set的值）

### 3.5、Map和Set

> ES6 的新特性

Map:

Map 和python里的字典一样

```javascript
// ES6 Map
// 学生的成绩，学生的名字

var map = new Map(['tom', 100], ['jack', 90], ['haha', 80]);
var name = map.get('tom'); // 通过key获取value
map.set('admin', 123456); // 新增或修改
map.delete("tom"); // 删除
```

Set: 无序不重复的集合

```javascript
var set = new Set([3, 1, 1, 1, 1]); //  set可以去重
set.add(2); // 添加！
set.delete(1); // 删除！
console.log(set.has(3)); // 是否包含某个元素！
```

### 3.6、iterator(迭代器)

> ES6 的新特性

遍历数组

```javascript
// 通过for of / for in 下标
var arr = [3, 4, 5]
for (var x of arr) {
    console.log(x);
}
```

遍历map

```javascript
var map = new Map([["tom",100],["jack",90],["haha",80]]);
for (let x of map) {
 	console.log(x);
}
```

遍历set

```javascript
var set = new Set([5, 6, 7]);
for (let x of set) {
    console.log(x);
}
```



------

## 4、函数

方法：对象（属性，方法）（把函数放到对象里面就成了方法）

方法（method）: 当将**函数**和**对象**合写在一起时，函数就变成了 “方法”（method）// 当函数赋值给对象的属性，我们称为"方法"

函数：

函数（function）: 函数是带有名称（named）和参数的JavaScript代码段，可以一次定义多次调用

>  函数和方法本质上是一样的，只不过方法是函数的特例，是将**函数**值赋给了**对象**，只是放到的位置不同。

[javascript中函数和方法的区别](https://blog.csdn.net/qq_44163269/article/details/104627274)

### 4.1、定义函数

> 定义方式一

绝对值函数

```javascript
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

一旦执行到  return  代表函数结束，返回结果！

如果没有执行  return  , 函数执行完也会返回结果，结果就是 undefined



> 定义方式二

```javascript
// 匿名函数，匿名内部类
var abs = function(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

定义方式一和定义方式二等价！

参数问题：JavaScript可以传任意个参数，也可以不传参数

参数进来是否存在的问题：

假设参数不存在，如何规避？

```javascript
var abs = function(x) {
  //手动抛出异常来判断
    if(typeof x !== 'number'){
        throw 'Not a Number';
    }
    if(x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

`arguments `是一个js免费赠送的关键字

`arguments `： 代表传递进来的所有参数，是一个数组

```javascript
var abs = function(x) {
    
    console.log("x=>" + x);
    for (var i = 0; i < arguments.length ; i ++ ) {
        console.log(arguments[i]);
    }

    if(x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```


问题：arguments包含所有参数，我们有时想使用多余的参数来进行附加操作，需要排除已有的参数

`rest` : 获取没有使用的参数，从前往后没有使用的参数（前面的按顺序是使用的参数，后面全部都是不使用的参数）

before:

```javascript
function shiwei(a, b) {
    console.log("a=>" + a);
    console.log("b=>" + b);
    if(arguments.length > 2) {
        for (let i = 0; i < arguments.length ; i ++ ) {
            // 。。。。。。。
        }
    }
}
```

now：

```javascript
function shiwei(a,b,...rest){
      console.log("a=>" + a);
      console.log("b=>" + b);
      console.log(rest);
  }
 
// rest 只能写在后面，必须用...标识
/*
eg:
shiwei(1, 2, 3, 4, 5, 6, 7, 8, 9)
> a=> 1
> b=> 2
> [3, 4, 5, 6, 7, 8, 9]
*/
/*
eg:
shiwei(1)
> a=> 1
> b=> undefined
> []
*/
```

### 4.2、变量的作用域

在JavaScript中，var 定义变量实际是有作用域的， 一般认为var是全局变量，let是局部变量

+ 假设在函数体中声明，则在函数体外不可以使用，（非要想用的话，之后可以研究**闭包**）

```javascript
function qj() {
      var x = 1;
      x = x + 1;
  }
    x = x + 2; //Uncaught ReferenceError: x is not defined
```

+ 如果两个函数使用了相同的变量名，只要在函数内部，就不冲突

+ 内部函数可以访问外部函数，反之则不行

```javascript
function qj() {
    var x = 1;

    // 内部函数可以访问外部函数，反之则不行
    function qj2() {
        var y = x + 1;  // 2
    }

    var z = y + 1;  // Uncaught ReferenceError: z is not defined
}
```

假设，内部函数变量和外部函数的变量，重名

```javascript
function qj() {
  var x = 1;
   
  function qj2() {
    var x = 'A';
    console.log('inner' + x); //outer1
  }
  console.log('outer' + x); //innerA
  qj2()
  
}

qj()
```

假设在JavaScript中函数查找变量从自身函数开始，由“内”向“外” 查找，假设外部存在这个同名的函数变量，则在内部函数会屏蔽外部函数的变量。`提升变量的作用域`

```javascript
function qj() {
  var x = "x" + y;
  console.log(x);
  var y = 'y';
}

//结果： y undefined
```

说明:JS执行引擎，自动提升了y的声明，但是不会提升变量y的赋值（这不是废话嘛？）

```javascript
function qj2() {
  var y；
  var x = "x" + y;
  console.log(x);
  y = 'y';
}
```

这个是在JavaScript建立之初就存在的特性。养成**规范**：所有变量定义都在函数的头部，不要乱放，便于代码维护（也是废话！）

```javascript
function qj2(){
  var x = 1；
  y = x + 1;
  z, i, a;  // undefined
}
```

全局函数

**默认所有的全局变量，都会自动绑定在window对象下**

JavaScript实际上只有一个全局作用域，任何变量(函数也可以视为变量)，假设没有任何函数作用范围内找到，就会向外查找，如果在全局作用域都没有找到，报错**RefrenceError**

由于我们所有的全局变量都会绑定到我们的window上，如果不同的js文件，使用了相同的全局变量，冲突。 —如何减少冲突？

>  把自己的代码全部放入自己定义的唯一空间名字中，降低全局命名的冲突的问题。jQuery可以解决。

>  ES6 let 关键字，解决局部作用域冲突问题
>
>  常量 const



### 4.3、方法

>  方法：对象（属性，方法）（把函数放到对象里面就成了方法）

方法就是把函数放在对象的里面，对象只有两个东西：属性 和 方法

```javascript
var shi = {
    name　: 'shiwei',
    birth : 2002,
    //方法
    age : function () {
        //今年 - 出生年
        var now = new Date().getFullYear();
        return now - this.birth;
    }
}

//属性
shi.name
//方法
shi.age()

```

this. 代表什么？拆开上面的代码看看

```javascript
function getAge() {
    var now = new Date().getFullYear();
    return now - this.birth;
}

var shi = {
    name　: 'shiwei',
    birth : 2002,
    age : getAge
}

// shi.age()     ok
// getAge()      NaN   window
// 直接调用getAge表示调用window的这个方法,但是window没有
```

this 是无法指向的， 是默认指向调用它的那个对象



> apply

可以指定  this 的作用对象（一种调用方法的方法 ）

```javascript
function getAge(){
        let now = new Date().getFullYear();
        return now - this.birth;
    }
    let shi = {
        name: "石玮",
        birth: 2002,
        age: getAge
    };
    let xiaoming = {
        name: "小明",
        birth: 2010,
        age: getAge
    };

 	getAge.apply(shi, []); // this, 指向了 shi 这个对象，参数为空
    //getAge.apply(EASON, []);
    console.log(getAge.apply(shi,[]));
    console.log(getAge.apply(xiaoming,[]));
```

```javascript
20
12
```



---


## 5、内部对象

> 标准对象

JavaScript 中的**所有事物**都是对象：字符串、数字、数组、日期，等等。

### 5.1、Date

```javascript
// 基本使用
now.getFullYear(); // 年
now.getMonth(); // 月 0~11 没有12月
now.getDate(); // 日
now.getDay(); // 星期几
now.getHours(); // 时
now.getMinutes(); // 分
now.getSeconds(); // 秒
// 使用js获取时间一般使用时间戳，因为其它是可以更改的
now.getTime(); // 时间戳（1970年1月1日按时区到现在的毫秒值）
// 转化时间格式
now.toLocaleString();
//返回值："2022/6/2 21:33:10" 
```



### 5.2、JSON

> json 是什么

早期，所有数据传输习惯使用 XML 文件！

+ JSON（JavaScript Object Notation, JS 对象简谱）是一种轻量级的数据交换格式。
+ 简洁和清晰的层次结构使得JSON成为理想的数据交换语言。
+ 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。

在JavaScript一切皆为对象、任何 js 支持的类型都可以用 JSON 来表示；

格式：

+ 对象都用 {}
+ 数组都用 []
+ 所有的键值对都是用 key : value

JSON 字符串和 JS 对象的转化

```javascript
var user = {
    name : "shiwei",
    age : 3,
    sex : '男'
  }
  
  //对象转化为json字符串--->{"name":"shiwei","age":3,"sex":"男"}
  var jsonUser = JSON.stringify(user)
  
  //json 字符串转化为对象  参数为 json 字符串
  var obj = JSON.parse('"name":"shiwei","age":3,"sex":"男"')

```

JSON 和 JS 对象的区别

```javascript
var obj = {a:'hello', b:'hi'};
var json = '{"a":"hello", "b":"hi"}' // json 是个字符串（本质就是一堆字符串解析）
```

### 5.3、Ajax

+ 原生的 js 写法    xhr 异步请求
+ jQuery封装好的 方法 $("#name").ajax("")
+ axios 请求



------

## 6、面向对象编程

> 原型对象

javaScript 、Java、c# 。。。。面向对象；javaScript有些区别！

+ 类：模板
+ 对象：具体的实例

在 JavaScript 这个需要大家换一下思维方式！

原型：

```javascript
var Student = {
    name: "a",
    age: 3,
    run: function() {
        console.log(this.name +"run")
    }
};
var xiaoming = {
    name:xiaoming
};

xiaoming._proto_ = Student;
// 小明的原型是Student,可以使用Student中的run方法
// 简单说就是小明继承了它爹Student

var Bird = {
    fly: function() {
        console.log(this.name + "fly....");
    }
};

// 小明的原型是 Bird
xiaoming.__proto__ = Bird;
```

> class 继承

class 关键字，是在  ES6  引入的

1、定义一个类，属性，方法

```javascript
//定义一个学生类
class Student {

    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('hello')
    }
   
}
var xiaoming = new Student("xiaoming");
var xiaohong = new Student("xiaohong");
xiaoming.hello()

```

2、继承

```javascript
class Student {

    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('hello')
    }
    
}
class xiaoStudent extends Student {
    
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    myGrade() {
        alert('我是小学生')
    }
    
}

var xiaoming = new Student("xiaoming");
var xiaohong = new xiaoStudent("xiaohong", 1);
xiaoming.hello()
// xiaohong 的原型对象（他爹）是Student
```

> 原型链
>
> [博客圆---javascript——原型与原型链](https://www.cnblogs.com/loveyaxin/p/11151586.html)

简单的回顾一下构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。——摘自《javascript高级程序设计》

**在查找属性的时候查到 Object.prototype 就可以停止查找了，所以就不会无线查找，不会一直循环了。**


[原型链](https://img2018.cnblogs.com/blog/850375/201907/850375-20190708153139577-2105652554.png)


------

## 7、操作BOM对象(重点)

BOM：浏览器对象模型

> 浏览器介绍

JavaScript 和 浏览器关系？

JavaScript诞生就是为了能够让他在浏览器中运行

BOM：浏览器对象模型（内核）

+ IE 6–11
+ Chrome
+ Safari
+ Firefox
+ Opera

> window (重要)

window 代表浏览器窗口

```javascript
window.alert(1)
undefined
window.outerHeight  // 外部
995
window.outerWidth
1018
window.innerHeight  // 内部
444
window.innerWidth
1003
```



> Navigator  （不建议使用）

navigator, 封装了浏览器的信息

大写Navigator是类，小写`navigator`是对象

```javascript
navigator.appName    // 名字
'Netscape'
navigator.appVersion // 版本号
'5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
navigator.userAgent  // 用户浏览信息
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
navigator.platform   // 运行浏览器的操作系统和（或）硬件平台
'Win32'
```

大多数时候，我们不会使用`navogator`对象，因为会被人为修改，不建议使用这些属性来判断和编写代码

> screen 

代表计算机屏幕尺寸

```javascript
screen.width
2048 
// 2048 px
screen.height
1152
// 1152 px
```

> location (重要)

location 代表当前页面的URL信息

```javascript
//location 的一些属性
host: "www.baidu.com"
hostname: "www.baidu.com"
href: "https://www.baidu.com/"
protocol: "https:"
reload: ƒ reload() //刷新网页

//设置新地址
location.assign("https://app2004.acapp.acwing.com.cn/user/account/login/")
```



> document (内容 DOM， 文档对象模型)

document 代表当前的页面，HTML DOM文档树

```javascript
document.title
'百度一下，你就知道'
document.title = "努力挣钱和吃饭，要不然就不被xh"  // 自定义title，也就是导航栏的内容
'努力挣钱和吃饭，要不然就不被xh'
```

**获取具体的文档树节点**

```html
<dl id="app">
    <dt>Java</dt>
    <dd>JavaSE</dd>
    <dd>JavaEE</dd>
</dl>

<script>
    var dl = document.getElementById('app')
</script>
```



>  获取cookie（客户端的本地信息）

不安全，会被劫持

```html
<script src="aa.js"></script>
<!--恶意人员：获取你的cookie上传到他的服务器-->
```

服务器端可以设置 cookie: httpOnly       (只读，不能修改)

```javascript
document.cookie
```

```
> 'BIDUPSID=B8683E2A9F4C1F3886911F077A0A1102; PSTM=1641251220; BAIDUID=B8683E2A9F4C1F38C871142E273C7207:SL=0:NR=10:FG=1; BD_UPN=12314753; H_PS_PSSID=37545_36549_37352_34812_37486_36807_37404_36786_37536_37498_26350_37446; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BAIDUID_BFESS=B8683E2A9F4C1F38C871142E273C7207:SL=0:NR=10:FG=1; COOKIE_SESSION=3405_0_9_9_21_10_1_0_9_8_6_5_3906678_0_0_0_1665840096_0_1665843476%7C9%232539_5_1661438898%7C2; delPer=0; BD_CK_SAM=1; PSINO=3; BA_HECTOR=0520al2g8lak8kal018hfbi01hklg8v1b; ZFY=R0v3mV:A3kLPM6oCMd:BJTo:AI7QCqLLzIgO:AI2tY0ITn8:C; H_PS_645EC=b8fb%2B7%2BrcoNJDZr2BnHdidyAlYZ0SNLLncRf%2BB45PZnt59SFK6fbf98nhvQ; BD_HOME=1'
```

劫持cookie原理

```html
<script src="a.js"></script>
<!--恶意人员： 获取你的cookie上传到他的服务器上-->
```

服务器端可以设置cookie:httpOnly



> history (不建议使用)

history 代表浏览器的历史纪录

```javascript
history.back() // 返回
history.forward() // 前进
```



------

## 8、操作DOM对象(重点)

DOM：文档对象模型（一颗文档树 -- 将嵌套关系看成树形结构）。

> 核心

浏览器网页就是一个Dom树形结构

+ 更新：更新Dom节点

+ 遍历Dom节点：得到Dom节点
+ 删除：删除一个Dom节点
+ 添加：添加一个新的节点

要制作一个Dom节点，就必须要先获得这个Dom节点

> 获得Dom节点

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>

	</head>
	<body>
		<div id="father">
			<h1>标题一</h1>
			<p id="p1">p1</p>
			<p class="p2">p2</p>
		</div>

		<script type="text/javascript">
			'use strict'
			// 对应css选择器
			// 标签选择器
			var h1 = document.getElementsByTagName('h1');
			// ID选择器
			var p1 = document.getElementById('p1');
			// 类选择器
			var p2 = document.getElementsByClassName('p2');
			// ID选择器
			var father = document.getElementById('father');
			// 获取父节点下所有子节点属性
			var childrens = father.children;
            // var childrens = father.children[index]; index 可打印出来
			// 获取第一个节点
			p1.firstChild;
			// 获取最后一个节点
			p1.lastChild;
		</script>
	</body>
</html>
```

这是原生代码，之后尽量使用jQuery()；

> 更新节点

```html
<div id="id1">

</div>

<script>
    var id1 = document.getElementById('id1')
</script>
```

> 操作文本（动态操作页面样式）

```html
// ID选择器
var p1 = document.getElementById('p1');
// 向p1更新值
p1.innerText = 'xhxhxhxhxhmyl';  // 更新内容
// 向p1更新html
p1.innerHTML = <strong>123</strong>;  // 可以解析HTML文本
```

> 操作 JS

```javascript
// 设置字体颜色
p1.style.color = 'yellow'; // 属性使用 字符串 包裹
// 设置字体大小
p1.style.fontSize = '50px';  // - 转 驼峰命名问题
// 设置内边距
p1.style.padding = '2em'; // 盒子模型，内边距
```

> 删除节点

**删除节点的步骤**：先获取父节点，再通过父节点删除自己

```html
<div id="father">
    <h1>标题一</h1>
    <p id="p1">p1</p>
    <p class="p2">p2</p>
</div>
<script>
    var self = document.getElementsById('p1')
    var father = p1.parentElement;
    father.removeChild(self)
    
    // 删除是一个动态的过程
    father.removeChild(father.children[0])
    father.removeChild(father.children[1])
    father.removeChild(father.children[2])
</script>
```

注意：删除多个节点时，children是在时刻变化的（类似于vector，会动态变短），删除节点的时候一定要注意

> 插入节点

我们获得了某个Dom节点，假设这个dom节点是空的，我们通过innerHTML就可以增加一个元素，但是这个Dom节点已经存在元素了，我们就不能这么做，因为会覆盖。

一般通过追加操作。

追加（已存在）

```html
// 将 id = "js" 移到（追加）到 list 里面 （因为存在id js，所以是移动）
<P id="js">JavaScript</P>
<div id="list">
    <p id="se">JavaSE</p>
    <p id="ee">JavaEE</p>
    <p id="me">JavaME</p>
</div>

<script>
    var js = document.getElementById('js'); // 已存在的节点
    var list = document.getElementById('list');
    list.appendChild(js); //追加到后面
</script>
```

创建一个新的标签，实现插入（任何位置都可以）

```html
<script>
    var js = document.getElementById('js');//已经存在的节点
    var list = document.getElementById('list');
    //通过JS创建一个新节点
    var newP = document.createElement('p')//创建一个p标签
    newP.id = 'newP';
    newP.innerText = 'Hello,shiwei'
    // 创建一个新的标签，并插入
    // list.appendChild(newp); // 这里可在页面内写
    // 创建一个新标签节点
    var myScript = document.createElement('script');
    myScript.setAttribute('type','text/javascript')
    // list.appendChild(myScript);  // 这里可在页面内写
    // 可以创建一个 Style 标签
    var myStyle = document.createElement('style');// 可以创建一个空Style标签
    myStyle.setAttribute('type','text/css');
    myStyle.innerHTML = 'body{background-color:chartreuse}';// 设置标签内容
    // 将创建的标签放到 head 里面 [0] 是类似于编号
    document.getElementsByTagName('head')[0].appendChild(myStyle)
    
	// 总结 就是 js 可以干 html 和 css 的所有事情
</script>
```

插入指定位置（insertBefore）

```javascript
var ee = document.getElementById('ee');
var js = document.getElementById('js');
var list = document.getElementById('list');

//要包含的节点,insertBefore(newNode,targetNode)
list.insertBefore(js,ee);
```



------

## 9、操作表单 (验证)

> 表单是什么 ？  form  DOM树

+ 文本框 text
+ 下拉框 select
+ 单选框 radio
+ 多选框 checkbox
+ 隐藏域 hidden
+ 密码框 password

>  表单的目的：提交信息

获得要提交的信息

```html
<form action="post">

  <p>
      <span>用户名：</span> <input type="text" id="username">
  </p>
  <!--多选框的值，就是定义好的value-->
  <p>
      <span>性别：</span>
      <input type="radio" name="gender" value="man" id="boy">男
      <input type="radio" name="gender" value="woman" id="girl">女
  </p>

</form>

<script>
  var input_text = document.getElementById('username');
  
  var boy_radio = document.getElementById('boy');
  var girl_radio = document.getElementById('girl');
  
  // 得到输入框的值
  // input_text.value
  // 修改输入框的值
  input_text.value = '123'
  
  // 对于单选框，多选框等固定的值，boy_radio.value只能取到当前的值，不能确定是否被选
  boy_radio.checked;// 查看返回的结果，是否为true，如果为true，则被选中。
  girl_radio.checked = true;// 赋值
  
</script>
```

> 提交表单 ，md5加密密码 表单优化 （我记得 y总 的 jwt 也可以加密 + 验证，比较主流）

### 9.1、按钮绑定

```html
<head>
	<meta charset="utf-8">
	<title></title>
    <!-- md5的工具类 -->
	<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
</head>
<body>
	<form id="form1"  action="#" method="POST">
		<p>
			<span>用户名：</span><input type="text" id="username" name="username"><br>
			<span>密码：</span><input type="password" id="input_password">
			<input type="hidden" id="md5_password" name="password">
		</p>
		<!-- 按钮绑定事件 当被点击触发事件-->
		<button type="submit" onclick="f()">提交</button>
	</form>
	<script type="text/javascript">
		'use strict'
		function validate() {
	        if(confirm("是否提交")){
	            return true;
	        }else{
	            return false;
	        }
        }
		function f() {
			var uname = document.getElementById('username');
			var input_pwd = document.getElementById('input_password');
			var pwd = document.getElementById('md5_password');
			// md5算法加密
			pwd.value = md5(input_pwd.value);
			console.log(uname.value + '+' + pwd.value);
			if(validate()){
            	document.getElementById("form1").submit();
        	}
		}
	</script>
</body>
```

### 9.2、表单绑定

md5加密验证，表单优化（设置 hidden 类型）

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
	</head>
	<body>
		<!-- 表单绑定提交事件 -->
		<!-- onsubmit=绑定一个提交检测的函数， -->
		<!-- 将这个结果返回给表单，使用onsubmit接收 -->
		<form action="#" method="POST" onsubmit="return f()">
			<p>
				<span>用户名：</span><input type="text" id="username" name="username"><br>
				<span>密码：</span><input type="password" id="input_password">
				<!-- 使用隐藏域提交，这样密码框不会在提交一瞬间变长，直接是面试常考 -->
				<input type="hidden" id="md5_password" name="password">
			</p>
			<!-- 绑定事件 当被点击触发事件-->
			<button type="submit" >提交</button>
		</form>

		<script type="text/javascript">
			'use strict'

			function f() {
				var uname = document.getElementById('username');
				var input_pwd = document.getElementById('input_password');
				var pwd = document.getElementById('md5_password');
				// md5算法
				pwd.value = md5(input_pwd.value);
				// 提交到控制台
				console.log(uname.value + '+' + pwd.value);
				// 允许表单提交true，阻止表单提交false
                // 可以自己校验判断表单内容
				return true;
			}
		</script>
	</body>
</html>
```



------

## 10、jQuery

jQuery（write less, do more.）

jQuery库， 里面存在大量的JavaScript函数（说白了就是封装函数，直接调用，方便使用）

> 获取jQuery

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--在线cdn-->
    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
</head>
<body>
    <!-- 公式： $(selector).action -->
    <a href="" id="test-jquery">点我</a>

    <script>
        // document.getElementById('id');
        // 选择器就是css的选择器
        $('#test-jquery').click(function (){
            alert('hello,jquery');
        })
    </script>

</body>
</html>
```

注意:在线cdn

> 选择器

```html
<script>
    // 原生js，选择器少，麻烦
    // 标签
    document.getElementsByTagName();
    // id
    document.getElementById();
    // 类
    document.getElementsByClassName()

    // jQuery  css中的选择器 它 都能用
    $('p').click(); // 标签选择器
    $('#id1').click(); // id选择器
    $('.class').click(); // class选择器
</script>
```

文档工具站  https://jquery.cuishifeng.cn/

```javascript
$(selector).action() // 常见用法
```



> 事件

鼠标事件，键盘事件，其他事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <style>
        #divMove{
            width:500px;
            height:500px;
            border:1px solid red;
        }
    </style>

    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
</head>
<body>
<!--要求：获取鼠标当前的一个坐标-->
mouse:<span id="mouseMove"></span>
<div id="divMove">
    在这里移动鼠标试试
</div>

<script>
    // 当网页元素加载完毕之后响应事件
    // $(document).ready(function () {
    //
    // })
    // 其简写
    $(function () {
        $('#divMove').mousemove(function (e) {
            $('#mouseMove').text('x:'+e.pageX + 'y:'+e.pageY)
        })
    });
</script>

</body>
</html>
```

> 操作DOM

**节点文本操作**

```javascript
// eg:
$('#ID li[name=1]').text(); // 获取ID中名字为1的li标签的值
$('#ID li[name=1]').text(123); // 设置ID中名字为1的li标签的值为123
$('#ID').html('<strong>123</strong>');  // 设置值
$('#ID li[name=1]').css("color","red");  // 设置CSS属性
// eg:
$('#test-ul li[name=python]').text(); // 设置值
$('#test-ul li[name=python]').text('设置值'); // 设置值
$('#test-ul').html(); // 获得值
$('#test-ul').html('<strong>123</strong>'); // 设置值
```

**css操作**

```javascript
$('#test-ul li[name=python]').css("color","red");
```

**元素的显示和隐藏：**本质增加了属性 **display = none;**

```javascript
$('#test-ul li[name=python]').show()
$('#test-ul li[name=python]').hide()
```

**娱乐测试**

```javascript
$(window).width()
$(window).height()
```



> 小技巧

1、如何巩固JS (看jQuery源码，看游戏源码)

2、巩固HTML,CSS (扒网站)

---

## 一些问题

### 箭头函数的this

箭头函数会屏蔽 当前匿名函数 的 this,如果调用了this,则是调他的父级的this。

> 下面的代码就是 调用了window的this

```javascript
window.birth = 2002;
    let kuangshen = {
        name: '石玮',
        birth: 2002,
        age:() => {
            let now = new Date().getFullYear();
            return now - this.birth;
        }
    };
    console.log(kuangshen.age());
```

```javascript
20
```
