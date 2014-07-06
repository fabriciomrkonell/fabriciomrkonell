---
layout: post
title:  "$index - ngRepeat Filho"
date:   2014-07-06 13:00:00
categories: Blog
---

<img src="/img/posts/angularjs.jpg"  />


<h3>ngRepeat</h3>
Não tenha dúvida que o <a href="https://docs.angularjs.org/api/ng/directive/ngRepeat" target="_blank">ngRepeat</a> é umas das diretivas que faz o AngularJS ser fantástico.

Nele, temos acesso a várias informações, como:

* <code>$index</code> - Índice atual
* <code>$first</code> - Primeiro elemento de uma Array
* <code>$last</code> - Último elemento de uma Array

<h3>Problema</h3>
Mas, se eu tiver um ngRepeat dentro de um ngRepeat, como tenho acesso ao <code>$index</code>?
Simples.

<h3>Exemplo</h3>
{% highlight ruby %}
<div ng-repeat="(indexPai, usuario) in usuarios">
  <div>
    <div ng-repeat="regra in regras">
      <a>Usuário: { {indexPai} }</a>
      <a>Regra: { {$index} }</a>
    </div>
  </div>
</div>
{% endhighlight %}

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
