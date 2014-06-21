---
layout: post
title:  "ngController vs ngApp"
date:   2014-02-16 10:00:00
categories: Blog
---

<h3>ngApp</h3>
Essa diretiva é como se fosse um <code>".ready()"</code> do jQuery. Quando colocamos o ng-app, você está dizendo pro AngularJS, que ele precisa monitorar DOM a partir daquele ponto.

<h3>ngController</h3>
O ngController é usado pra determinar as funcionalidades de determinado inicio e fim, por isso é geralmente usado no Body.

<h3>Posso ter 2 Controllers?</h3>
Sim, e ambos podem se comunicar através do <code>"$scope.$broadcast"</code> e <code>"$scope.$emit"</code>, pai/filho e filho/pai respectivamente.

<h3>Exemplo</h3>

{% highlight ruby %}
<html ng-app"myApp">
  <head></head>
  <body>
    <div ng-controller="controller1"></div>
    <div ng-controller="controller2"></div>
  </body>
</html>
{% endhighlight %}

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!






