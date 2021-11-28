function myReadFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err,data) => {
            if(err) reject(err);
            resolve(data.toString());
        })
    })
}

myReadFile('./test.txt').then(value => {
    console.log(value);
}, (err) => {
    console.log(err);
})