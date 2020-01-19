---
layout: post
title: "bundler 运行 jekyll 提醒：avoid polling for changes"
date: 2020-01-15 11:57:52 +0800
categories: notes
tags: jekyll
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
published: false
---
真的是最近都是 `jekyll` 在搞事情，所以一直在写这类文章。这次是在运行 `bundle exec jekyll serve` 后出现以下提醒：
```jekyll
Please add the following to your Gemfile to avoid polling for changes:
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
```

同时这问题也很简单，也就是在 `window` 平台上运行的时候需要依赖 `wdm`，

>本文参考：
[Could not find gem 'wdm (>= 0.1.0) x64-mingw32' in any of the gem sources listed in your Gemfile or available on this machine](https://stackoverflow.com/questions/38215088/could-not-find-gem-wdm-0-1-0-x64-mingw32-in-any-of-the-gem-sources-listed)