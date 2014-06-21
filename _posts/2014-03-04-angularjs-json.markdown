---
layout: post
title:  "AngularJS - JSON"
date:   2014-03-04 13:00:00
categories: Blog
---

<h3>O que é?</h3>
Filtro que transforma os objetos do AngualarJS para formato JSON.

<h3>Exemplo</h3>
{% highlight ruby %}
<div ng-app>
  <script src="angular.min.js"></script>
  <pre>{ { {'name':'value'} | json } }</pre>
</div>
{% endhighlight %}

<h3>Resultado</h3>
{
<br />
&nbsp;&nbsp;&nbsp;"name": "value"
<br />
}

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
