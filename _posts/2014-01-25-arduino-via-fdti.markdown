---
layout: post
title:  "Arduino via FDTI"
date:   2014-01-25 17:50:00
categories: Blog
---

Hello,

Comprei um <a href="http://arduino.cc/en/Main/ArduinoBoardEthernet" target="_blank">Arduino Ethernet</a> recentemente, e encontrei muita dificuldade, pra conectar ele ao computador, pois não tem nenhuma saída USB.

Pesquisei por vários blogs e fóruns, tentando achar uma solução. Pois bem, só consegui, depois que recebi algumas dicas do vendedor que me vendeu a plaquinha FDTI.

Warning!

* A chavinha da plaquinha FDTI 5V deve sempre ficar em 5V.
* Verifique a voltagem da sua placa Arduino Ethernet.
* Se algum cabo for conectado de maneira errada, isso poderá queimar as placas.

Segue um passo-a-passo:
<h3>1º - Arduino Ethernet + Placa FDTI 5V</h3>

Bom, como o Arduino Ethernet não tem nenhuma saída USB, temos que usar um conversor FDTI 5V.

<img src="/img/posts/placaFDTI5V.jpg" />

<h3>2º - Conexão dos Cabos</h3>
A pinagem do Arduino Ethernet é a seguinte: o Pino 6 é o mais próximo da entrada do cartão SD, assim o Pino 1, é o mais longe.

* Pino 1 = GND da plaquinha FDTI 5V;
* Pino 2 = Não é conectado;
* Pino 3 = VCCIO da plaquinha FDTI 5V;
* Pino 4 = Tx da plaquinha FDTI 5V;
* Pino 5 = Rx da plaquinha FDTI 5V;
* Pino 6 = DCD da plaquinha FDTI 5V;

<h3>3º - Drivers FDTI</h3>
Após conectar ao computador, instale os <a href="http://www.ftdichip.com/Drivers/D2XX.htm" target="_blank">drivers</a> necessários pro reconhecimento da placa FDTI 5V.

<h3>4º - Configurando a IDE</h3>
As Configurações são padrão, apenas lembre-se de deixar seu gravador em "AVRSIP mkll" (Ferramentas>Gravador) e adicionar o Arduino correto(Ferramentas>Placa), no meu caso Arduino Ethernet.

Dúvidas? Entre em Contato.

Até a próxima.

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
