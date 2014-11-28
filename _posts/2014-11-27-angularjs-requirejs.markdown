---
layout: post
title:  "AngularJS + RequireJS"
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

<script src="https://gist.github.com/realronchi/6224308801da075e8b04.js"></script>

Ok, agora se você abrir seu arquivo index.html, você terá algo parecido com isso.

<img src="/img/posts/blogmvindex.png"  />

<h3>Configurando AngularJS + RequireJS</h3>
Show. Agora edite seu arquivo <code>bower.json</code>, que está na pasta raiz do projeto, com as seguintes linhas.

<script src="https://gist.github.com/realronchi/c24af15fbbe62707fb17.js"></script>

Agora vamos executar novamente o processo de instalação de dependências. Lá vai:

<script src="https://gist.github.com/realronchi/6224308801da075e8b04.js"></script>

<h3>RequireJS</h3>
Bom, agora vamos adicionar o RequireJS na nossa aplicação. Adicione no arquivo <code>index.html</code>, que está na pasta raiz do projeto, antes do fechamento da tag <code>body</code> a seguinte linha.

<script src="https://gist.github.com/realronchi/5e806ccb09322411838a.js"></script>
Simples, essa é a nossa refência pro arquivo de configuração do RequireJS, que está logo aqui em baixo.

<h3>Código, Código, Código...</h3>

Ok, agora vamos colocar a mão na massa.
Primeiro vamos criar o arquivo de configuração do RequireJS, que foi citado anteriormente. Lá vai:

<script src="https://gist.github.com/realronchi/81f4fcfc6ec093656f38.js"></script>
Sem mistério, na primeira parte apenas referênciamos nossas libs, e suas dependências.

Na segunda parte, dizemos quais arquivos vamos utilizar na aplicação, como: controllers, diretivas e constants. Na sua função de callback, configuramos as rotas que vão ser utilizadas pelo AngularJS(nota-se que já dizemos pro qual a view e qual controller que será utilizado em cada rota). Após isso, iniciamos manualmente o AngularJS na aplicação através da função <code>domReady</code>, que é um plugin do RequireJS que avisa quando o DOM está pronto.

Beleza, agora vamos ao próximo.

<script src="https://gist.github.com/realronchi/120faa4c2cead7da1e89.js"></script>
Como estamos trabalhando com módulos separados, ou seja, controllers, diretivas e constants estão em módulos distintos, o arquivo <code>app.js</code> simplesmente junta eles e adiciona a nossa aplicação AngularJS.

Show, agora vamos ver como que os módulos dos controllers, diretivas e constants são iniciados individualmente. Go Go Go.

<script src="https://gist.github.com/realronchi/ea0f331c387dd8a761d6.js"></script>
<script src="https://gist.github.com/realronchi/e9fc322a6ae1204810cf.js"></script>
<script src="https://gist.github.com/realronchi/bcb85cab73ab29256f18.js"></script>
Difícil? não né? Simples e fácil de entender.

Bom, agora que já temos na aplicação o AngularJS iniciado, as configurações do RequireJS prontas e os módulos do AngularJS adicionados, vamos adicionar os nossos controllers, diretivas e constants.

<script src="https://gist.github.com/realronchi/f52498d270d66c5145bc.js"></script>
Começamos criando uma constants chamada <code>title</code>, que nada mais é do que um objeto que não pode ser alterado, e que vai ser adicionado ao nosso controller <code>HomeController</code>, logo mais vai ser explicado, através de injeção de dependência. Nesse caso atribui dois valores, que vão representar o título da aplicação.

Feito isso, vamos a nossa diretiva.

<script src="https://gist.github.com/realronchi/1b0f5f08ab3b53544370.js"></script>
Bom, primeiro: diretivas é uma forma de abstrair o código, e nela manipulamos o DOM da aplicação. Segundo: Criei uma diretiva chamada <code>myFocus</code>, que vai ser usada para dar <code>focus</code> ao nosso elemento. Há vá? #zuera.

