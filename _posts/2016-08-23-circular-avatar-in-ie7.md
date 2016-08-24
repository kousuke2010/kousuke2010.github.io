---
layout: post
title: "PC端设计稿上的圆形头像"
date: 2016-08-22 16:43:47 +0800
categories: web
tags: css
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
---
### 事情开始
社区来了份设计稿，设计稿上涉及到用户头像的显示，并且其上头像以圆形呈现，并且头像出现次数较多。

### 问题描述
* 页面需兼容至 IE 7
* css 中 border-radius 以及 background-size 仅兼容 IE9+，且偶尔在 IE9 上会出现 bug
* 网络上有 border-radius 和 background-size 的相关解决方案，但是实现前提比较多，部分需求无法完全满足，并且不可能在每个需要出现圆形头像的页面呈现该解决方案
* 对于后台针对上传头像文件生成圆形版本头像具备一定学习成本，无法快速使用

### 初步解决方案
* 对于 IE9+ 及其他兼容性好的浏览器直接使用 border-radius 和 background-size 实现圆形头像
* 对于 IE7 和 IE8 上以一个上层(比如`a`标签)包裹两张图片，一张用户头像作为底层头像，一张中心圆形透明周边白色覆盖层(png图片)以position定位遮罩层
* 针对 png 在低版本 IE 中的兼容
* 以 IEhack 的形式对相关文件进行加载

### 代码实例

#### html
```html
<div class="box">
    <div class="avatar avatar1"></div>
    <div class="avatar avatar2">
        <img src="http://kousuke2010.github.io/assets/201608/blankcircle.png" class="acover" />
        <img src="http://kousuke2010.github.io/assets/201608/08171100.jpg" />
    </div>
    <div class="clear"></div>
</div>
<a href="javascript:void(0);" class="ganrao">底层添加干扰底色</a>
<!-- 让png图片在IE6中正常显示 -->
<!--[if IE 6]>
    <script src="http://kousuke2010.github.io/assets/201608/DD_belatedPNG_0.0.8a-min.js"></script>
    <script type="text/javascript">
        $(function(){
            DD_belatedPNG.fix('body *').not(".box img");
        });
    </script>
<![endif]-->
```

#### css
```css
.ganrao{width:130px;display:block;color:#333;border:1px solid #999;border-radius:.3em;text-decoration:none;padding:3px 5px;margin:30px 12px;}
.ganrao:hover{background:#ccc;color:#f60}

/* 清除浮动创造高度 */
.clear{clear:both;}

/* 头像共同样式 */
.avatar{display:block;float:left;margin-right:12px;box-sizing:content-box;}

/* ie9+上的圆形头像 */
.avatar1{width:298px;height:298px;background:url(http://kousuke2010.github.io/assets/201608/08171100.jpg);background-size:100%;border-radius:50%;border:1px solid #ccc;}

/* ie7、ie8上的圆形头像 */
.avatar2,.avatar2 img{width:300px;height:300px;position:relative;}
.avatar2 img{position:absolute;top:0;left:0;}
.avatar2 img.acover{z-index:2;}
```

#### javascript
```javascript
$('.ganrao').click(function(){
    $('body').css('background','#ccc');
});
```

[Demo](http://s.codepen.io/kousuke/debug/rLgZVj)

### 实例在浏览器中的情况

#### IE7 & IE8
![IE7 & IE8](/assets/201608/08241127.jpg)

#### IE9+
![IE9+](/assets/201608/08241127-2.jpg)

### 实例缺陷
该实例也有一点问题，就是头像中空覆盖层周边颜色根据图片底色限定，如需更换只能替换另外一张图片，同时如果在头像上需要添加其他图标，比如等级、勋章等图标需要在其上放置更多图片以 posticon 和 z-index 进行定位，以下是底色干扰下状况：

![底色干扰下](/assets/201608/08241127-3.jpg)
