---
layout: post
title:  "ngIf, ngShow ou ngHide?
date:   2014-02-09 13:00:00
categories: Blog
---

<h3>O que é?</h3>
Pra "esconder" alguns elementos na tela, usamos umas desses diretivas: ngIf, ngShow ou ngHide. Mas qual a diferênça entre elas?

<h3>ngIf</h3>
Não renderiza o elemento na tela quando ela for false.

<h3>ngShow</h3>
Adiciona a classe "hide" no elemento quando ela for false.

<h3>ngHide</h3>
Adiciona a classe "hide" no elemento quando ela for true.


<h3>index.html</h3>
{% highlight ruby %}
<html ng-app="myApp">
   <head>
      <script src="angularJs.js"></script>
      <script src="app.js"></script>
   </head>
   <body ng-controller="myController">         
      <div ng-controller="MyController">    
        <input type="checkbox" ng-model="modelif">ngIf
        <p ng-if="modelif">Texto ngIf</p>
        <input type="checkbox" ng-model="modelshow">ngIf
        <p ng-if="modelshow">Texto ngShoe</p>
        <input type="checkbox" ng-model="modelhide">ngIf
        <p ng-if="modelhide">Texto ngHide</p>
      </div>
   </body>
</html>
{% endhighlight %}

<h3>Exemplo</h3> 

<script src="/js/angular.min.js"></script>      
<script src="/js/app-ng-currency.js"></script>      
<div ng-app="myapp"> 
  <div ng-controller="MyController">    
    <input type="checkbox" ng-model="modelif">ngIf
    <p ng-if="modelif">Texto ngIf</p>
    <input type="checkbox" ng-model="modelshow">ngIf
    <p ng-if="modelshow">Texto ngShoe</p>
    <input type="checkbox" ng-model="modelhide">ngIf
    <p ng-if="modelhide">Texto ngHide</p>
  </div>
</div>

Dúvidas? Entre em contato!
