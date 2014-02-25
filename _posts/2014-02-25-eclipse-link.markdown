---
layout: post
title:  "EclipseLink: Cache"
date:   2014-02-25 10:00:00
categories: Blog
---

<img src="/img/posts/eclipseLink.png" />

<h3>Introdução</h3>
Por padrão EclipseLink usa um cache de objetos compartilhados. Uma vez que um objeto foi lido, se for lido novamente, o banco de dados 
não precisa ser acessado. Além disso, se o objeto é lido através de qualquer consulta, não terá de ser reconstruído, e ele não precisam ser refeito.

<h3>Ativação na Aplicação</h3>
{% highlight ruby %}
<property name="eclipselink.cache.shared.default" value="true" />
{% endhighlight %}

<h3>Desvantagens</h3>
* Se obanco de dados é alterado diretamente através de JDBC e os objetos no cache serão obsoletos.
* Para objetos de somente leitura, isto não é um problema, mas para objetos que são atualizados com frequência será um problema.

<h3>Informações</h3>
O cache também pode ser apagado. Se você sabe que nenhum dos objetos em cache é o uso, então você pode apenas limpar o cache.

Dúvidas? Entre em contato!