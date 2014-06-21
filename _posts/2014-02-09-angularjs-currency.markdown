---
layout: post
title:  "AngularJS - Filter Currency"
date:   2014-02-09 13:00:00
categories: Blog
---

<h3>O que é?</h3>
Bom, como o nome já diz, a função filter currency é converter um numero para o formato de moeda.

A aplicação é bem simples, basta colocar <code>"{ {ngModel | currency:'R$'} }"</code>, passando o tipo de moeda que deseja ser mostrado.

<h3>index.html</h3>
{% highlight ruby %}
<html ng-app="myApp">
   <head>
      <script src="angularJs.js"></script>
      <script src="app.js"></script>
   </head>
   <body ng-controller="myController">
      <input type="number" ng-model="valor">
      <p>Valor Total: { {valor | currency:'R$'} }</p>
   </body>
</html>
{% endhighlight %}

<h3>app.js</h3>
{% highlight ruby %}
var app = angular.module("myapp", []);
function MyController($scope) {
  $scope.valor = 10.00;
};
{% endhighlight %}
<h3>Exemplo</h3>

<script src="/js/angular.min.js"></script>
<script src="/js/app-ng-currency.js"></script>
<div ng-app="myapp">
  <div ng-controller="MyController">
    <input type="number" ng-model="valor" placeholder="Digite um valor...">
    <p>Valor Total: {(valor | currency:'R$')}</p>
  </div>
</div>

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
