---
layout: post
title:  "jekyll 学习笔记一——安装和变量说明"
date:   2016-08-16 14:49:03 +0800
categories: notes
tags: jekyll
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
---

>注意：本文中标签能在 jekyll 中展示,已将标签中的大括号统统改成中括号显示。

### 安装 [Ruby][rubylink]

### 将 Ruby Gem 升级到最新版本
```ruby
gem update --system
```

### 安装命令
```ruby
gem install jekyll
```

### 更新 Jekyll 命令
```ruby
gem update jekyll
```

### 建立 jekyll 文件夹
```ruby
jekyll new myblog
```

### 进入 jekyll 文件夹后启用服务
```ruby
jekyll serve
# => Now browse to http://localhost:4000
jekyll serve --watch
# => 和`jekyll serve`相同，但是会查看变更并且自动再生成.
```

### 目录结构

`_config.yml` 配置文件

`_drafts` 未发布文章存放文件夹，我安装的时候没出现过，不明觉厉.[_drafts学习链接][_drafts学习链接]

`_includes` 模版文件中将 `_includes` 文件夹中的文件进行调用，调用方式：[% include file.ext %]

`_layouts` `layouts`是包裹在文章外部的模板，通过标签 [[ content ]]可以将 `content` 插入页面中.

`_posts` 存放文章，文件名格式：`YEAR-MONTH-DAY-title.markdown`，可通过在 [YAML][yamllink] 头部信息中添加 `permalink` 自定义文章链接.(所有文章顶部都必须包含 `YAML` 头信息)

`_site` 一旦 `Jekyll` 完成转换，就会将生成的页面放在这里(默认).最好将这个目录放进你的 `.gitignore` 文件中.

`index.html` 首页文件，在包含 `YAMA` 头部的情况下，同样会作为模板而被进行转换.(不局限与该文件，`.html` `.markdown` `.md` `.textile` 等文件同)

`favicon.ico` 根目录下未在上述出现的其他文件(`favicon.ico`)或者文件夹(`images`、`css`)均有可能被生成到 `_site` 文件夹中.

`assets(download)` 后面推荐用来存放文章中出现图片的文件夹，才看到这里的可以忽略该文件夹.

### YAML头信息

直接给出个例子吧：

```markdown
---
layout: post
title:  "标题在此"
date:   2016-03-26
categories: jekyll update
tags: jekyll news
permalink: /news/jekyll-update
published: false
excerpt: "摘抄内容"
---
```

### Liquid 过滤器

[[ page.title ]] 页面标题，如果 `YAML` 中出现了 `title` 的话则出现.(`YAML` 中其余变量同)

[[ site.title ]] 网站标题，如果没猜错的话应该是在 `_config.yml` 文件中进行定义.

[[ post.date \| date: "%b %-d, %Y" ]] 应该是发布时间，然后是时间显示格式，下面对格式进行说明：

```markdown
%b ：英文大写缩写月份(MAR)
%B ：英文首字母大写全拼月份(March)
%-d ：日(26)，貌似有没有 “-” 都可以调用，未知区别
%D ：日期(03/26/16)
%Y ：年(2016)
%y ：年(16)，仅保留年份后面两位数
%m ：月(3)
```
[[ site.time \| date_to_xmlschema ]] 将时间转换成 `XML` 模式 (ISO 8601) 格式，还有 `date_to_rfc822` 是转换成 `RFC-822` 格式(用于 `RSS ` 订阅)，`date_to_string` 是转换成时间短格式(26 Mar 2016)，`date_to_long_string` 是转换成长格式(26 March 2016).

[[ post.url ]] 文章 `url`，其中 `title` 同文章标题

[[ page.content \| xml_escape ]] `XML`转码

[[ “foo,bar;baz?” \| cgi_escape ]] `CGI` 转码，用于 `URL` 中，还有 `uri_escape` 是 `URI` 转码

[[ page.content \| number_of_words ]] 统计页面字数

[[ page.tags \| array_to_sentence_string ]] 数组(这里是标签)转换成句子，通过 “，” 进行分隔

[[ page.excerpt \| textilize ]] `Textile`(一种类 `Markdown` 语法) 支持，将 `Textile` 格式的字符串转换为 `HTML` ，使用 `RedCloth`，还有 `markdownify`  是对 `Markdown` 的支持

[[ site.data.projects \| jsonify ]] 将 `Hash` 值(哈希值)转成 `Json` 格式

[[ post.excerpt ]] 文章摘抄，会自动在摘抄中添加 `p` 标签，如果不需要可以使用 [[ post.excerpt \| remove: '<p>' \| remove: '</p>' ]] 进行移除，如果不需要自动摘抄，可以在 `YAML` 头信息中添加 `excerpt` 变量，并通过双引号将摘抄内容自定义添加

`\| strip_html` 在过滤器中添加该项可以在输出内容中去除一些 `html tags`

[% for post in site.posts %] `<li><a href="[[ post.url ]]">[[ post.title ]]</a></li>[% endfor %]`一个普通的文章列表循环例子

### Liquid 标签

[% include footer.html %] 调用 `_include` 文件夹中文件，上文说到过

[% include footer.html param="value" %] 通过 `include` 标签传递参数

[[ include.param ]] 调用上述放出传递的参数

[% highlight ruby linenos%][% endhighlight %] 代码高亮以及显示行数

[% post_url 2016-03-26-welcome-to-jekyll %] 调用某篇文章的链接，post_url 右边是不包含文件后缀的文件名，举个栗子:`[Name of Link]([% post_url 2010-07-21-name-of-post %])`

### 图片和文件的调用
```markdown
!\[有帮助的截图]([[ site.url ]]/assets/big.gif)
\[下载 PDF\]([[ site.url ]]/assets/12.psd).
```
对上述两行代码进行说明：
带有感叹号的图片，带有感叹号中的中括号文字是图片 `alt` 信息，括号里面是图片链接.
无感叹号的是链接，其中中括号包含的是链接文字.
提示：
图片链接或者下载链接所属文件如果在根目录下则无需使用 [[ site.url ]] 根URL，例如：
```markdown
!\[有帮助的截图](/assets/big.gif)
\[下载 PDF\](/assets/12.psd).
```

### 永久链接(Permalink)配置
在 `YAML` 头信息中 `permalink` 中定义
例如：`permalink: /:categories/:month-:day-:title.luv`
注：从 Jekyll 3.0 版本开始无法在 `_config.yml` 中进行 `permalink` 的定义.

### 以冒号为前缀标记动态内容
其中 `date` 代表 `/:categories/:year/:month/:day/:title.html`

### 模板变量说明
`year` 文章所在文件的年份 `month` 文章所在文件的月份，格式如 `01, 10`
`i_month` 文章所在文件的月份，格式如 `1, 10`
`day` 文章所在文件的日期，格式如 `01, 20`
`i_day` 文章所在文件的日期，格式如 `1, 20`
`title` 文章所在文件的标题
`categories` 为文章配置的目录，`Jekyll` 可以自动将 `//` 转换为 `/` ，所以如果没有目录，会自动忽略

>本文参考：
[rubylink](http://www.ruby-lang.org/en/downloads/)｜
[_drafts学习链接](http://jekyll.bootcss.com/docs/drafts/)｜
[yamllink](http://yaml.org/)