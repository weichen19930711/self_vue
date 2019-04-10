const fs = require("fs")
const path = require("path")
// 需求：你要封装一个方法，我给你一个要读取文件的路径，你这个方法能帮我读取文件，并把内容返回给我

/* let fPath = path.join(__dirname, "../files/1.txt")
fs.readFile(fPath, "utf-8", (err, dataStr) => {
    console.log(dataStr)
}) */

/**
 * 
 * @param {*} fPath 文件路径
 * @param {*} callback 回调函数callback 中，有两个参数，第一个参数，是 失败的结果；第二个参数是成功的结果
 *                     
 */
function getFileByFPath(fPath, callback){
    fs.readFile(fPath, "utf-8", (err, dataStr) => {
        if(err) return callback(err)
        callback(null, dataStr)
    })
}

let fPath = path.join(__dirname, "../files/4.txt")
getFileByFPath(fPath, (err, dataStr) => {
    if(err) {
        console.log(err.message)
        return 
    }
    let fContent = dataStr
    console.log(fContent)
});