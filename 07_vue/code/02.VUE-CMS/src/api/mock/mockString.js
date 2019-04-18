var Mock = require('mockjs')
var data = Mock.mock({
    'names|1-10': "test"
})
var data2 = Mock.mock({
    'ages|3': '1'
})
//JSON.stringify 把Object 转化为 json字符串
console.log(JSON.stringify(data, null, 4))
console.log(data)
console.log(typeof (JSON.stringify(data2, null, 4)))
console.log(typeof data2)