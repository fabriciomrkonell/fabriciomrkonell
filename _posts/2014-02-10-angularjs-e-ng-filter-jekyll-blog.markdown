---
layout: post
title:  "AngularJS - Filtragem de Posts"
date:   2014-02-10 13:00:00
categories: Blog
---

<h3>Filtragem com AngularJS</h3>
Brincando com AngularJS recentemente, tive a idéia de fazer uma filtragem das postagens do meu Blog.

<h3>Como fazer?</h3>
A dificuldade que tive, foi a de como fazer a comunicação entre o AngularJS e o Ruby do Jekyll.
A solução foi criar um aquivo em formato de JSON, para que o AngularJS possa pegar as informações.

<h3>posts.html</h3>
Vamos criar o arquivo posts.html(JSON), dentro da pasta "_includes".

<img src="/img/posts/filter.png" />

<h3>index.html</h3>
Definimos que a nossa variável do AngularJS($scope.posts), receba o JSON que está no arquivo posts.html.

<img src="/img/posts/filterindex.png" />

<h3>Exemplo</h3>
Nesse exemplo faço a filtragem dos meus posts.

<script src="/js/angular.min.js"></script>
<div ng-app="myapp">
  	<div ng-controller="MyController">
  		<input type="text" ng-model="expressao" placeholder="Expressao de Consulta"/>
  		<p style="margin-bottom: 5px">Minhas Postagens: </p>
  		<div class="post" ng-repeat="post in posts | filter:expressao">
      		<a ng-show="top10($index)" href="{(post.url)}">{(post.title)}</a>
    	</div>
  	</div>
</div>
<script type="text/javascript">
var myApp = angular.module('myapp', []).config([
	'$interpolateProvider', function($interpolateProvider) {
    	return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  	}
]);

myApp.controller('MyController', function($scope) {
	$scope.posts = {% include posts.html %};

  $scope.top10 = function(id){
    if(id < 10){
      return true;
    }else{
      return false;
    }
  };
});
</script>

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
