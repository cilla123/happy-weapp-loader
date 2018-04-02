# happy-weapp-loader
小程序类似于vue的写法的编译器

## 安装

```
npm install happy-weapp-loader
```

## webpack.config

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