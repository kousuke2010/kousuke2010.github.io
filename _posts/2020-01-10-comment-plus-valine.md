---
layout: post
title: "添加valine评论插件"
date: 2020-01-10 16:04:52 +0800
categories: web
tags: js
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
published: true
---

今天刷了下几个大神的博客，自然而然的进行了评论，然后就想到自己的博客，似乎没有评论这一块，就打开了 `post.html` 模板文件，发现之前是有评论这东西的，但是之前用的是多说（duoshuo.com）评论插件，现在这家伙已经不存在了，也不知道什么时候消失的，导致之前的评论都没了，数据这东西有时候真的很难搞。

接着就必应了一下“多说的替代品”，找到了 `valina` 这玩意，虽然文档已经说的很清楚了，但是我还是要简单说下：

* 注册 `LeanCloud` 账号，进行身份证验证、邮箱验证、手机验证
* 创建应用后，进入应用管理界面 -> 设置 -> 应用Keys，然后复制 `AppID` 和 `AppKey`
* 在 `post.html` 文件中内容部分下添加以下代码，其中外部依赖文件官方要求是要放到 `</head>` 标签前的，这儿我不想再改动大模板，所以直接放在 `div` 标签前，依然可用：

```html
<script src='//unpkg.com/valine/dist/Valine.min.js'></script>
<div id="vcomments"></div>
<script>
    new Valine({
        el: '#vcomments',
        appId: 'AppID',
        appKey: 'AppKey',
        notify:false, //评论回复邮件提醒
        verify:false, //验证码服务
        avatar:'mp', //头像展示方式
        pageSize: 5, //评论列表分页,每页条数
        placeholder: '有话，就得说'
    })
</script>
```
* 将刚刚复制的 `AppID` 和 `AppKey` 填入上方代码的 `appId` 和 `appKey` 值中就可以使用了，赶紧去看看效果吧。
* 不过，这里就有个疑问了，是否别人通过在页面源代码找到我的 `AppID` 和 `AppKey` 就可以直接使用了？为了避免这情况就得到 `LeanCloud` 中设置 Web安全域名，通过 `LeanCloud` 的应用管理界面 -> 设置 -> 安全中心 -> Web 安全域名，填上当前使用的域名，那么即使别的域名下使用我的 `valine` 代码也会失效的。
* 查看评论数据的方法是进入 `LeanCloud` 的应用管理界面 -> 存储 -> 结构化数据 -> Comment中进行查看

>本文参考：
[LeanCloud官网](https://leancloud.cn) | 
[valine文档](https://valine.js.org) | 
[头像配置](https://valine.js.org/avatar.html)