---
layout: post
title:  "Arduino via FDTI"
date:   2014-01-25 17:50:00
categories: Blog
---

Hello,

Comprei um <a href="http://arduino.cc/en/Main/ArduinoBoardEthernet" target="_blank">Arduino Ethernet</a> recentemente, e encontrei muita dificuldade, pra conectar ele ao computador, pois não tem nenhuma saída USB.

Pesquisei por vários blogs e fóruns, tentando achar uma solução. Pois bem, só consegui, depois que recebi algumas dicas do vendedor que me vendeu a plaquinha FDTI.

Segue um passo-a-passo:

<h3>1º - Arduino Ethernet + Placa FDTI 5V</h3>
Bom, como o Arduino Ethernet não tem nenhuma saída USB, temos que usar um conversor FDTI 5V.

<img src="http://multilogica-shop.com/imagens/SparkFun/placa-FTDI-5V.jpg" />

<h3>2º - Conexão dos Cabos</h3>

<h3>3º - Drivers FDTI</h3>

<h3>4º - Configurando a IDE</h3>
As Configurações são padrão, apenas lembre-se de deixar seu gravador em "AVRSIP mkll" (Ferramentas>Gravador) e adicionar o Arduino correto(Ferramentas>Placa), no meu caso Arduino Ethernet.

Dúvidas? Entre em Contato.

Até a próxima.
