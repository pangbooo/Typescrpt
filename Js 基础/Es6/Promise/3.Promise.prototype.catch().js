/**
 * 
 * Promise.prototype.catch === .then(null, rejection) === .then(undefined, rejection)
 * 用于指定发生错误时的回调函数
 **/


getJSON('./').then(function(posts){

}).catch(function(errpr){
    console.log('error', error);
    //catch捕获错误
    //（.then的错误也可以捕获）
});

//EX1： 可以发现reject方法的作用，等同于抛出错误。
const promise = new Promise(function(resolve, reject){
    throw new Error('test');
});


// === try catch
const promise = new Promise(function(resolve, reject) {
    try{
        throw new Error('test')
    }catch(e){
        reject(e)
    }
})

// === reject
const promise = new Promise(function(resolve, reject) {
    reject(new Error('test'))
})

promise.catch(function(error){
    console.log(error);
});

//Ex2: Promise 状态确定后，就不会更改
const promise = new Promise(function(resolve, reject){
    resolve('ok');
    throw new Error('test')
});

promise
  .then(function(value) { console.log(value) })
  .catch(function(error) { console.log(error) });
//ok

//Ex3: Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止
getJSON('/post/1.json').then(function(post) {
    return getJSON(post.commentURL);
  }).then(function(comments) {
    // some code
  }).catch(function(error) {
    // 处理前面三个Promise产生的错误
    //(getJSON、then、then)
  });


  //Ex4: 推荐第二种catch， 可以捕获then的错误，书写格式清晰
  promise.then(function(data){
      //success
  },function(error){
     
  })

  promise.then(function(data){
      //success
  }).catch(function(error) {
     //error
  })

  //Ex5: “Promise 会吃掉错误
  const someAsyncThing = function(){
      return new Promise(function(resolve, reject){
          resolve(x+2)
      })
  }

  someAsyncThing().then(function() {
    console.log('everything is great');
  });

  setTimeout(() =>  console.log(123), 2000);

  //
  const promise = new Promise(function (resolve, reject) {
    resolve('ok');
    setTimeout(function () { throw new Error('test') }, 0)
  });
  promise.then(function (value) { console.log(value) });
//ok
//Uncaught Error: test
//setTimeout 下一论事件循环抛出错误

//
someAsyncThing()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
//oh no ReferenceError: x is not defined
//carry on

//
Promise.resolve()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
//carry on

//
someAsyncThing().then(function() {
    return someOtherAsyncThing();
  }).catch(function(error) {
    console.log('oh no', error);
    y + 2;
  }).then(function() {
    console.log('carry on');
  });
//oh no ReferenceError: x is not defined
// Uncaught (in promise) ReferenceError: y is not defined【退出进程】

//
someAsyncThing().then(function() {
    return someOtherAsyncThing();
  }).catch(function(error) {
    console.log('oh no', error);
    y + 2;
  }).catch(function(error) {
    console.log('carry on', error);
  })
  //oh no ReferenceError: x is not defined
  // carry on ReferenceError: y is not defined

  /**
   * 
   * 总结 ==>
   *  1)catch 可以捕获之前之前Promise实例的错，会报错 ，不会退出进程
   *  2) 如果有错误没有接 catch， 那么会报错， 并且退出进程
   *  3) catch 返回一个promise 可以继续接 then 方法
   * 
   * 
   **/