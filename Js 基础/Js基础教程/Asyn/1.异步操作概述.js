/**
 * 
 * 1.单线程模型
 * 2.同步任务和异步任务
 * 3.任务队列和事件循环
 * 4.异步操作的模式
 * 
 **/

//5.异步操作的流程控制
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