Show, como dito anteriormente no arquivo <code>main.js</code>, temos três rotas na aplicação, são elas: <code> /, /hello e /discussion</code>. Cada rota tem seu controller e sua view. Vamos ver primeiro os controllers:

<script src="https://gist.github.com/realronchi/fd40b283bebcac77114e.js"></script>
<script src="https://gist.github.com/realronchi/bc2a6d95bf173ebda744.js"></script>
<script src="https://gist.github.com/realronchi/c5aa7ceaf44db5f0f7b0.js"></script>

Tranquilo! Temos nossos três controllers. No primeiro, <code>HomeCtrl</code>, olha o que está ali nas dependências. MAGIC! A constant <code>title</code> que foi criada anteriormente, show ein!

Injetamos também nos três controllers a dependência do <code>$scope</code>. Como diria o Faustão, "Essa fera aí meu!" vai nos ajudar a manipular a nossa página html.

E falando em html, vamos as nossas views:

<script src="https://gist.github.com/realronchi/c1cefa912b7bebd4e239.js"></script>
<script src="https://gist.github.com/realronchi/90fb1905914e61706be2.js"></script>
<script src="https://gist.github.com/realronchi/1796cf0a617537aa29ab.js"></script>

Beleza, temos nossas views. Agora analisando elas, observamos que temos algo parecido com isso nas view <code>{ { ... } } </code>. Essas chaves se chamam interpolação, que é a forma de monstrar no nosso DOM, as variáveis(<code>$scope</code>) que foram declaradas nos controllers. Por exemplo, olha o controller <code>HelloCtrl</code>, temos uma variável chamada <code>text</code>, que recebe um texto Lorem Ipsum, e agora olhe a view desse controller, <code>hello.html</code>, temos nela definido <code>{ {text} }</code>. Show!

Mas o que é mais legal, e não mencionei ainda, é o <code>ng-repeat</code>, que está na view <code>discussion.html</code>, esse cara é fantástico! No controller dele, <code>DiscussionCtrl</code>, definimos uma array de strings, chamada <code>discussion</code>. Se observarmos temos a diretiva <code>ng-repeat="word in discussion"</code>, ou seja, pra cada string da array, ele vai criar o elemento no DOM, nesse caso uma <code>li</code>. MAGIC 2x!

Ok, está quase. Falta apenas o <code>index.html</code>. Lá vai ele:
<script src="https://gist.github.com/realronchi/dadc7cee70449f040285.js"></script>

Bom, em comparação com o <code>index.html</code> que já tinha no nosso projeto referência, foram feitas pequenas alterações. Primeiro, nota-se que tem um <code>input</code>, e olha o atributo que está nele: <code>my-focus</code>, Show né? Essa é diretiva que criamos anteriormente, que servirá pra dar <code>focus</code> ao input quando a nossa aplicação for iniciada. E não para por aí, ela tem outra diretiva atribuida, <code>ng-model="name"</code>, que é a forma de mostrar no nosso DOM, as variávies(<code>$scope</code>) que foram declaradas nos controllers.

MAS PERAE! Isso não é mesma coisa que interpolação?
Resposta: Não! Através do <code>ng-model</code> podemos alterar os valores das variáveis(<code>$scope</code>) do controller. MAGIC 3x. Olhe logo em baixo, agora sim temos em forma de interpolação a mesma váriavel(<code>$scope</code>). Agora digite algo no <code>input</code> para ver o que acontece: Feittoooo! Ele, AngularJS, faz a sincronização automática do model com o controller. Isso se chama Data Binding.

E pra finalizar, temos a diretiva <code>ng-view</code>, que nela que vai ser exibidas as nossas views.

ACABOU! É TETRA! É TETRA! #zuera;

Agora você já tem a aplicação pronta, é só rodar ela. Espero que tenham gostado e aprendido.

Dúvidas, sugestões, críticas... são sempre bem vindas! Se tiver uma delas, da um berro aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
