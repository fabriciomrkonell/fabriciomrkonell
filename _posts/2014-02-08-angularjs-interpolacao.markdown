---
layout: post
title:  "$Interpolate Personalizado"
date:   2014-02-08 22:00:00
categories: Blog
---

<h3>Interpolação</h3>
Quando comecei escrever meu blog, tive dificuldades para mostrar o código nas postagens com AngularJS. Como esse blog é criado com Jekyll, a aplicação angular é compilada como um site estático, assim nenhuma das minhas expressões estavam aparecendo.

Isso porque o Jekyll usa as mesmas expressões do AngularJS, exemplo: "{ { } }".

<h3>Solução</h3>
A solução que encontrei foi personalizar a Interpolação do Angular. Substituindo as chaves duplas, por {(variavel)}.

<h3>Javascript</h3>
<img src="/img/posts/interpolacao.png" />

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!