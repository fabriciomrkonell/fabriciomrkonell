---
layout: post
title:  "Lei de Demeter (LoD)"
date:   2014-02-20 10:00:00
categories: Blog
---

<h3>Introdução</h3>
A lei de Demeter foi desenvolvida em 1988 por <a href="http://en.wikipedia.org/wiki/Karl_Lieberherr" target="_blank">Karl Lieberherr</a> e Ian Holland, da Northeastem Univerity, com uma idéia extremamente simples: organizar e reduzir dependências entre classes.

<img src="/img/posts/demeter.png" />

<h3>Dependência entre Classes</h3>
Existe uma dependência entre classes quando uma classe faz referência a outra, através de execução de algum método seu. Esta dependência pode causar alguns “prejuízos” ao projeto.

  * Rigidez: uma mudança em uma classe afeta muitas outras partes do sistema;
  * Fragilidade: quando você realiza uma alteração, partes inesperadas no sistema falham;
  * Imobilidade: não é possível reutilizar partes de uma aplicação em outra, por não ser possível desacoplar este código.

<h3>Lei</h3>
Esta lei tem dois propósitos primários:

  * Simplificar modificações;
  * Simplificar a complexidade da programação.

<h3>Não Seguindo a Lei de Demeter</h3>
 {% highlight ruby %}
function obterDesconto() {
  var totalDesconto = 0;
	for (var i = 0; i < this.Items.Count; i++) {
		totalDesconto += this.LineItems[i].Desconto.Total;
	}
	return totalDesconto;
}
{% endhighlight %}

<h3>Seguindo a Lei de Demeter</h3>
{% highlight ruby %}
function obterDesconto() {
	var totalDesconto = 0;
	for (var i = 0; i < this.Items.Count; i++) {
		totalDesconto += this.LineItems[i].obterDesconto();
	}
	return totalDesconto;
}
{% endhighlight %}

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
