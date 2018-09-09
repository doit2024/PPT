title: css
speaker: wOOdy
url: https://github.com/ksky521/nodeppt
transition: cards
files: /js/demo.js,/css/demo.css

[slide]

# CSS

[slide]

#####《WebKit技术内幕》
----
* ... -> DOM树 -> <orange>CSS解释器</orange> -> RenderObject树 -> ... {:&.rollIn}
* <img src="/img/RenderTree.png">

[slide]

# render pipeline
<img src="/img/render_pipeline.png">
----
* Javascript: 载入与执行JS/CSS {:&.rollIn}
* Style: 根据js&css计算style
* Layout: 当style套入元素时，检查是否影响到排列，重排
* Paint: 排列后重绘变化元素
* Composite: 重新合成所有元素

* demo: static/css_repaint

[slide]

# CSS Houdini
----
* 提供一系列的 API将CSS解放 {:&.rollIn}
<img src="/img/houdini-apis.png">


[slide]

# CSS Houdini API
----
* CSS Properties and Values API {:&.bounceIn}
  - 变量 「demo: static/css_houdini_varible」

* Box Tree API （获取更详细的盒模型信息）
  - fragments拆分 「demo: static/css_houdini_box」

* CSS Layout API
```js
// js
registerLayout('selfDefined', class extends Layout { ... }
// css
.wrapper { display: layout('selfDefined'); }
```

[slide]

# CSS Houdini API
----
* CSS Painting API {:&.rollIn}
```js
// js
registerPaint('simpleRect', class {
    static get inputProperties() { return ['--rect-color'] }
    paint(ctx, size, properties) {
      const color = properties.get('--rect-color')
      ctx.fillStyle = color[0]
      ctx.fillRect(0, 0, size.width, size.height)
    }
})
// css
.rect {
    --rect-color: red;
    width: 50px;
    height: 50px;
    background-image: paint(simpleRect);
}
```

* Worklets
```js
? layoutWorklet.addModule('selfDefined.js')
CSS.paintWorklet.addModule('simpleRect.js')
```
* 「demo: static/css_houdini_sky」 


[slide]

# [css-doodle](http://www.w3cplus.com/css/create-patterns-with-css-doodle.html)

[slide]

# Less
----
* 「demo: demo/less」

[slide style="background-image:url('/img/bg1.png')"]

## BFC
## GFC
## IFC
## FFC

[slide style="background-image:url('/img/bg1.png')"]

# 全景图

[slide style="background-image:url('/img/bg1.png')"]

# url()： background content {:&.flexbox.vleft}
* 埋点统计
```css
.link:active::after {
  margin: 100px 100px;
  color: red;
  content: url(http://192.168.1.100:8888/count.php?action=visit);
}
```
* css攻击

[slide style="background-image:url('/img/bg1.png')"]

## 性能优化


[slide style="background-image:url('/img/summer.jpg')"]

# END