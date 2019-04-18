var Mock = require("mockjs")

var data = Mock.mock({
    "student1|3": { //从属性值 object 中随机选取 count 个属性。
        "name": "zs",
        "age": 17,
        "sex": "男"
    },
    "student2|1-5": { //从属性值 object 中随机选取 min 到 max 个属性。
        "name": "ls",
        "age": 18,
        "sex": "女"
    }
})

console.log(data)