---
layout: post
title:  "Two-Way Data Binding"
date:   2014-02-05 21:00:00
categories: Blog
---

<h3>Como funciona o mecanismo de data binding?</h3>

Two-Way Data Binding é um vínculo de mão dupla que, por meio um processo de notificação, sincroniza os dados existentes na View e no Controller. Ele evita uma enorme quantidade de código desnecessário, utilizado apenas para trafegar dados entre ambas as camadas.

<h3>Sem o mecanismo de data binding</h3>
<img src="/img/posts/semDataBind.jpg"  />

<h3>Com o mecanismo de data binding</h3>
<img src="/img/posts/comDataBind.jpg"  />

<h3>Processo de Inicialização </h3>
Para entender como o AngularJS consegue manter o sincronismo de dados entre a View e o Controller, é importante compreender o processo de inicialização do framework.

* O compilador percorre a árvore DOM em busca de diretivas do tipo ng-model.
* Ao encontrar, a função $apply é adicionada ao evento onkeydown. Dessa forma, ao pressionar qualquer tecla dentro de um campo de texto, o sistema de notificação de mudanças é notificado.
* Em seguida, o compilador busca as expressões, utilizando a função $watch para fazer o registro no sistema de notificação de mudanças no estado das propriedades.

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!