---
layout: post
title: "gem install jekyll 报错 Unable to download data from https://ruby.taobao.org/"
date: 2016-08-25 10:03:31 +0800
categories: notes
tags: jekyll
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
---
在用 `gem install jekyll` 时出现错误信息:

```ruby
ERROR:  Could not find a valid gem 'rails' (>= 0), here is why:
          Unable to download data from https://ruby.taobao.org/ - Errno::ECONNREFUSED: No connection could be made because the target machine actively refused it. - connect(2) for "127.0.0.1" port 8118 (https://ruby.taobao.org/latest_specs.4.8.gz)
```

通过搜索找到解决方案:

```ruby
gem sources -r https://ruby.taobao.org/
gem sources -a http://ruby.taobao.org/
```

貌似意思是将https替换成http,但是安装后别忘了把它设回来:

```ruby
gem sources -r http://ruby.taobao.org/
gem sources -a https://ruby.taobao.org/
```

如此配置的时候出现错误信息如下:

```ruby
Error fetching https://ruby.taobao.org/:
        SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://rubygems-china.oss-cn-hangzhou.aliyuncs.com/specs.4.8.gz)
```

这是说系统中的 ssl 设置有问题,解决方法:

* 下载[证书](https://curl.haxx.se/ca/cacert.pem)

* 将下载的证书覆盖在本地 ruby 的安装路径(一般在 C:/Ruby21-x64 )下的 cacert.pem 文件
* 在环境变量里设置 SSL_CERT_FILE 这个环境变量,配置命令: `set SSL_CERT_FILE=C:/Ruby21-x64/cacert.pem`

*Ps.经过以上验证,发现没必要将 gem sources 从 https 改成 http ,只是配置 SSL_CERT_FILE 就可以解决上边出现的两个问题,貌似每次通过 gem 下载或者更新都需要重新进行一次配置命令才能成功.*
