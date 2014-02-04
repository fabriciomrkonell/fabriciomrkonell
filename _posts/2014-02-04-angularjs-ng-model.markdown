---
layout: post
title:  "AngularJS - ngModel"
date:   2014-02-04 13:00:00
categories: Blog
---

<img src="{{site.baseurl}}/img/posts/angularjs.jpg"  />


O que é Ng-Model?

ngModel é uma diretiva que é usado como atributo nos elementos.
O valor dessa variável é vinculado ao valor da entrada. 
Todas as alterações no elemento, atualiza automaticamente o ngModel.
Esse recurso é chamado de 'two-ways binding' que é mais um dos recursos 'magnificos' do angular. 


<h3>Função</h3>
* Faz a ligação da View com o Model.
* Fornecer comportamento de Validação. 	
* Definir classes css relacionados ao elemento. 
* Registrar o controle com seu formulário pai. 

<h3>Código</h3>

{% highlight ruby %}
<html ng-app>
	<head>
    	<script src="angularJs.js"></script>
  	</head>
  	<body>	 
    	<input type="text" ng-model="model-input">
    	<input type="text" ng-model="model-input">  	      	
    </div>
  </body>
</html>
{% endhighlight %}

<h3>Exemplo</h3> 

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>      

<div ng-app>
	<input type="text" placeholder="Digite seu Nome" ng-model="imput">
	<br />
	<input type="text" placeholder="Digite seu Nome" ng-model="imput">
</div>


Dúvidas? Entre em contato!
