/**
 * 
 * then方法 => 定义在原型对象Promise.prototype上的。
 *         => 返回的是一个【新的Promise对象】(因此可以链式调用)
 * 
 **/

//第一个回调函数完成以后，会将【返回结果】作为参数，传入第二个回调函数。
getJSON('./posts.json').then(function(json){
    return json.post;
}).then(function(post){
    console.log(post)
});

//前一个回调函数 返回一个promise对象（即有异步操作）

getJSON('./').then(function(post){
    return getJSON(post.commentUrl)
}).then(function(comment){
    console.log("resolved: ", comments);
},function(error){
    console.log("error: ", error);
})
//第二个then方法指定的回调函数，就会等待这个新的(第一个then返回的)Promise对象状态发生变化。
//如果变为resolved，就调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数。

//箭头函数书写结构清晰
getJSON('./').then(
    post =>  getJSON(post.commentUrl)
).then(
    comment => console.log('resolve', comment),
    error => console.log('error',error)
)

