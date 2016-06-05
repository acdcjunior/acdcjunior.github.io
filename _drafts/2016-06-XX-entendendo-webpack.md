---
layout: single
title: Entendendo WebPack
category: JavaScript
tags: [javascript, webpack, tools, angular]
---

Para entender o WebPack, é importante que você já conheça alguns outros assuntos:

- Obviamente, Node e NPM.
- Tenha pelo menos uma ideia do que são **task runners**, como Grunt ou Gulp.
- Maneiras de especificar modules em JavaScript (como AMD, CommonJS ou ES2016 `import`).

Dito isso, vamos ao que interessa.

# WebPack vs. Grunt/Gulp

Grunt e Gulp são task runners genéricos. Você pode colocar praticamente qualquer coisa pra eles fazerem. Eles têm um sem número de plugins, cada uma pra uma coisa que você imaginar. Alguns exemplos disso são minificação, compilação/transpilação de códigos, uglification, análise estática (linting), dentre outros.

Em resumo, nos task runners, você configura e roda tasks. Nada mais. Cada task faz o que você quiser (ou o que o plugin permitir) que ela faça.
- podem autoimatizar os testes e rodalos qdo codigo muda

# WebPack

> WebPack é como um task runner especializado em processar arquivos de entrada e saída.

Nesse contexto, pense no WebPack como um task runner especializado. Imagine que alguem pegou um task runner, fez algumas pré-configurações e te passou dizendo: *"coloque neste local a página inicial do seu site, coloque aqui a lista das transpilações que você quer fazer e, por fim, coloque naquele outro ponto os tratamentos finais, como minificação ou uglification. Agora basta rodar, a ferramenta junta tudo e coordena o resto pra você."*

Em outras palavras, WebPack é como um task runner com algumas decisões já tomadas. Ponto positivo: muita coisa será feita pra você, sem você se preocupar. Ponto negativo: ele não é tão genérico quanto um task runner qualquer. Mas isso não é problema, já que a gente vai usá-lo é pra desenvolver uma aplicação Web mesmo.

Ele vem com algumas convencoes: webpack nao usa Bower, usa NPM. Eh necessario que você use um module system (para o WebPack poder entender as dependencias entre os arquivos e, dentre outras coisas, sua ordem de carregamento/processamento).




