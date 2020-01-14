---
layout: post
title: "Github Action workflows Jekyll site CI 报错"
date: 2020-01-14 15:57:52 +0800
categories: notes
tags: jekyll
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
published: true
---
这些天一直收到来自 `Github` 的邮件，起初我也没有去注意，直接点一下全部已读就过滤掉了，但是昨天抽空整理邮件的时候注意到又收到了一封邮件：

>邮件标题：Run failed: Jekyll site CI - master
Run failed for master
Repository: kousuke2010/kousuke2010.github.io
Workflow: Jekyll site CI
Duration: 4 minutes and 30.0 seconds
Finished: 2020-01-13 07:28:01 UTC
View results

然后清楚了是 `Jekyll site CI` 运行错误了，顺着邮件中的 `View results` 链接去查看，了解到了以下报错：

```jekyll
Installing jekyll-paginate 1.1.0
There was an error while trying to write to `/srv/jekyll/Gemfile.lock`. It is
likely that you need to grant write permissions for that path.
```

也明白了是在 `Github Action workflows` 中安装 `jekyll-paginate` 插件的时候无法获取写入 `/srv/jekyll/Gemfile.lock` 的权限，找了一些资料，发现错误都指向了 `Gemfile.lock` 这个文件，甚至还看到了删掉根目录下的这个文件，重新新建一个同名的空文件上传，但是很明显是不行的，依然在权限这上面挡住了。

然后也找到了权限配置的代码：
```jekyll
chmod a+w Gemfile.lock
```

这时候也就是如何使用且在哪使用这串代码的问题了，经过搜索之后也了解到因为本博客是通过 `Github workflows` 搭建的 `jekyll`，所以直接在根目录通过路径 `./.github/workflows` 找到 `jekyll.yml` 文件在其中适当位置添加上方代码即可，最后效果见下方代码：
```jekyll
name: Jekyll site CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: Build the site in the jekyll/builder container
      run: |
        docker run \
        -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
        jekyll/builder:latest /bin/bash -c "chmod a+w /srv/jekyll/Gemfile.lock && chmod 777 /srv/jekyll && jekyll build --future"
```

这儿提示下，注意其中 `Gemfile.lock` 所在目录，这儿该文件的路径是 `/srv/jekyll/Gemfile.lock`。

>本文参考：
[Bundle install fails in docker](https://github.com/instructure/canvas-lms/issues/1221)