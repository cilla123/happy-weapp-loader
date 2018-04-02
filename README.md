# happy-weapp-loader
小程序类似于vue的写法的编译器

## 安装

```
npm install happy-weapp-loader
```

## webpack的配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.happy$/,
        loader: 'happy-weapp-loader'
      }
    ]
  }
}
```

## Demo

大家可以去我的另外一个分支[https://github.com/cilla123/happy-weapp-template.git](https://github.com/cilla123/happy-weapp-template.git)进行下载运行，以后版本会迭代脚手架，分开环境打包。

1. 先进入happy-weapp-template目录下，进行```npm install```。
2. ```npm run dev```生成**dist**目录。
3. 打开微信调试工具，然后打开**dist**，就可以看到效果了。

