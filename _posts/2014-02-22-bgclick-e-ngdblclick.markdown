---
layout: post
title:  "ngClick e ngDblclick"
date:   2014-02-22 10:00:00
categories: Blog
---

<h3>Introdução</h3>
As diretivas ngClick e ngDblclick são usadas para especificar o comportamento personalizado nos eventos de click e duplo click.

<h3>Especificação</h3>
Nesse exemplo vou fiz um contador, que acrescetará "+1" toda vez que o evento for chamado.

<h3>index.html</h3>
{% highlight ruby %}
<div ng-app="myapp">
  <script src="angular.min.js"></script>
  <script src="app.js"></script>
  <div ng-controller="MyController">
    <a rel="button" ng-click="cont = cont + 1">
    	Click
    </a>
    <a rel="button" ng-dblclick="cont = cont + 1">
    	Duplo Click
    </a>
    <p>{ { cont } }</p>
  </div>
</div>
{% endhighlight %}

<h3>Exemplo</h3>
<div ng-app="myapp">
  <script src="/js/angular.min.js"></script>
  <script src="/js/app-click.js"></script>
  <div ng-controller="MyController" style="text-align: center">
    <a rel="button" class="btn btn-info" ng-click="cont = cont + 1">Click</a>
    <a rel="button" class="btn btn-info" ng-dblclick="cont = cont + 1">Duplo Click</a>
    <p>{(cont)}</p>
  </div>
</div>


Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
