---
layout: post
title:  "AngularJS - $scope.$apply()"
date:   2014-02-26 10:00:00
categories: Blog
---

O AngularJS fornece alguns comportamentos nativos, como:

* Events -> <code>"ng-click"</code>
* Timeouts -> <code>"$timeout"</code>
* JQuery.ajax() -> <code>"$http"</code>

<h3>Função</h3>
<code>"$scope.$apply()"</code> é um evento assíncrono, chamado no final de cada comportamento, informando que o comportamento ocorreu.

<h3>Dica</h3>
Não chame esse evento vários vezes em seu código, pois o mesmo pode já estar sendo executado. O AngularJS não empilhas as chamadas em uma fila, assim ocorrerá um erro.

<h3>Chamando o Evento</h3>
{% highlight ruby %}
if (!$scope.$$phase) {
    $scope.$apply();
}
{% endhighlight %}

<code>"$scope.$$phase()"</code> é um evento que vai me dizer se já tem algum <code>"$scope.$apply()"</code> em execução. Ele retornar uma expressão "True" ou "False".

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
