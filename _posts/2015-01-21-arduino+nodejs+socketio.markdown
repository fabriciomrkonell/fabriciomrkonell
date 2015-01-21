---
layout: post
title:  "Arduino + NodeJS + Socket.IO"
date:   2015-01-21 12:00:00
categories: Blog
---

<h3>Arduino</h3>
Depois de alguns testes, testes, e mais testes com o Arduino, finalmente consegui fazer a comunicação  entre <a href="http://nodejs.org/" target="blank">NodeJS</a> + <a href="http://socket.io/" target="blank">Socket.IO</a> com o Arduino. Sim, via TCP/IP.

<h3>Projeto</h3>
Lá vai.

Primeira 'coisa' a fazer é clonar o projeto que está no meu <a href="https://github.com/realronchi/arduino-nodejs-socketio" target="blank">Github</a>. Feito isso, rode <code>npm install</code>para instalar todas as dependências.


Ok, agora vamos iniciar o servidor NodeJS com <code>node server.js</code>. Pronto o servidor está no ar.

OBS: Servidor web está na porta 8090, e o socket na 1337.

<h3>Código</h3>
Bom, agora que já estamos com o servidor NodeJS no ar, vamos colocar no Arduino o código que está no diretório <code>code_arduino</code>. Fácil, fácil!

Nesse exemplo vamos ligar um buzzer via Socket.IO.

Então, após ja ter o fonte, vamos colocar o buzzer no Arduino. Segue o modelo:

<img src="/img/posts/arduino-nodejs-socketio.jpg"/>

<h3>Finalizando</h3>
Ok, Ok. Já temos nosso modelo montado. Agora é só colocar o Arduino na rede.

Se tudo ocorrer bem, aparecerá uma mensagem no console do NodeJS que o Arduino foi conectado.

Após isso, é só acessar o servidor web: <code>http://localhost:8090/</code> e ligar o buzzer do Arduino, através do botão ligar.

<h3>Observações</h3>
* Para colocar o Arduino na rede, o servidor NodeJS tem que está no ar.
* Lógicamente, tem que usar um Arduino Ethernet.

<h3>Referência</h3>
* <a href="https://github.com/johnschimmel/node-session">node_session</a>

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
