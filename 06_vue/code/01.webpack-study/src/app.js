//webpack ./src/app.js -o ./dist/bundle.js
console.log('ok')

import './css/index.css'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

class Person {
    static info = {
        name: 'zs',
        age: 18
    }
}

console.log(Person.info)