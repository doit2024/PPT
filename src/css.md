title: css
speaker: wOOdy
url: https://github.com/ksky521/nodeppt
transition: cards
files: /js/demo.js,/css/demo.css

[slide]

# CSS
## 演讲者：邓维敏

[slide]

#####《WebKit技术内幕》章6
# CSS解释器和样式布局
---
### ... -> DOM树 -> CSS解释器 -> RenderObject树 -> ...
### 选择器、优先级、盒模型、包含块、CSSOM

[slide]

# Less

[slide]

# houdini
## 仅支持 localhost 或 https

[slide]

# 全景图

[slide style="background-image:url('/img/bg1.png')"]

## 使用背景
## BFC
## GFC
## IFC
## FFC

[slide]
## 埋点统计
----

```css
.link:active::after {
  margin: 100px 100px;
  color: red;
  content: url(http://192.168.1.100:8888/count.php?action=visit);
}
```

[slide]

# css攻击 {:&.flexbox.vleft}
## url()： background content

[slide]

## 性能优化
### ----是上下分界线
----

nodeppt是基于nodejs写的支持 **Markdown!** 语法的网页PPT，当前版本：1.4.5

Github：https://github.com/ksky521/nodeppt
