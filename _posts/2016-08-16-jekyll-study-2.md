---
layout: post
title:  "jekyll 学习笔记二——常用变量"
date:   2016-08-16 18:19:03 +0800
categories: notes
tags: jekyll
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
---
### 全局(global)变量
`site` 接收 `_config.yml` 中的信息

`page` 接收页面中出现的 `YAML` 中的信息

`content` 被 `layout` 包裹的那些 `Post` 或者 `Page` 渲染生成的内容.但是又没定义在 `Post` 或者 `Page` 文件中的变量.(也许理解对了,也许美丽街道)

`paginator` 每当 `paginate` 配置选项被设置了的时候,这个变量就可用了.(还没看到分页,先放着)

### 全站(site)变量
`site.time` 最近最后一次执行 jekyll 命令的时间

`site.pages` 所有 Pages 的清单,估摸着是用来筛选文章用的.(看下列表循环标签就懂了)

`site.posts` 一个按照时间倒叙的所有 Posts 的清单,估摸着是用来筛选文章用的.

`site.related_posts` 如果当前被处理的页面是一个 Post,这个变量就会包含最多10个相关的 Post.默认的情况下, 相关性是低质量的,但是能被很快的计算出来.如果你需要高相关性,就要消耗更多的时间来计算. 用jekyll 这个命令带上 --lsi (latent semantic indexing) 选项来计算高相关性的 Post.估摸着是用来筛选文章用的.

`site.categories.CATEGORY` 所有的在 CATEGORY 类别下的帖子.

`site.tags.TAG` 所有的在 TAG 标签下的帖子.

`site.[CONFIGURATION_DATA]` 所有的通过命令行和 _config.yml 设置的变量都会存到这个 site 里面. 举例来说,如果你设置了 url: http://mysite.com 在你的配置文件中,那么在你的 Posts 和 Pages 里面,这个变量就被存储在了 site.url.Jekyll 并不会把对 _config.yml 做的改动放到 watch 模式,所以你每次都要重启 Jekyll 来让你的变动生效.

`site.[CONFIGURATION_DATA]` 根据变量名称调用 _config.yml 中的信息.

### 页面(page)变量
`page.content` 页面内容的源码,注意是源码,即使是标签也是会包含的,然而我不知道这有啥用途

`page.title` 页面的标题

`page.excerpt` 页面摘要的源码

`page.url` 帖子以斜线打头的相对路径

`page.date` 帖子的日期

`page.id` 帖子的唯一标识码(在RSS源里非常有用),比如 /2008/12/14/my-post

`page.categories` 帖子所属的 Categories,其他不用管,只要它能在 YAML 头信息中设置就可.

`page.tags` Post 所属的所有 tags

`page.path` Post 或者 Page 的源文件地址,并不是 URL 哦

### 分页器(Paginator)
需先安装 gems: [Jekyll-Paginator],以下是安装命令：
`gem install jekyll-paginate`

在 `_config.yml` 文件中的配置

```ruby
# Paginator
gems: [jekyll-paginate]
paginate: 3 # 每页显示项目数
paginate_path: "blog/page:num" # 生成目录
```

以下是分页器常用变量,但是这些变量仅在首页文件中可以,不过他们也会存在于子目录中,就像 `/blog/index.html`.

`paginator.per_page` 每一页Posts的数量.

`paginator.posts` 这一页可用的Posts.

`paginator.total_posts` Posts 的总数.

`paginator.total_pages` Pages 的总数.

`paginator.page` 当前页号.

`paginator.previous_page` 前一页的页号.

`paginator.previous_page_path` 前一页的地址.

`paginator.next_page` 下一页的页号.

`paginator.next_page_path` 下一页的地址.
