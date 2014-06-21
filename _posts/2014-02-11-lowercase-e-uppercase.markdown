---
layout: post
title:  "Lowercase e Uppercase"
date:   2014-02-11 13:00:00
categories: Blog
---

<h3>Lowercase e Uppercase</h3>
O exemplo mostra como deixar todo seu texto em letra maiúscula(Uppercase) ou em letra minúscula(Lowercase).

<h3>index.html</h3>
{% highlight ruby %}
<html ng-app="myApp">
   <head>
      <script src="angularJs.js"></script>
      <script src="app.js"></script>
   </head>
   <body ng-controller="myController">
      <input type="number" ng-model="valor">
      <p>Lowercase: { {valor | lowercase} }</p>
      <p>Uppercase: { {valor | uppercase} }</p>
   </body>
</html>
{% endhighlight %}

<h3>app.js</h3>
{% highlight ruby %}
var app = angular.module("myapp", []);
function MyController($scope) { };
{% endhighlight %}
<h3>Exemplo</h3>

<script src="/js/angular.min.js"></script>
<script src="/js/app-ng-model.js"></script>
<div ng-app="myapp">
  <div ng-controller="MyController">
    <input type="text" ng-model="valor" placeholder="Digite uma frase">
    <p style="margin-bottom: -20px">Lowercase: {(valor | lowercase)}</p>
    <p>Uppercase: {(valor | uppercase)}</p>
  </div>
</div>

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
