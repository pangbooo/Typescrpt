
// const promise = new Promise(function(resolve, reject) {

//   if (1){/* 异步操作成功 */
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

// promise.then(function(value){

// },function(error){

// })

//Ex1
function timeout(ms){
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}

timeout(5000).then((value) => {
  console.log(value)
})

//Ex2: Promise 新建后就会立即执行。
var promise = new Promise((resolve, reject) => {
  console.log('promise');
  resolve();
})

promise.then(() => {
  console.log('then')
})

console.log('111')
//promise
//111
//then

//Ex3:异步加载图片
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function(){
      resolve(image)
    }

    image.onerror = function(){
      reject(image)
    }

    image.src = url;
  })
}

loadImageAsync('./1.jpg').then(value => console.log(value))


//Ex4: Ajax
const getJSON = function(url) {
  const promise =  new Promise(function(resolve, reject){
    const handler = function() {
      if(this.readyState !== 4){
        return
      }

      if(this.status === 200) {
        resolve(this.response);
      }else{
        reject(new Error(this.statusText));
      }
    }

    const client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();

  });
  return promise;
}

getJSON('./posts.json').then(function(json){
  console.log('content', json)
},function(error){
  console.log('error',error)
})

//Ex5: 一个异步操作的结果是返回另一个异步操作。
const p1 = new Promise(function(resolve, reject){
  setTimeout(() => reject(new Error('fail')), 3000)
});

const p2 = new Promise(function(resolve, reject){
  setTimeout(() => resolve(p1), 1000)
})

p2.then(result => console.log('result', result))
  .catch(error => console.log('error', error))
//fail 3s
//p2的状态由p1决定

//调用resolve或reject并不会终结 Promise 的参数函数的执行。


new Promise((resolve, reject) => {
  resolve(1);
  console.log(2)
}).then(value => console.log(value))
//2
//1
//立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。


//Ex6: return
new Promise((resolve, reject) => {
  return resolve(1);
  //后面不会执行
  console.log(2)
})
//resolve 或者 reject Promise的使命就结束了， 最后将之后的方法放到then。
//（所以加上return结束执行）