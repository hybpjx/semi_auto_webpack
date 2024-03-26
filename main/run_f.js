const fs = require('fs');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

// 获取 所有的模块  这里使用txt 避免太大 出现死机的情况
let {modules_list, func_dict} = require('./loders.js')

//业务代码
s = func_call("4f52")
s = func_call("7ded")
console.log(modules_list)


var error_func_list = []
let func_dicts_str = 'let func_dict = {'


modules_list.map(function (index) {
    try {
        func_dicts_str += `"${index}":${func_dict[index].toString()},\n`;
        console.log(`写入${index}成功!`);
    } catch (err) {
        console.log(index, '写入失败')
        error_func_list.push(index)
    }
})

let loaderCode = fs.readFileSync("./loders.js", 'utf-8')
let lines = loaderCode.split('\n');
// 移除第一行和最后一行
loaderCode = lines.slice(1, -1).join("\n");


fs.writeFileSync('result.js', func_dicts_str + "};\n" + loaderCode, (err => {
    console.log(err)
}))

console.debug(`已写入${modules_list.length}个模块,未写入模块>>>${error_func_list.toString()}`)

