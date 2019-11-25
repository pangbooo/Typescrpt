/**
 * 
 * null 和 undefined
 * 
 **/

 // null是一个表示“空”的对象，转为数值时为0；
 Number(null) //0
 5 + null     //5

//原因：首先，第一版的 JavaScript 里面，null就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。
//     其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果null自动转为0，很不容易发现错误
//     因此，他又设计了一个undefined


 //undefined是一个表示"此处无定义"的原始值，转为数值时为NaN。
 Number(undefined) //NaN
5 + undefined //NaN


 /**
  * 
  * 布尔值
  * 
  **/

  //false (其他都是true)
  undefined
  null
  false
  0
  NaN
  ""
