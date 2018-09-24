title: ssr
speaker: wOOdy
url: https://github.com/ksky521/nodeppt
transition: cover-circle
files: /js/demo.js,/css/demo.css

[slide style="background-image:url('/img/bg1.png')"]
# SSR

[slide style="background-image:url('/img/bg1.png')"]
# web开发模式
----
* 前后分离
* 数据直出
* 服务端渲染 (优化到只有一次HTML请求)

- HTTP请求在前后端发出的差距？

[slide style="background-image:url('/img/bg1.png')"]
# 5W1H
----
* why：SEO、首屏渲染
* when：官网，博客，移动端，追求更快的内容到达时间
* who：大前端
* what：同构应用
* where：server/client
* how：怎么做

[slide style="background-image:url('/img/bg1.png')"]
# 前提须知
----
* side: server/client (data-server-rendered="true")
* server钩子: beforeCreate 和 created
* asyncData
* 避免状态单例, 交叉污染
* 缓存: 高并发访问，会大量占用服务端CPU资源

[slide]
# HOW
----
<img src="/img/vue-ssr.png">
* 「demo: /demo_ssr」 {:&.rollIn}


[slide]
# TODO
* nuxt
* SSR in react