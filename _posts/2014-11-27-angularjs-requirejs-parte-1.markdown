---
layout: post
title:  "AngularJS + RequireJS - Parte 1"
date:   2014-11-27 21:00:00
categories: Blog
---

<h3>Objetivo</h3>
Boenas! Querendo contribuir com o <a href="http://blogmv.github.io" target="blank">BlogMV*</a>, resolvi criar uma aplicação com AngularJS + RequireJS.

<h3>Aplicação</h3>
Tudo começa no repositório de referência para a criação da aplicação. Então, vá ao terminal e clone esse <a href="https://github.com/blogmv/baby-steps" target="blank">repositório</a>. Assim:

<script src="https://gist.github.com/realronchi/95a4792bdb6979b5c730.js"></script>

Feito isso, acesse o diretório baby-steps, e instale as dependências do projeto. 

Para isso ser feito, vamos usar o <a href="http://bower.io/" target="blank">bower</a>, que #digassedepassage tem dependências também, como: <a href="http://nodejs.org/" target="blank">Node</a>, <a href="https://www.npmjs.org/" target="blank">NPM</a> e <a href="http://git-scm.com/" target="blank">git</a>. Vamos a instalação:

{% highlight ruby %}
	bower install
{% endhighlight %}

Ok, agora se você abrir seu arquivo index.html, você terá algo parecido com isso.

<img src="/img/posts/blogmvindex.png"  />

<h3>Configurando AngularJS + RequireJS</h3>
Show. Agora edite seu arquivo <code>bower.json</code>, que está na pasta raiz do projeto, com as seguintes linhas.

{% highlight ruby %}
	"requirejs": "2.x",
	"requirejs-domready": "2.0.1",
	"angular":  "1.2.27",
	"angular-route":  "1.2.27",
{% endhighlight %}

Feito isso, vamos executar novamente o processo de instalação de dependências. Lá vai:

{% highlight ruby %}
	bower install
{% endhighlight %}

<h3>RequireJS</h3>
Bom, agora vamos adicionar o RequireJS na nossa aplicação. Adicione no arquivo <code>index.html</code>, que está na pasta raiz do projeto, antes do fechamento da tag <code>body</code> a seguinte linha.

{% highlight ruby %}
	<script data-main="assets/js/main" src="assets/vendor/requirejs/require.js"></script>
{% endhighlight %}

Simples, essa é a nossa refência pro arquivo de configuração do RequireJS.

Continua no próximo episódio....

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
