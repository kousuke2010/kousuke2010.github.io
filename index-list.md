---
layout: default
permalink: /list
---
<div class="home home-list">
  <h1 class="page-heading">千里之行，始于足下.</h1>
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <time>{{ post.date | date: "%Y-%m-%d" }}</time><a class="post-link" href="{{ post.url | prepend: site.baseurl }}" title="{{ post.title }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
