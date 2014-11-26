---
layout: post
title:  "Algoritmos de Alocação de Memória"
date:   2014-09-02 10:00:00
categories: Blog
---

Exemplos de algoritmos de alocação de memória:

<h3>Fisrt-Fit</h3>
Verifica se o processo é menor que a memória atual. Caso for menor, aloca a memória e volta para o início, após percorre toda a lista novamente, caso contrário, segue adiante. Veja o algoritmo <a href="https://github.com/realronchi/alocacaodememoria/blob/master/FirstFit.java">aqui</a>.

<h3>Best-Fit</h3>
Organiza os blocos de memórias de em ordem crescente. Verifica se o processo é menor que a memória. Caso for menor, aloca a memória e volta para o início, após percorre toda a lista novamente, caso contrário, segue adiante. Veja o algoritmo <a href="https://github.com/realronchi/alocacaodememoria/blob/master/NextFit.java">aqui</a>.

<h3>Worst-Fit</h3>
Organiza os blocos de memórias de em ordem decrescente. Verifica se o processo é menor que a memória. Caso for menor, aloca a memória, após volta para o início, e percorre toda a lista novamente, caso contrário, segue adiante. Veja o algoritmo <a href="https://github.com/realronchi/alocacaodememoria/blob/master/WorstFit.java">aqui</a>.

<h3>Next-Fit</h3>
Verifica se o processo é menor que a memória. Caso for menor, aloca a memória, após segue da próxima posição. Veja o algoritmo <a href="https://github.com/realronchi/alocacaodememoria/blob/master/NextFit.java">aqui</a>.

<h3>Observação</h3>
Em todos os casos, se chegou no final da memória, e ainda tiver processo pra alocar, ele percorre novamente a lista ou exibe uma mensagem de que não há mais memória suficiente.

<h3>Algoritmos</h3>
Os algoritmos(em Java) estão disponíveis no <a href="https://github.com/realronchi/alocacaodememoria">Github</a>.

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
