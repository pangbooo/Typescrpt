/**
 * 基础数据类型：
 *              1.数据 
 *              2.字符串
 *              3.布尔值
 *              4.undefined ==> 未定义，所以此处暂时没有值
 *              5.null      ==> 空值，此处的值为空
 *              6.对象
 *                  - 狭义对象（object）
 *                  - 数组   （array）
 *                  - 函数   （function）
 **/

 /**
  * 
  * typeof 运算符 
  * instanceof 运算符
  * Object.prototype.tostring() 运算符
  * 
  **/

  typeof 123            //number
  typeof '123'          //string
  typeof false          //boolean
  typeof undefined      //undefined
  typeof null           //object
  typeof function(){}   //function
  typeof {}             //object
  typeof []             //object
  typeof window         //object


  //区别{}、[]
  var a = {}
  var b = []
  a instanceof Array //fales
  b instanceof Array // true

