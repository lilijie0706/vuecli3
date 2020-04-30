// 02.封装读取文件的方法-提高版.js
const fs = require('fs')
const path = require('path')

function getFileByPath(fpath, succCb, errCb) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) return errCb(err)
        succCb(dataStr)
    })
}

// getFileByPath(path.join(__dirname, './files/1.txt'), (data) => {


//     console.log(data + '娃哈哈，成功了！！！')
// }, function(err) {
//     console.log('失败的结果：' + err.message)
// })

getFileByPath(path.join(__dirname, './files/1.txt'), (data) => {
    console.log(data)
    getFileByPath(path.join(__dirname, './files/2.txt'), (data) => {
        console.log(data)
        getFileByPath(path.join(__dirname, './files/3.txt'), (data) => {
            console.log(data)
        })
    })

})