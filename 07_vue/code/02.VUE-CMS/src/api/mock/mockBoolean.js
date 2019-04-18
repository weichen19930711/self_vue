var Mock = require("mockjs")

var data = Mock.mock({
    "flag1|1": false, //值为 true 的概率是 1/2，值为 false 的概率同样是 1/2
    "flag2|1-0": true //值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)
})

console.log(data)