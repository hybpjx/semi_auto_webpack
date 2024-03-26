# semi_auto_webpack
1. 将整体文件分成三个部分
   1. 模块列表
   2. 加载器列表
   3. 运行文件
2. 运行文件 运行加载器列表 加载器列表 运行模块列表
3. 然后运行我们的业务代码。
4. 然后根据重写的加载器 获取到所有有用的模块列表
5. 遍历模块列表。写入键和值
6. 重新进行封装 然后写入。
7. 完成加密。然后运行代码

# 使用说明

## loders.js

自己补好环境。然后

![](https://s2.loli.net/2024/03/26/5mOyt2Llo4ZTSJI.png)

如上图 在调度函数的开始加上如上代码。e为传参值。

```javascript
if (!modules_list.includes(e)) {
                modules_list.push(e)
}
```

其他正常使用即可。

ps： Loaders 第一行和最后一行 勿删  本人已做了处理

## run_f.js

修改以下部分。为你需要的模块

![](https://s2.loli.net/2024/03/26/47Wi16ehLPcTFRY.png)

## all_func_dicts.js

手动替换其中的字典为你的模块。如果网站中存在多模块。就自己加进去。

