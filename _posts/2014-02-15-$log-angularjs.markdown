---
layout: post
title:  "AngularJS - $log"
date:   2014-02-15 10:00:00
categories: Blog
---

<h3>O que é?</h3>
É um serviço para registro de logs. Sua implementação padrão escreve com segurança a mensagem para o console do navegador. 

<h3>Objetivo</h3>
Seu objetivo é simplificar a depuração e solução de problemas. 

<h3>index.html</h3>
{% highlight ruby %}
<html ng-app="myApp">
	<head>
      <script src="angularJs.js"></script>
      <script src="app-log.js"></script>
   	</head>
   	<body ng-controller="myController">         
    	<a type="button" ng-click="$log.log(msg)">
    		Log
    	</a>
	   	<a type="button" ng-click="$log.warn(msg)">
	   		Warn
	   	</a>
    	<a type="button" ng-click="$log.info(msg)">
    		Info
    	</a>
    	<a type="button" ng-click="$log.log(msg)">
    		Error
    	</a>
   	</body>
</html>
{% endhighlight %}

<h3>javascript.js</h3>
No nosso javascript, temos que injetar a depência do <code>"$log"</code>.


{% highlight ruby %}
var app = angular.module("myapp", []);
function MyController($scope, $log) {
	$scope.msg = 'fabricioronchi.com';
}
{% endhighlight %}


<h3>Exemplo</h3> 
<script src="/js/angular.min.js"></script>      
<script src="/js/app-log.js"></script>      
<div ng-app="myapp"> 
  <div ng-controller="MyController">        
    <button type="button" ng-click="$log.log(mensagem)">Log</button>
    <button type="button" ng-click="$log.warn(mensagem)">Warn</button>
    <button type="button" ng-click="$log.info(mensagem)">Info</button>
    <button type="button" ng-click="$log.log(mensagem)">Error</button>
  </div>
</div>

<h3>Referência</h3> 
* <a href="http://docs.angularjs.org/api/ng.$log" target="_blank">$log</a>

Dúvidas? Entre em Contato.