const fs = require('fs');
const { join } = require('path');
const fileName1 = join(__dirname, '02_const.js');
const fileName2 = join(__dirname, '03_array_desctructuring.js');
const writeFileName = join(__dirname, 'a.js');

fs.readFile(fileName1, 'utf8', function (error, data) {
    if (error) {
        throw error;
    }
    fs.readFile(fileName2, 'utf8', (error2, data2) => {
        if (error2) {
            throw error2;
        }
        let dataFileString = data + data2;
        fs.writeFile(writeFileName, dataFileString, 'utf8', function (error) {
            console.log('guirong写入完成！');
        })
    });
})




// 2. 使用Promise 实现
const fs = require('fs');
const { join } = require('path');
const fileName1 = join(__dirname, '02_const.js');
const fileName2 = join(__dirname, '03_array_desctructuring.js');
const writeFileName = join(__dirname, 'a.js');

function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            error ? reject(error) : resolve(data);
        });
    });
}
let data;
readFilePromise(fileName1)
    .then(data1 => {
        return readFilePromise(fileName2);
    })
    .then(data2 => {
        data += data2;
        return data;
    })
    .then(data => {
        fs.writeFile(writeFileName, data, 'utf8', error => {
            console.log('error :', error);  // error : null
        });
    })

    .catch(e => {
        console.log('出现了未处理的异常');
        console.log('e :', e);

    })

// 3. 原生 generator 函数实现

const fs = require('fs');
const { join } = require('path');
const fileName1 = join(__dirname, '02_const.js');
const fileName2 = join(__dirname, '03_array_desctructuring.js');
const writeFileName = join(__dirname, 'a.js');

let g;  // 全局变量 g 

function* joinFile() {
    let fileData1 = yield fs.readFile(fileName1, 'utf8', (error, data) => {
        g && g.next(data);
    });
    let fileData2 = yield fs.readFile(fileName2, 'utf8', (error, data) => {
        g && g.next(data);
    });

    fs.writeFile(writeFileName, fileData1 + fileData2, 'utf8', error => {
        console.log('写入成功!');
    })
}

g = joinFile();  // 当前 g 是遍历器
g.next();


// 4. Thunk 函数， 把回调函数提到 generator 函数外面。
// fs.readFile(fileName1, 'utf8', cb);

function readFileThunk(fileName) {
    return function (cb) {
        return fs.readFile(fileName, 'utf8', cb);
    }
}

// readFileThunk(fileName1)(function (error, data) {
//     console.log('data :', data);
// });

const fs = require('fs');
const { join } = require('path');
const fileName1 = join(__dirname, '02_const.js');
const fileName2 = join(__dirname, '03_array_desctructuring.js');
const writeFileName = join(__dirname, 'a.js');

function readFileThunk(fileName) {
    return function (cb) {
        return fs.readFile(fileName, 'utf8', cb);
    }
}

function* joinFileThunk() {
    let data1 = yield readFileThunk(fileName1);  // {value: f , done:false}
    let data2 = yield readFileThunk(fileName2);  // {value: f , done:false}
    fs.writeFile(writeFileName, data1 + data2, 'utf8', error => {
        console.log('error :', error);
    })
}

let gen = joinFileThunk();
gen.next().value((error, data) => {
    gen.next(data).value((error, data) => {
        gen.next(data);
    })
})

// 5. Thunk 的 自动执行
// 将上一块改成自执行函数


const fs = require('fs');
const { join } = require('path');
const fileName1 = join(__dirname, '02_const.js');
const fileName2 = join(__dirname, '03_array_desctructuring.js');
const writeFileName = join(__dirname, 'a.js');

function readFileThunk(fileName) {
    return function (cb) {
        return fs.readFile(fileName, 'utf8', cb);
    }
}

function* joinFileThunk() {
    let data1 = yield readFileThunk(fileName1);  // {value: f , done:false}
    let data2 = yield readFileThunk(fileName2);  // {value: f , done:false}
    fs.writeFile(writeFileName, data1 + data2, 'utf8', error => {
        console.log('error :', error);
    })
}

function run(gen) {
    let g = gen(); // 遍历器
    function nextStep(data) {
        let temp = g.next(data)
        if (!temp.done) {
            temp.value(function (error, data) {
                nextStep(data);
            });
        }
    }
    nextStep();
}

run(joinFileThunk);