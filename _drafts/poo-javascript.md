http://jsperf.com/method-declaration-inside-vs-prototype
http://javascript.crockford.com/private.html

Apesar da keyword `class` ser reservada em JavaScript, ela não serve para declarar classes[^class].

A declaração de objetos, porém, pode ser alcançada através do uso das `function`.



```
/* REGISTRE O NAMESPACE */
var br = br || {};
br.com = br.com || {};
br.com.namespace = br.com.namespace || {};

(function(br) {

	/**
	* Construtor - Deve ser a primeira declaracao
	* @constructor
	*/
	br.com.namespace.Pessoa = function(nome, idade, salario) {
		this.nome = nome;
		this.idade = idade;
		this.salario = salario;
		this.calcularAposentadoria();
	};
	
	
	// Campos "STATIC" ----------------------------------------------
	
	// Campos "STATIC" e "PUBLIC"
	br.com.namespace.Pessoa.tipo = "Mamífero";
	br.com.namespace.Pessoa.emPaz = true;
	
	// Campos "STATIC" e "PRIVATE"
	var populacaoAtual = 2500501; // Variaveis e acessiveis somente neste escopo
	var IDADE_ADULTA = 18; // boas para constantes internas da classe


	// Funcoes "STATIC" ---------------------------------------------
	
	// Funcao "STATIC" e "PUBLIC"
	br.com.namespace.Pessoa.getPopulacaoProjetada = function() {
		return populacaoAtual * calculaProjecao();
	};
	
	// Funcao "STATIC" e "PRIVATE"
    function calculaProjecao() {
        return populacaoAtual / 3.14;
    }
	
	
	// Campos e funcoes DE INSTANCIA -------------------------------

    // Campos de instancia e "PUBLIC" (prototype)
    br.com.namespace.Pessoa.prototype.nome = null;
	br.com.namespace.Pessoa.prototype.idade = null;
	br.com.namespace.Pessoa.prototype._salario = null;

    // Funcoes de instancia e "PUBLIC"
	br.com.namespace.Pessoa.prototype.getNome = function() {
		return this.nome;
	};
	br.com.namespace.Pessoa.prototype.isAdulto = function() {
		return this.idade > IDADE_ADULTA;
	};
	br.com.namespace.Pessoa.prototype.calcularAposentadoria = function() {
	    if (this.salario > 5000) {
		    this.aposentadoria = this.idade + 10;
		} else {
		    this.aposentadoria = this.idade + 5;
		}
	};
	
	// Campos e funcoes de instancia e "PRIVATE"
	// Nao eh possivel obter funcoes ou campos de instancia privados sem uma grande penalidade de
	// performance. Uma convencao bastante seguida é o uso do prefixo "_" em campos e funcoes
	// publicas para denotar que a intencao era que eles fossem somente usados internamente.
	// Para criar campos e funcoes privados, a criacao teria que ser feita durante a declaracao da funcao,
	// fazendo com que os campos/funcoes fossem "redeclarados" a cada instanciacao da classe - declaracoes que,
	// feitas via prototype, seriam feitas apenas uma vez. A redeclaracao torna a instanciacao em media 8 a 10
	// vezes mais lenta. Veja teste em: http://jsperf.com/method-declaration-inside-vs-prototype

})(br);

// Exemplo de uso
var joao = new br.namespace.Pessoa("Joao Silva", 30, 5000); // use "new namespace.NomeDaClasse(...)" para instanciar
var maria = new br.namespace.Pessoa("Maria Santos", 15, 2000);

if (joao.isAdulto()) {
    console.log(joao.getNome() + " é adulto.");
else {
    console.log(joao.getNome() + " não é adulto.");
}
if (maria.isAdulto()) {
    console.log(joao.getNome() + " é adulto.");
else {
    console.log(joao.getNome() + " não é adulto.");
}
```

  [^class]: Embora não sirva pra nada hoje, nada impede que ela seja usada no futuro, em uma versão atualizada do JavaScript.