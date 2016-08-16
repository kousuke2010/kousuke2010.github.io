---
layout: post
title:  "Welcome to Jekyll!"
date:   2016-03-26 11:28:03 +0800
categories: jekyll
tags: jekyll news
permalink: /:categories/:month-:day-:title.luv
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

![有帮助的截图](/assets/big.gif)
[下载 PDF]({{ site.url }}/assets/12.psd).
{{ post.excerpt }}
Jekyll also offers powerful support for code snippets:
excerpt_separator
```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

{% highlight ruby linenos%}
def foo
  puts 'foo'
end
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
