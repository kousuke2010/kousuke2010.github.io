---
layout: post
title: "在 jekyll 中添加分页"
date: 2020-01-09 15:15:52 +0800
categories: notes
tags: jekyll
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
published: true
---
多年没写博客了，让博客倍受冷落，在前几天的工作中把忙了很久的项目做完了，就想着做点什么事情，然后无意间看到了书签里的博客icon，打开看了下，思考良久，决定重拾博客。

博客并没有什么大问题了，但是看着首页这么长就想着弄下页码，老是滚动这么久也不是个事，添加分页也是重拾博客的第一步了，其中倒是有些波折，我竟然连博客的结构都不清楚了，花了点时间了解了结构，然后根据搜索在某文件添加某些代码就可以弄好了，但是代码这东西就是让你在需要的时候着急，果然是无效的。

这段代码也就是普遍在网上搜到的千篇一律的解决方法，即在博客根目录 `_config.yml` 文件中添加下方代码：
```yml
# Paginator
gems: [jekyll-paginate] #页码插件
paginate: 8 # 每页显示
paginate_path: "page:num" #页码路径
```

但是这样在重新运行 `jekyll serve` 的时候后报错：
```ruby
Deprecation: You appear to have pagination turned on, but you haven't included the `jekyll-paginate` gem. Ensure you have `plugins: [jekyll-paginate]` in your configuration file.
```

接着尝试安装这个插件并成功安装后依然报错没有这个插件依赖：
```ruby
gem install jekyll-paginate
```

再接着就看到说要安装 `github-pages` 这个插件，毕竟想着这博客就是在 `Github Pages` 中运行的，就尝试运行了之后等它安装了一大堆东西，但是依然报错没有这个插件依赖：
```ruby
gem install github-pages
```

然后在很多地方还看到说要在 `Gemfile` 中添加一些代码才可以添加分页插件的依赖，这时候我就全局搜了下 `jekyll` 中的文件，然而并没有这个文件，那么它是什么，我尝试通过 `touch Gemfile` 来创建一个空文件，并在其中添加一些代码，但是依然无效，辗转多处在最后发现这个文件是 `bundler` 插件的相关配置文件，在尝试安装 `bundler` 后依然报错没有这个插件依赖：
```ruby
gem install bundler
```

最后在差不多成功前了解到可以通过 `bundler` 运行 `jekyll` 的服务，这之前我也写了文章怎么通过 `jekyll` 在 `Github Pages` 中建立博客并运行也是大同小异的，当时是写着通过下方代码生成的：
```ruby
gem install jekyll
jekyll new myblog
cd myblog
jekyll serve --watch
```

然后通过 `bundler` 运行 `jekyll` 是通过以下方法进行的，但是奇怪的是运行之后依然报错没有这个插件依赖：
```ruby
gem install jekyll bundler
jekyll new myblog
cd myblog
bundle exec jekyll serve
```

脑子里其实在这儿已经快要放弃了，想着没有分页就没有分页吧，但是不甘心呀，就在这时冒出了 `Gemfile` 这个词，这玩意到底是怎么出来的，是不是初始配置文件，就找到了是通过 `bundler` 插件生成的：
```ruby
bundle init
```

现在在新生成出来的 `Gemfile` 文件中将以下代码添加进里面最底部：
```ruby
gem 'jekyll-paginate', group: :jekyll_plugins
```

然后通过  `bundler` 运行 `jekyll`，接下来并没有报错没有 `jekyll-paginate` 的依赖了：
```ruby
bundle exec jekyll serve
```

但是问题依然没有解决，接下来就得在根目录下 `index.html` 文件中将原列表部分代码更换成下方代码，其中细节代码根据内容调整一下即可：
```html
<!-- 代码中请注意去掉 {\% \%} {\{ }\} 中的反斜杠 -->
<ul class="post-list">
    {\% for post in paginator.posts \%}
    <li>
        <h2>
        <a class="post-link" href="{\{ post.url | prepend: site.baseurl }\}">{\{ post.title }\}</a>
        </h2>
        <span class="post-meta">
        发贴日期: <time>{\{ post.date | date: "%Y-%m-%d" }\}</time> · 标签: {\% for tag in post.tags \%}<a href="/tags/#{\{ tag }\}">{\{ tag }\}</a> {\% endfor \%} · 栏目: <a href="/{\{ post.categories }\}">{\{ post.categories }\}</a>
        </span>
        <div class="post-excerpt">{\{ post.excerpt }\}</div>
    </li>
    {\% endfor \%}

    {\% if paginator.total_pages > 1 \%}
        <div class="pagination">
            {\% if paginator.previous_page \%}
                <a href="{\{ paginator.previous_page_path | relative_url }\}">&laquo; Prev</a>
            {\% else \%}
                <span>&laquo; Prev</span>
            {\% endif \%}
            <small>｜</small>

            {\% for page in (1..paginator.total_pages) \%}
                {\% if page == paginator.page \%}
                {\{ page }\}
                {\% elsif page == 1 \%}
                <a href="{\{ paginator.previous_page_path | relative_url }\}">{\{ page }\}</a>
                {\% else \%}
                <a href="{\{ site.paginate_path | relative_url | replace: ':num', page }\}">{\{ page }\}</a>
                {\% endif \%}
                <small>｜</small>
            {\% endfor \%}

            {\% if paginator.next_page \%}
                <a href="{\{ paginator.next_page_path | relative_url }\}">Next &raquo;</a>
            {\% else \%}
                <span>Next &raquo;</span>
            {\% endif \%}
        </div>
    {\% endif \%}
</ul>
```

这里还有个问题提醒下，`jekyll` 的分页只能在 `index.html` 文件中添加，其他页面添加无效，通过 `bundler` 运行 `jekyll` 就可以在首页中看到分页了，具体的样式也请自行调整。

那么以上终究是本地搭建分页的方法，那么在 `Github Pages` 上应该上传哪些内容呢？也就下方4个文件即可：
* Gemfile
* Gemfile.lock
* _config.yml
* index.html

同步 Github 之后等待一会，重复刷新下线上地址即可。