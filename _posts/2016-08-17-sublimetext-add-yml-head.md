---
layout: post
title: "Sublimetext 添加 jekyll YAML 头部信息快捷键"
date: 2016-08-17 16:14:17 +0800
categories: soft
tags: sublimetext
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
---

首先进入 `SublimeText` 安装目录(一般在 `C:\Users\IBM\AppData\Roaming\Sublime Text 3`)，然后进入路径 `Packages\User\` 下新建一个 `py` 格式的文件，这里我以 `addCurrentTime.py` 命名，然后在其中填充以下代码：

{% highlight python linenos%}
import datetime
import sublime_plugin
class AddCurrentYmlCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        self.view.run_command("insert_snippet",{
            "contents":
            "---""\n"
            "layout: post""\n"
            "title: \"\"""\n"
            "date: " "%s"  %datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") +" +0800""\n"
            "categories: ""\n"
            "tags: ""\n"
            "permalink: /:categories/:month-:day-:title""\n"
            "excerpt: #为空的清空默认摘要""\n"
            "published: false""\n"
            "---""\n"
        })
{% endhighlight %}

接下来就需要去添加快捷键了，这儿我设置的快捷键组合是 `ctrl + shift + y` ,请打开 `SublimeText` 安装目录下的 `Packages\User\Default (Windows).sublime-keymap'，在里面中括号结尾标签前添加以下代码 `特别注意该行代码前有其他代码的时候在上一行代码结束添加逗号`：

```python
{ "keys": ["ctrl+shift+y"], "command": "add_current_yml" }
```
