/**
 * 
 * 1.单线程模型
 * 单线程模型指的是，JavaScript 只在一个线程上运行。
 * 也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待
 * 
 **/

 /**
  * 
  * 2.同步任务和异步任务
  * 
  * 同步任务 ==> 同步任务是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。
  * 异步任务 ==> 异步任务是那些被引擎放在一边，不进入主线程、而进入任务队列的任务。
  *            (只有引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果），该任务（采用回调函数的形式）才会进入主线程执行。)
  * 
 **/

  /**
   * 
   * 3.任务队列和事件循环 
   * 任务队列 ==> 引擎提供一个任务队列（task queue），里面是各种需要当前程序处理的异步任务。
   *             ( 实际上，根据异步任务的类型，存在多个任务队列。为了方便理解，这里假设只存在一个队列。)
  **/


/**
 * 
 * 5.异步操作的流程控制 
 *
 **/
function async(arg, callback){
    console.log('参数是' + arg, '1s 后返回结果')
    setTimeout( function(){ callback( arg * 2 )}, 5000)
}
function final(value){
    console.log('完成', value);
}

async(1, function(){
    async(2, function(){
        final(3)
    })
})

// 5.1串行执行
var items = [1,2,3,4,5,6];
var results = [];

function async(arg, callback) {
    console.log('参数为 ' + arg +' , 1秒后返回结果');
    setTimeout(function () { callback(arg * 2); }, 1000);
  }
  
function final(value) {
    console.log('完成: ', value);
}

function series(item) {
    if(item){
        async( item, function(result){
            console.log('result', result)
            results.push(result);
            return series(items.shift());
        })
    }else{
        return final(results[results.length - 1]);
    }
}
series(items.shift());

//5.2并行执行
items.forEach(function(item) {
    async(item, function(result){
        results.push(result)
    })
})