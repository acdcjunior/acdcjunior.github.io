---
layout: post
title: 'SVN no Eclipse: Subversive vs. Subclipse e integração com o Maven (M2E connector)'
maintag: 'eclipse svn'
tags: [svn, eclipse, subversive, subclipse, maven, m2e]
lang: 'pt_BR' # _
---
Quando se fala de suporte a Subversion (SVN) no Eclipse, sabe-se que ele conta com dois principais plugins:

- Subversive
- Subclipse

O Subversive é mantido pela equipe que programa o eclipse. O Subclipse é mantido pela equipe que programa o SVN. Páreo duro.

Indo direto ao ponto, os dois plugins são bem parecidos, e ambos podem ser instalados pelo Eclipse Marketplace (veja a seguir).

<!--more-->
Minha recomendação pessoal é o **Subversive**, por uma razão simples: sempre funcionou pra mim (ótimo argumento :) e tem integração fácil e sem defeitos com o **M2E**, o plugin do **Maven** para o eclipse.

<br>

###Instalando o Subversive
Utilize o Eclipse Marketplace: **`Menu -> Help -> Eclipse Marketplace`**
Digite `svn` na caixa de busca. O Subversive deve aparecer como uma das primeiras opções.


<br>

###Conectores, os "drivers" para o SVN
O Subversive precisará de uma implementação do SVN para que ele possa se contectar com os repositórios.

Vá em: **`Menu -> Help -> Update`**

Depois, selecione a URL do subversive no combo *Work with*, selecione algumas implementacoes e instale (conforme figura abaixo).

![subversive svn connectors][1]

<br>

###Integrando com o M2E (Maven)
A funcionalidade mais interessante, porém, é a integração com o M2E, o que permite que você faça o checkout direto de uma pasta no SVN como projeto Maven. Para adicionar essa possibilidade, siga: **`Window -> Preferences -> Maven -> Discovery -> Open Catalog`**

Uma vez lá, selecione e instale o **m2e-subversive**, conforme figura abaixo.

![instalando m2e-subversive connector][3]

Após isso a opção *Check out as Maven Project...* estará habilitada:

![Check out as Maven Project][2]


  [1]: http://oi43.tinypic.com/314f3mh.jpg
  [2]: http://1.bp.blogspot.com/-e9bVp1G2Qm8/UuHHuo_LM9I/AAAAAAAAAwY/jkuqW5gL7hw/s1600/checkout+as+maven+project.png
  [3]: http://3.bp.blogspot.com/-p5w8n-ZpvkY/UuHFx4qimkI/AAAAAAAAAwM/TztSLRlycFg/s1600/subversive+connectors.png
