---
layout: post
title:  "AngularJS - ngModel"
date:   2014-02-04 13:00:00
categories: Blog
---

<img src="/img/posts/angularjs.jpg"  />


O que é Ng-Model?

ngModel é uma diretiva que é usada como atributo nos elementos.
O valor dessa variável é vinculado ao valor da entrada.
Todas as alterações no elemento, atualiza automaticamente o ngModel.
Esse recurso é chamado de <a href="../../../2014/02/05/two-way-data-binding.html" target="_blank">'two-ways binding'</a> que é mais um dos recursos 'magníficos' do angular.


<h3>Função</h3>
* Fornecer comportamento de Validação.
* Definir classes css relacionados ao elemento.
* Funciona como um canal entre a view e o form.
* Pode ser utilizada em inputs, selects, textareas, checkboxes e radio buttons.


<h3>index.html</h3>
{% highlight ruby %}
<html ng-app="myApp">
   <head>
      <script src="angularJs.js"></script>
      <script src="app.js"></script>
   </head>
   <body ng-controller="myController">
      <input type="text" ng-model="model-input">
      <p>Bem Vindo, { {model-input} }</p>
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
    <input type="text" ng-model="nome" placeholder="Digite seu nome...">
    <p>Bem Vindo, {(nome)}</p>
  </div>
</div>

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
