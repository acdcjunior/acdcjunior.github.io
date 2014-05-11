---
layout: post
title: 'Exemplos de @Rule do JUnit (@Rule annotation example)'
maintag: 'junit'
tags: [junit, tests, java, rule, anotacao, annotation, java, code]
---
Você precisa executar um trecho de código no `@Before` de varias classes de teste?
Você precisa executar um trecho de código no `@After` de varias classes de teste?

Para evitar a duplicacao de codigo decorrente dessa necessidade, antigamente criavamos uma superclasse abstrata de testes,
colocavamos nela os metodos `@Before` e `@After`, e faziamos todas as outras classes de teste estenderem essa superclasse.

###`@Rule` to the rescue

Desde a versao 4.7 o JUnit disponibiliza uma anotacao `@Rule` que pode nos ajudar a contornar este problema:
reutilizar codigo tipico de `@Before` e `@After` sem necessidade de heranca (e o melhor, voce pode ter varias `@Rule` em
uma classe de teste, o que a heranca nao permite).
<!--more-->

Chega de blablabla e vamos ao exemplo.

Classe que implementa a `@Rule`: 

{% gist 7812740 %}

e uma classe de testes que usa `@Rule` acima: 

{% gist 7812834 %}

É isso! Happy testing!