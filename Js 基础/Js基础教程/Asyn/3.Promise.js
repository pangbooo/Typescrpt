/**
 * 
 * 1.概述
 * 
 **/

// Promise 是一个对象，也是一个构造函数。
function f1(resolve, reject){
    //...
}

var p1 = new Promise(f1);
//f1里面是异步操作的代码。
//返回的p1就是一个 Promise 实例。
//Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。

//Promise 实例有一个then方法，用来指定下一步的回调函数。
p1.then(f2);
//f1的异步操作执行完成，就会执行f2

/**
 * 
 * 2.Promise 对象的状态
 * 
 **/

//异步操作未完成（pending）
// 异步操作成功（fulfilled）
// 异步操作失败（rejected）

//Promise 的最终结果只有两种。
//1） 异步操作成功，Promise 实例传回一个值（value），状态变为fulfilled。
//2） 步操作失败，Promise 实例抛出一个错误（error），状态变为rejected。

/**
 * 
 * 3.Promise 构造函数
 * 
 **/

var promise = new Promise(function(resolve, reject){
    if(1){ /*异步成功 */
        resolve(value);
    }else {
        /*异步成功 */
        reject(value);
    }
});

//Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己实现。
//resolve ==> 将Promise实例的状态从“未完成”变为“成功”（即从pending变为fulfilled），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。
//reject ==> 将Promise实例的状态从“未完成”变为“失败”（即从pending变为rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

 /**
 * 
 * 6.实例：图片加载
 * 
 **/
 var preloadImage = function(path) {
     return new Promise(function(resolve, reject){
         var image = new Image();
         image.onload = resolve;
         image.onerror = reject;
         image.src = path;
     })
 }

 preloadImage('./a.jpg').then(function(e){document,body.append(e.target)})
                        .then(function(){ console.log('success loaded') })
// 图片加载成功以后，onload属性会返回一个事件对象，因此第一个then()方法的回调函数，会接收到这个事件对象。该对象的target属性就是图片加载后生成的 DOM 节点。


//8.微任务
//Promise 的回调函数属于异步任务，会在同步任务之后执行。


//但是，Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。
//它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮事件循环。
//这意味着，微任务的执行时间一定早于正常任务。
setTimeout(function() {
    console.log(1);
  }, 0);
  
  new Promise(function (resolve, reject) {
    resolve(2);
  }).then(console.log);
  
  console.log(3);

  //3
  //2
  //1

