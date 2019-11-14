/**
 * 
 * Promise.prototype.finally()
 * finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。
 * 
 **/

/**
 * 
 * Promise.all()
 * 将多个 Promise 实例，包装成一个新的 Promise 实例
 * 
 **/

//Ex1:
const p = Promise.all([p1, p2, p3])

//p的状态由p1、p2、p3决定，分成两种情况。

//（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

//（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。


//Ex2:
const databasePromise = connectDatabase();

const booksPromise = databasePromise.then(findAllBooks);

const userPromise = databasePromise.then(getCurrentUser);

Promise.all([booksPromise, userPromise])
        .then(([books, users]) => pickTopRecommendations(books, users))


//Ex3:
const p1 = new Promise((resolve, reject) => {
        resolve('hello')
    })
        .then(result => result)
        .catch(e => e)
    
    const p2 = new Promise((resolve, reject) => {
        throw new Error('p2 Error')
    }).then(result => result)
       .catch(e => e)
    
    
    Promise.all([p1, p2])
        .then(result => console.log(result))
        .catch(e => console.log(e))

//p1会resolved，p2首先会rejected
//p2 自己catch之后 返回一个新的Promise对象
//p2 指向这个新promise对象， 状态变为resolved

/**
 * 
 * Promise.race()
 * 
 **/

 const p = Promise.race([p1, p2, p3]);
 //只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数

 const p = Promise.race([
    fetch('/resource-that-may-take-a-while'),
    new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error('request timeout')), 5000)
    })
  ]);
  
  p
  .then(console.log)
  .catch(console.error);
  //5s 触发catch

  /**
   * 
   * Promise.allSettled() 
   * 等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。
   * 该方法返回的新的 Promise 实例，一旦结束，状态总是【 fulfilled 】
   * 
   **/

   const resolve = Promise.resolve(1);
   const reject = Promise.reject(2);

   const allSettledPromise = Promise.allSettled([resolve, reject]);
   allSettledPromise.then(function(results){
     console.log(results);
     //[ {status: 'fulfilled', value: 1}, {status: 'rejected', reason:'2'} ]
   })

   /**
    * 
    * Promise.any() 【 第三阶段的提案 】
    * 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。
    * 
    * **/

    /**
     * 
     * Promise.resolve()
     * 有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。
     * 
     **/
    

   //2）参数是一个thenable对象
   let thenable = {
    then: function(resolve, reject) {
      resolve(42);
    }
  };
  
  let p1 = Promise.resolve(thenable);
  p1.then(function(value) {
    console.log(value);  // 42
  });


    /**
     * 
     * Promise.reject()
     * Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
     * 
    **/
    const thenable = {
      then(resolve, reject) {
        reject('出错了');
      }
    };
    
    Promise.reject(thenable)
    .catch(e => {
      console.log(e === thenable)
    })
    // true
    //Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。
    //这一点与Promise.resolve方法不一致。


    /**
     * 
     * Promise.try【提案】
     * 同步的方法同步执行，异步方法异步执行
     * 
     * **/

     const f = () => console.log('now');
     Promise.try(f);
     console.log('next');
     //now
     //next


     //Ex2:
     function getUsername(userId) {
      return database.users.get({id: userId}) //此处返回一个promise对象
      .then(function(user) {
        return user.name;
      })
      .catch(error => console.log(error)) 
      //.catch 只能捕获异步错误
      //同步任务（比如数据库连接错误）就不得不用try...catch去捕获
    }

    //EX2更好的实现
    Promise.try(database.users.get({id: userId}))
            .then()
            .catch()
