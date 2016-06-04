---
layout: single
title: 'Exemplos da anotação <code>@Rule</code> do JUnit'
category: JUnit
tags: [junit, tests, java]
lang: 'pt_BR'
---
Você precisa executar um trecho de código no `@Before` de várias classes de teste?
Você precisa executar um trecho de código no `@After` de várias classes de teste?
<!--more-->

Para evitar a duplicação de código decorrente dessa necessidade, antigamente criávamos uma superclasse abstrata de testes,
colocávamos nela os metodos `@Before` e `@After`, e faziamos todas as outras classes de teste estenderem essa superclasse.

Mas e se fossem várias funcionalidades? Aí precisaríamos de várias superclasses. Só que o Java não permite herança múltipla, então
éramos obrigados a criar uma *God Class* com tudo que precisávamos. Nem preciso dizer o quanto isso complicava o desenvolvimento no longo prazo.

### `@Rule` ao resgate!

Desde a versão 4.7 o JUnit disponibiliza uma anotação `@Rule` que pode nos ajudar a solucionar esse problema:
reutilizar código típico de `@Before` e `@After` sem necessidade de herançaa (e o melhor, você pode ter várias `@Rule` em
uma classe de teste, o que a herança não permite).

Chega de blablabla e vamos ao exemplo.

Classe que implementa a `@Rule`: 

{% gist 7812740 %}

e uma classe de testes que usa `@Rule` acima: 

{% gist 7812834 %}

É isso! A execução desse teste deve te mostrar a ordem exata de como a `@Rule` é executada. Deve ser tudo que você precisa saber. :)