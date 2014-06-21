---
layout: post
title:  "Análise de Sistemas - SOLID"
date:   2014-03-26 13:00:00
categories: Blog
---

<h3>O que é?</h3>
SOLID são cinco princípios básicos de programação e design orientados a objetos, introduzidos por Uncle Bob no início de 2000. São "regras e padrões" que podem diferenciar um desenvolvedor, tornando-o capaz de escrever um código extensível, coeso e de fácil manutenção.

<h3>S</h3>
Single Responsibility - A classe dever ter uma única responsábilidade;

<h3>O</h3>
Programas devem ser abertos pra extenção e fechados pra modificação - Nunca mais arrumar;

<h3>L</h3>
<a href="http://pt.wikipedia.org/wiki/Barbara_Liskov" target="blank">Barbara Liskov</a> - Princípio da substituição - Classes derivadas devem poder ser substituídas por suas classes base - compartamento do pai deve ser honrado pelo filos, e os filhos podem ser chamados pelo pais, posso chamar um fiho respondendo pelo pai

<h3>I</h3>
Interface Segregation - Objeto deve implementar apenas os métodos dos pais - Não fale com estranho, somente com objetos da mesma classe

<h3>D</h3>
Dependency Inversion - Inverção de dependência - Se depender de alguem, dependa de alguem abstrato, pois ao contrario podem sofrer alterações; classes de alto nivel não podem depender de classes de baixo nivel, a não ser de abstração


Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!