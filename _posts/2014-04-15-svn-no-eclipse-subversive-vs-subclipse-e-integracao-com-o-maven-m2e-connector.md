---
layout: post
title: 'SVN no Eclipse: Subversive vs. Subclipse e integração com o Maven (M2E connector)'
category: Tools
tags: [svn, eclipse, subversive, subclipse, maven, m2e]
lang: 'pt_BR'
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

###*Connectors*, os "drivers" para o SVN
O Subversive precisará de uma implementação do SVN para que ele possa se contectar com os repositórios.

Assim que você instala o Subversive, ele pede para reiniciar. Após o reinicio do eclipse, da primeira vez que você utilizar qualquer funcionalidade do Subversive (abrindo o menu **`Window -> Preferences -> Team -> SVN`** por exemplo) se não existir nenhum conector instalado (o que é o esperado, já que você instalou o Subversive agora), a janela "Connector discovery" é automaticamente chamada.

![subversive svn connectors discovery wizard][4]

Caso essa janela não apareça, não tema, é possível instalar os connectors via update site:

Vá em: **`Menu -> Help -> Install New Software...`**

Adicione, se nao existir, a URL do subversive:

> Subversive SVN Connectors - [http://community.polarion.com/projects/subversive/download/eclipse/4.0/luna-site/](http://community.polarion.com/projects/subversive/download/eclipse/4.0/luna-site/)
 
Se desejar outras URLs mais atualizadas ou de outras versões, visite o site da [Polarion](http://www.polarion.com/products/svn/subversive/download.php?utm_source=eclipse.org&utm_medium=link&utm_campaign=subversive)

Depois de adicionar, selecione a URL do Subversive no combo *Work with*, marque algumas implementacoes e instale (conforme figura abaixo).

![subversive svn connectors via update site][1]

A partir daí é só `Next`, `Next`... até `Finish`.

<br>

###Integrando com o M2E (Maven)
A funcionalidade mais interessante, porém, é a integração com o M2E, o que permite que você faça o checkout direto de uma pasta no SVN como projeto Maven. Para adicionar essa possibilidade, siga: **`Window -> Preferences -> Maven -> Discovery -> Open Catalog`**

Uma vez lá, selecione e instale o **m2e-subversive**, conforme figura abaixo.

![instalando m2e-subversive connector][3]

Após isso a opção *Check out as Maven Project...* estará habilitada:

![Check out as Maven Project][2]

--

Para maiores detalhes sobre a instalação do subversive, é possível consultar a [página oficial](http://www.eclipse.org/subversive/installation-instructions.php).


  [1]: /images/posts/subversive_connectors_update.jpg
  [2]: /images/posts/checkout-as-maven-project.png
  [3]: /images/posts/subversive-connectors.png
  [4]: /images/posts/subversive_connectors_discovery.png
