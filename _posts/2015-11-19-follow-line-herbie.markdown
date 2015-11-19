---
layout: post
title:  "Herbie: Follow Line"
date:   2015-11-19 12:00:00
categories: Blog
---

<h3>Projeto</h3>
Herbie é um robô seguidor de linha, desenvolvido pelo <a href="http://www.catolicasc.org.br/" target="blank">Grupo de Robótica da Católica de Santa Catarina</a>, grupo no qual participo. O objetivo de um robô seguidor de linha, como o nome já diz, é seguir uma linha, em um percurso, no menor tempo possível. Ele foi projetado para andar tanto em linha de branca (com a pista na cor preta) como em linha de cor preta (com a pista na cor branca).

<img src="/img/posts/herbie2.jpeg"/>

<h3>Desenvolvimento</h3>
Ele foi impresso em uma impressora 3D, e utiliza os seguintes componentes: Arduino Nano, Ponte H e sensor de Refletância Analógico.

<h3>Lógica</h3>
Primeiramente ele faz a leitura dos 8 sensores analógicos. Após ponderamos essas leituras adicionando um valor maior para as leituras mais importantes, por exemplo, as leituras das extremidades do sensor de Refletância Analógico, tem mais "peso" (importância), do que as leituras centrais.

A imagem abaixo simula as leituras.

<img src="/img/posts/herbie3.png"/>

Então é utilizada a técnica de PID (Proporcional, Integral e Derivada), que é uma técnica de controle que une as ações proporcional, integral e derivativa, fazendo assim com que erro seja minimizado pela ação proporcional, zerado pela ação integral e obtido com uma velocidade antecipativa pela ação derivativa (<a href="https://pt.wikipedia.org/wiki/Controlador_proporcional_integral_derivativo" target="blank">Wikipédia</a>).

O resultado desse cálculo é utilizado para definir a direção (acelerar roda direita e parar a roda esquerda, por exemplo) e velocidade em que o motor deve atuar.

<h3>Finalizando</h3>
Como sou defensor do "Open Source", disponibilizei a lógica do Herbie usada em competições: está disponível no meu <a href="https://github.com/ronchifabricio/wickedbotz/tree/master/code" target="blank">Github</a>.

<img src="/img/posts/herbie1.jpeg"/>

Obrigado a todos os que participaram no desenvolvimento do Herbie, em especial ao professor <a href="http://lattes.cnpq.br/2101585307653224" target="blank">Manfred Heil</a>, e meu colega <a href="https://github.com/schmittjoaopedro" target="blank">João Pedro</a>.

Espero ter ajudado, lhes deixo um abraço, e camigol!