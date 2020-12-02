---
layout: single
title: 'Git - Comandos Essenciais'
category: git
tags: [git]
lang: pt-BR
---
Lembrete e breve descrição de alguns dos comandos do **git** que eu mais uso.
<!--more-->

#### Update - Atualizar o branch local com as mudanças do branch remoto:

    git pull origin master

#### Mandar para branch remoto:

    git push origin master

#### Adicionar arquivo para commit:

    git add arquivo.txt
    
#### Remover arquivos (não só do git, mas também apaga o arquivo localmente):

    git rm arquivo.txt
    
#### Commitar arquivos:

    git commit -m "Mensagem de Commit"

#### Alterar a URL do branch remoto ([mais info][1]):

    git remote set-url origin git@github.com:USERNAME/REPOSITORY2.git
    
#### Adicionar todos os arquivos **alterados** (novos, modificados e removidos) de todas as pastas:

    git add -A
    
- Nota: `-A` é um alias para `--all`, e o comando acima equivale a `git add .; git add -u`. [Mais info aqui][2].

Para maiores informações, consulte a [documentação oficial][3].


  [1]: https://help.github.com/articles/changing-a-remote-s-url
  [2]: http://stackoverflow.com/a/572660/1850609
  [3]: http://git-scm.com/docs/
