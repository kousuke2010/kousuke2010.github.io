---
layout: post
title: "Ubuntu 获取 root 权限"
date: 2016-09-28 10:15:06 +0800
categories: notes
tags: linux ubuntu
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
published: true
---
昨天晚上在想到关机的时候突然想要通过命令行来进行关机，然后发现要执行关机命令需要获取到root权限才可以，当时我就使用了 `su root`，这个命令，然后提示输入密码，我一开始还以为是系统登录密码，敲了2次感觉不对马上搜了下，然后才知道得先设置 su 密码的。

那么从头过一遍：

* 设置 su 密码命令：`su passwd root`
* 获取 root 命令：`su root`
* 执行命令的时候都是提示输入密码的
* 在文件管理器中获取 root：`sudo nautilus`

接下来获取了 root 就可以使用命令行关机了，下面陈列部分关机和重启命令：

* `shutdown –help`	可以查看shutdown命令如何使用，当然也可以使用man shutdown命令。
* `shutdown -h now`	现在立即关机
* `shutdown -r now`	现在立即重启
* `shutdown -r +3`	三分钟后重启
* `shutdown -h +3`	“The System will shutdown after 3 minutes” 提示使用者将在三分钟后关机
* `shutdown -r 20:23`	在20：23时将重启计算机
* `shutdown -r 20:23 &`	可以将在20：23时重启的任务放到后台去，用户可以继续操作终端
