var Mock = require("mockjs")
var data1 = Mock.mock({
    'number1|+1' : 1,
    'number2|1-10' : 1,
    'number3|1-100.1-10': 1
})

console.log(data1)
