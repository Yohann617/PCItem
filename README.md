# vue-pc-item

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 中文

1.静态资源放在static中，如images、本地json数据：

原因：在webpack中会将图片图片来当做模块来用，因为是动态加载的，所以url-loader将无法解析图片地址，然后npm run dev 或者npm run build之后导致路径没有被加工

解决办法：
    将图片放到static目录下，但必须写成绝对路径如images:[{src:”/static/1.png”},{src:”/static/2.png”}]
    引入json文件：
        import recommendListData from '../../../../static/json/recommend-list.json'

2.vue UI库选择：

(1)iView:90分 -- 推荐
    https://www.iviewui.com/

(2)Vue-Blu:85分
    https://chenz24.github.io/vue-blu/#/

(3)element UI:80分 -- 饿了么提供
    http://element.eleme.io/#/zh-CN/component/installation

(4)N3：70分
    https://n3-components.github.io/N3-components/component.html

(5)AliTelecom UI：70分
    https://aliqin.github.io/atui/docs/atui/introduce

