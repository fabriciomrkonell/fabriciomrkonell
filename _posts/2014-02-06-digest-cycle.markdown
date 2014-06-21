---
layout: post
title:  "Digest Cycle"
date:   2014-02-06 13:00:00
categories: Blog
---

Digest Cycle é o cliclo de notificação do framework. Ao invocá-lo, ele se responsabiliza por detectar as alterações existentes e informar os interessados. Podemos invocar o ciclo pelo comando: $scope.$digest();

<h3>Função $apply</h3>
A função $apply é responsável por resolver os parâmetros antes de invocar o Digest Cycle.

<h3>Aplicando a função $apply</h3>
{% highlight ruby %}
<input type="text" ng-model="name"/>

$scope.$apply(function () {
	$scope.name = "John";
}
{% endhighlight %}

<h3>Função $watch</h3>
A função $watch é reponsável por observar uma determinada propriedade existente, aplicando uma regra.

<h3>Aplicando a função $watch</h3>
{% highlight ruby %}
$scope.plateCounter = 0;

$scope.$watch('elemento', function (novoValor, antigoValor) {
	if (novoValor == antigoValor) return;
	$scope.plateCounter++;
});
{% endhighlight %}



Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!



