/**
 * 
 * 目录
 * 1.概述
 * 2.强制转换
 *      1）Number()
 *      2)String()
 *      3)Boolean() 
 * 
 * 3.自动转换
 * 
 * **/



/**
 * 
 * 1.概述
 * JavaScript 是一种动态类型语言，变量没有类型限制，可以随时赋予任意值。
 * 
 **/

 /**
  * 
  *2.强制转换
  *  
  **/

  // ==> Number()
  // 原始数据类型 
  Number('123') //123
  Number('1aa') //NaN

  Number(undefined) //NaN
  Number(null) //0

  //parseInt逐个解析字符，而Number函数整体转换字符串的类型。
  parseInt('42 cats') //42
  Number('42 cats') //NaN

  // 对象
  //简单的规则是，Number方法的参数是对象时，将返回NaN，除非是包含单个数值的数组。

  Number({a :1}) //NaN
  Number([1,2]) //NaN
  Number([1]) //1


  //1) 先调用valueOf()方法，（valueOf方法返回对象本身）。 如果返回的是原始类型数据，则直接使用Number
  //2) 如果 1 步 返回的还是对象， 则调用toString(). 如果返回的是原始类型数据，则直接使用Number
  //3) 如果 2 步 返回的还是对象， 就报错

// ==> String()
//String函数可以将任意类型的值转化成字符串

// 原始数据类型
String(123) //'123'
String('abd') //'abd'
String(true) //'true'
String(undefined) //'undefined'
String(null) //'null'

// 对象
