/*
nodejs require原理。当我们require一个文件，经过文件路径分析，得到的文件路径为一个文件，那么按照文件后缀名，
依次引入xx.js，xx.json, xxx.node.
经过文件路径分析，得到的文件路径为一个文件夹或者一个包。此时，nodejs的处理方式为：
1、在当前目录下查找package.json，然后加载package.json中main指定的文件。
2、如果main指定的文件错误或者没有package.json，则查找当前目录下的index文件，
   然后依次查找index.js、index.json、index.node。
3、如果目录分析中没有查到到任何文件，则自定义模块进入下一个文件的加载。如果模块路径数组都查找完了，
   还是没找到相应的文件，则报错。（路径数组：['c:\\nodejs\node_modules', 'c:\\node_modules']）

npm install 安装package.json文件中的所有依赖模块
*/
import $ from 'jquery'

import './css/index.css'
import './css/index.less'
import './css/index.scss'

$(function() {
    $("li:odd").css('backgroundColor', 'red')
    $("li:even").css('backgroundColor', function(){
        return '#' + 'D97634'
    })
})