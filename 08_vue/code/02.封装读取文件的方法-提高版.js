const fs = require("fs")
const path = require("path")

function getFileByFPath(fPath, succCb, failCb){
    fs.readFile(fPath, "utf-8", (err, dataStr) => {
        if(err) {
            failCb(err)
            return 
        }
        succCb(dataStr)
    })
}

let fPath1 = path.join(__dirname, "../files/1.txt")
let fPath2 = path.join(__dirname, "../files/2.txt")
let fPath3 = path.join(__dirname, "../files/3.txt")
getFileByFPath(fPath1, function(dataStr) {
    console.log(dataStr)
}, function(err) {
    console.log(err.message)
})

// 需求： 先读取文件1，再读取文件2，最后再读取文件3
// 回调地狱
getFileByFPath(fPath1, function(dataStr) {
    console.log(dataStr)
    getFileByFPath(fPath2, function(dataStr) {
        console.log(dataStr)
        getFileByFPath(fPath3, function(dataStr) {
            console.log(dataStr)
        }, function(err) {
            console.log(err.message)
        })
    }, function(err) {
        console.log(err.message)
    })
}, function(err) {
    console.log(err.message)
})