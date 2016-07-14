---
layout: single
title: 'node-gyp - MSB3428: Não foi possível carregar componente "VCBuild.exe" / MSB4132'
category: nodejs
tags: [npm, node-gyp]
lang: pt-BR
comments: true
share: true
mathjax: false
published: true
---

Ao executar, no **Windows**, o `npm install` de alguma dependência que você baixou, a mensagem de erro relativa ao `node-gyp` aparece:<br>

> C:\...>node "C:\Program Files\nodejs\node_modules\npm\ bin\node-gyp-bin\\..\..\node_modules\node-gyp\bin\node-gyp.js" rebuild
Compilando os projetos desta solução um de cada vez. Para habilitar a compilação paralela, adicione a opção "/m".
>
> MSBUILD : error MSB3428: Não foi possível carregar componente "VCBuild.exe" do Visual C++.
Para corrigir isso, 1) instale o .NET Framework 2.0 SDK, 2) instale o Microsoft Visual Studio 2005 ou 3) adicione
o local do componente ao caminho do sistema se ele estiver instalado em outro local.

<!--more-->

Outra possibilidade de mensagem de erro (a depender da sua configuração):

> MSBUILD : error MSB4132: A versão das ferramentas "2.0" não é reconhecida. As versões de ferramentas disponíveis são "4.0".

# Problema

Esse erro acontece porque o [**node-gyp**](https://github.com/nodejs/node-gyp) precisa de um Python (v2.7) e um compilador C/C++ **específicos** instalados. A solução, portanto, é instalar essas ferramentas.

<br>

# Solução

Os passos de configuração são os seguintes:

### Instale o **Visual C++ Built Tools**
- Baixe o [VC++ Build Tools](http://landinghub.visualstudio.com/visual-cpp-build-tools).
- Na instalação, selecione o tipo de instalação **Default** e siga (demora um pouco, ele vai baixar tudo durante a instalação).
<br> ![microsoft-visual-cpp-build-tools-install-default](/images/posts/microsoft-visual-cpp-build-tools-install-default.png)
- [ :bulb: Importante: se, e *somente se*, você estiver no **Windows 7**, instale antes também o [.NET Framework 4.5.1](http://www.microsoft.com/en-us/download/details.aspx?id=40773)]




### Instale o **Python 2.7**
- Baixe e instale o [Python **2.7**](https://www.python.org/downloads/)
  - [:warning: Aviso: Não instale o Python 3.x, **não** vai funcionar! Tem que ser 2.7.x!]
- Adicione no seu `PATH`
- Configure o NPM: `npm config set python python2.7`

### Configure o **NPM**

Execute, no `cmd`:

  - `npm config set msvs_version 2015 --global`
  - Alternativamente, ao invés do comando acima, você pode usar `npm install [package name] --msvs_version=2015` para cada pacote que você vá instalar.

E é isso. Agora é só mandar brasa nos `npm install` e no `node-gyp`.

Fontes: [node-gyp](https://github.com/nodejs/node-gyp/issues/629#issuecomment-153196245)

---

PS.: Se depois disso tudo você receber algumas mensagens durante `npm install` como:

> prebuild ERR! configure error
>
> prebuild ERR! stack Error: Can't find Python executable "python2.7", you can set the PYTHON env variable.

Então [execute:](http://stackoverflow.com/a/33047257/1850609)

    npm config set python "C:\\Programs\\Python2.7\\python2.7.exe"

Mudando o caminho para onde quer que seu Python 2.7 foi instalado.
