# Usando Typings

instale:

$ npm install typings -g

Na pasta do seu repo, crie um `typings.json` básico:

$ typings init

Agora você precisa preenchê-lo com as definições que você quer.

Procure por definições com o comando `search`:

$ typings search jquery

Após achar a que você quer, instale. Usando `--save` adiciona a entrada no seu `typings.json` automaticamente:

$ typings install dt~jquery --save --global

`dt~` é o prefixo de onde ele deve buscar a definição. `--global` quer dizer que ela é uma definição global. (Se ela for global - ou "ambient" - você só instala com --global.)

Existem outros prefixos. Pra pegar uma definição de um repo do github específico, por exemplo, você pode usar:

$ typings install github:AGBrown/pouchdb.d.ts/pouchdb.d.ts#a6b2b045bcfc3e24859a766153fd8e1e17d20241 --save --global

--

Após isso, as entradas serão adicionadas no seu `typings.json` e pronto.

--

Sugiro que você adicione a pasta typings/ no seu .gitignore. Dessa forma, quem baixar seu projeto, basta dar um `typings install` que ele baixará o especificado no `typings.json` na pasta `typings/`.
