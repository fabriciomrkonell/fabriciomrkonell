---
layout: post
title:  "AngularJS - Firebase"
date:   2014-02-07 13:00:00
categories: Blog
---

<h3>O que é Firebase?</h3>
Firebase é um banco de dados backend em tempo real, ideal para aplicações web. Ele permite criar aplicativos sem o incômodo de gerenciamento de servidores ou escrever código do lado do servidor.

<h3>Como funciona?</h3>
Funciona apenas incluindo a biblioteca em suas aplicações. Esta biblioteca fornece estrutura de dados que são sincronizados automaticamente entre todos os seus clientes e com os servidores do Firebase.
Se um usuário muda alguma informação, todos os outros usuários, verão a alteração em alguns milisegundos.

<h3>Multiplataforma</h3>
<img src="/img/posts/firebase.png" />

<h3>Chat com Firebase</h3>
O exemplo mostra um chat usando a biblioteca Firebase.

<h3>index.html</h3>
{% highlight ruby %}
<div ng-app="myapp">
  <script src="angular.min.js"></script>
  <script src="app-firebase.js"></script>
  <script src="firebase.js"></script>
  <script src="angularfire.js"></script>
  <div ng-controller="MyController">
    <div ng-repeat="msg in messages">
       <em>{ {msg.from} }</em>: { {msg.body} }
    </div>
    <input ng-model="nome" placeholder="Seu Nome">
    <input ng-model="mensagem" ng-keydown="addMessage($event)">
  </div>
</div>
{% endhighlight %}

<h3>app.js</h3>
{% highlight ruby %}
var app = angular.module("myapp", ["firebase"]);

function MyController($scope, $firebase) {
  var ref = new Firebase("https://cqd14kyaz69.firebaseio-demo.com/");
  $scope.messages = $firebase(ref);
  $scope.addMessage = function(e) {
    $scope.messages.$add({
      if e == 13 return false;
      from: $scope.nome,
      body: $scope.mensagem
    });
    $scope.mensagem = "";
  }
}
{% endhighlight %}

<h3>Exemplo</h3>
<div ng-app="myapp">
  <script src="/js/angular.min.js"></script>
  <script src="/js/app-firebase.js"></script>
  <script src="/js/firebase.js"></script>
  <script src="/js/angularfire.js"></script>
  <div ng-controller="MyController">
    <div id="messagesDiv" style="height: 200px; overflow: overlay;">
      <div ng-repeat="msg in messages">
        <p style="margin-bottom: -26px;"><u>{(msg.from)}</u>: {(msg.body)}</p>
      </div>
    </div>
    <input type="text" style="margin-bottom: 10px; margin-top: 40px" ng-model="name" placeholder="Nome">
    <input type="text" ng-model="msg" ng-keydown="addMessage($event)" placeholder="Mensagem... Pressione Enter para enviar">
  </div>
</div>

<h3>Referências</h3>
* <a href="https://www.firebase.com/" target="_blank">Firebase</a>
* <a href="https://www.firebase.com/tutorial/#tutorial/basic/0" target="_blank">Tutorial Completo</a>
* <a href="https://cdn.firebase.com/libs/angularfire/0.6.0/angularfire.min.js" target="_blank">AngularFire</a>

Qualquer dúvida, chama aí no <a href="https://twitter.com/realronchi" target="blank">Twitter</a>!
