---
layout: post
title:  "Arduino - Sensores"
date:   2014-08-27 21:00:00
categories: Blog
---

<h3>Projeto</h3>
O objetivo desse projeto é gravar as medições de Temperatura e Humidade, feita pelo Arduino Ethernet, em uma base de dados, e disponibilizar uma interface para a visualização.

<h3>Componentes</h3>
Utilizei um Arduino Ethernet e um sensor de Temperatura e Humidade DHT11. Os mesmos utilizados em um <a href="/blog/2014/01/26/sensor-dht11.html" target="_blank">antigo projeto</a>. A parte Front-End fiz com AngularJs.

<h3>Esquema de conexão</h3>
<img src="/img/posts/esquemaSensorDTH11.jpg"/>

<h3>Código</h3>
O código do projeto está disponível no meu <a href="https://github.com/realronchi/arduino" target="blank">Github</a>. A lógica dele, é de a cada 30 minutos, ler o sensor DHT11, e mandar uma requisição pro servidor <a href="http://nodejs.org/" target="blank">NodeJS</a> com <a href="http://www.postgresql.org/" target="blank">PostGreeSQL</a>. Nesse caso usei um servidor da <a href="https://www.heroku.com/" target="blank">Heroku</a>.

<h3>Resultado</h3>
Todas as medições, médias e máximas de Temperatura e Humidade estão disponíveis <a href="http://realronchi.github.io/arduino/" target="blank">aqui</a>.

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
