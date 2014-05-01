---
layout: post
title: 'Maven 3: Download e Instalação (Windows)'
categories: [java]
tags: [maven, tools, windows, java, code]
comments: true
---

Gerenciamento de dependencias e builds sempre foi uma coisa complexa e chata de se fazer, especialmente quando
voce deseja distribuir sua aplicação.

Por solucionar este problema, Maven é uma daquelas ferramentas quase que essenciais no desenvolvimento Java.

A seguir explico de forma sucinta como instalá-lo no Windows. Os passos abaixo devem funcionar para qualquer versao recente (Windows XP, Windows Vista, Windows 7, Windows 8).
<!--more-->

###Instalação e configuração

- Baixe a versao binaria em http://maven.apache.org/download.cgi;
	- Neste exemplo, usei a versao 3.1.1 - baixada [deste link][1].
- Descompacte numa pasta qualquer;
	- Exemplo: `C:\des\apache-maven-3.1.1`

- [Crie a variável de ambiente][2] `M2_HOME` com o valor da pasta acima;
- Adicione `;%M2_HOME%\bin;` ao final da variável de ambiente `PATH`;

- Certifique-se de que a variável de ambiente `JAVA_HOME` aponte para uma JDK recente;
    - Se necessitar, baixe a versao atual da JDK aqui e crie a variavel mencionada.

<br>
###Verificando se funcionou

Para certificar-se de que tudo deu certo:

- Abra o console do windows:
 - Menu iniciar &rarr; Executar (ou <kbd>WIN</kbd>+<kbd>R</kbd>): digite `cmd`
- Com o console aberto, digite `mvn --version`

Sua tela deve exibir as informacoes abaixo:

![mvn --version em execução e seu resultado esperado][3]

A partir de agora o comando `mvn` estará disponível a partir de qualquer pasta.

  [1]: http://ftp.unicamp.br/pub/apache/maven/maven-3/3.1.1/binaries/apache-maven-3.1.1-bin.zip
  [2]: http://www.java.com/pt_BR/download/help/path.xml
  [3]: http://1.bp.blogspot.com/-LVaMRDTTJgY/UqY0niedtEI/AAAAAAAAAus/1kya8KGIZck/s1600/maven3.png