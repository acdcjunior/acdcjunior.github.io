---
layout: post
title: 'Criando Branches no SVN via TortoiseSVN'
maintag: 'svn'
tags: [svn, tortoisesvn]
lang: 'pt_BR' # _
---
Como eu esqueço sempre, esse é apenas um lembrete sobre como criar branches no SVN.
<!--more-->

Digamos que você queira criar um **branch** de um repositório qualquer, por exemplo: `http://mysvn/svn/projeto/trunk`. Chamaremos esse repositório de... `REPOSITORIO` :)


### Como Criar Branches no SVN usando TortoiseSVN:

- Faça checkout do `trunk` do `REPOSITORIO` numa pasta qualquer, digamos `X`;
- Clique com o botão direito: `TortoiseSVN` -> `Branch/tag...`;
- Digite em "`to path:`" o nome da nova branch;
- Fim!

Note que a pasta `X` ainda esta apontando para `REPOSITORIO`, local que você originalmente fez checkout.

Você tem que fazer um *switch* para que `X` aponte para o branch recém-criado!
