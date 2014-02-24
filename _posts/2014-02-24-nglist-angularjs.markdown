---
layout: post
title:  "AngularJS - ngList"
date:   2014-02-24 10:00:00
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
    <input type="text" ng-model="expressao" ng-list/>    
    <br />    
    <p>{ { expressao } }</p>                
  </div>
</div>
{% endhighlight %}

<h3>Exemplo</h3>
<div ng-app="myapp">
  <script src="/js/angular.min.js"></script>  
  <script src="/js/app-list.js"></script>       
  <div ng-controller="MyController" style="text-align: center">
    <input type="text" ng-model="expressao" ng-list/>    
    <br />    
    <p>Nomes: {(expressao)}</p>                
  </div>
</div>


Dúvidas? Entre em contato!
