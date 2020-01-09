---
layout: post
title: "Jekyll serve --watch 中 --watch 失效问题"
date: 2016-08-21 13:28:04 +0800
categories: notes
tags: jekyll
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
---
Jekyll 新版本在 Jekyll serve 中推出了 --watch 以监听其源文件的变化,前几天在学习的时候也一直在使用这个命令,不过可能是运行多次检测到失效的可能吧,这一次执行命令的时候出现提示:

```ruby
Please add the following to your Gemfile to avoid polling for changes:
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
```

看了下原来是需要安装 gems: [wdm] 也就是 Windows Directory Monitor (Windows目录监控),以下是安装命令:

`gem install wam`

但是安装这个工具的时候又出现错误提示:

```ruby
ERROR:  Error installing wdm:
The 'wdm' native gem requires installed build tools.
Please update your PATH to include build tools or download the DevKitfrom
'http://rubyinstaller.org/downloads' and follow the instructionsat
'http://github.com/oneclick/rubyinstaller/wiki/Development-Kit'
```

根据提示,需要下载并安装 DevKitfrom ,现在说下具体操作:

1) 执行 `ruby -v` 了解自己安装的 ruby 版本

2) 然后到 [rubyinstaller][rubyinstaller] 根据安装的 ruby 版本下载对应 DevKit 版本

3) 下载后双击安装文件将程序安装在任一你想放置的地方(一般安装在平时软件的安装目录即可,比如:`D:\Program Files`)

4) 通过命令(cd)进入 Devkit 程序安装目录并执行 `ruby dk.rb init` 命令对 DevKit 进行初始化,然后该文件夹下会生成一个 config.yml 文件

5) 打开该 config.yml 文件,并在里面添加以下代码(须将代码中出现路径改为你安装 Ruby 的目录):

```ruby
----
C:/Ruby21-x64
---
```

6) 在该目录下继续执行 `ruby dk.rb install` 命令以完成安装 DevKit 即可。

7) 在成功安装 DevKit 之后,再次执行 wdm 安装命令:

`gem install wam`

如此, `Jekyll serve --watch` 就可以正常运行了。

>参考链接：
[rubyinstaller](http://rubyinstaller.org/downloads)
