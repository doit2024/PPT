title: VUE最佳实践
speaker: wOOdy
url: https://github.com/ksky521/nodeppt
transition: cards
files: /js/demo.js,/css/demo.css

[slide]

# VUE最佳实践
## 演讲者：wOOdy

[slide]

* 组件拆分 {:&.flexbox.vleft}
* container & UI 组件
* props封装
* 公共组件逻辑复用
* v-model
* Object.freeze()
* require.context()
* async await
* bus 少用

[slide]

# 解决if嵌套
```js
if (a) {
  if (b) {
    // AAAA
  } else {
    // BBBB
  }
} else {
  // CCCC
}
```

```js
if (!a) {
  // CCCC
  return
}
if (!b) {
  // BBBB
  return
}
// AAAA
```

```js
if (a === 'a') {
  // AAAA
}
if (a === 'b') {
  // BBBB
}
```
