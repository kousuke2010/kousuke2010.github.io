---
layout: post
title: "jekyll修改默认域名(IP地址)和端口"
date: 2020-08-14 10:07:52 +0800
categories: notes
tags: jekyll
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
published: true
---
这几天无聊打开好久没看的自己在 `GithubPage` 中建立的博客，发现网站挂了，然后进 `Github` 看了下说是出现了重大漏洞，给我进行了 `kramdown` 的更新，然后网站就不行了，捣鼓了半天，没辙，索性不用了，直接在本地进行博客的编辑，然后通过 `uTools` 中的其中一个名为“内网穿透”的插件进行内网穿透，域名就暂时改为 `mrjue.utools.club`，使用了一下觉得网站打开挺流畅的。

![utools-内网穿透](/assets/202008/08141050.png)

但是看着简单其实还有一个步骤要做，就是 `jekyll` 默认使用的IP地址是 `127.0.0.1`，无法用于内网穿透，那么在运行 `jekyll serve` 的时候就得重新定义IP地址和端口了，搜索了解后知道了两种方法：

1、在运行 `jekyll` 服务的命令后面加参数：

`bundle exec jekyll serve --host=IP地址 --port=端口`

2、更改 `jekyll` 的配置文件 `_config.yml` 中添加配置：
```
host: IP地址
port: 端口
```

最后还出现了一个问题就是因为改了域名，在文章页的 `valine` 评论插件出现403问题，因为新的域名没有添加到 `leancloud` 的安全域名中，所以得将新域名添加其中。

![leancloud-安全域名](/assets/202008/08141051.png)

>本文参考：
[LeanCloud官网](https://leancloud.cn) | 
[jekyll中文官网](http://jekyll.com.cn/docs/configuration/) | 
[jekyll修改默认监听地址和监听端口](http://qinbaichao.cn/2017/02/12/change-listening-address-of-jekyll)