A [interface fluente][1] do jQuery e a onipresença do `$` tornaram fácil o trabalho de construção de interfaces web ricas.

Um pouco fácil demais, podemos dizer.

###O problema

Essa simplicidade no uso das funcoes e a origem unica (o `$`) tornaram tambem frequente a mistura, no código JavaScript, de funções com papéis distintos (manipulação do DOM, eventos, Ajax).

Isso dificulta os testes. Isso dificulta o raciocinio em relacao ao codigo. Nao eh possivel criar uma abstracao a partir dele, algo que faça sentido e te permita dizer "opa, esta funcao nao devia estar aqui, 'limpar rua' nao faz parte das responsabilidades da abstração 'caminhao de lixo'".

É o clássico problema de falta de modularização.

Frequentemente, o código fica amarrado demais à interface, tornando o teste impossível sem um código que gere elementos antes.





Veja mais em:
- [SegregatedDOM][2] por Martin Fowler, 16 Jan 2013
- [Keeping jQuery in check: Segregated DOM makes for a maintainable JavaScript codebase][3] por Pete Hodgson, 16 Jan 2013


  [1]: http://en.wikipedia.org/wiki/Fluent_interface
  [2]: http://martinfowler.com/bliki/SegregatedDOM.html
  [3]: http://programming.oreilly.com/2014/01/keeping-jquery-in-check.html