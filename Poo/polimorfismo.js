class Pessoa{
    constructor (nome) {
        this.nome=nome
    };
    apresentar = () =>console.log
    (`Olá, meu nome é ${this.nome}`);
}
class Aluno extends Pessoa {
    apresentar = () => console.log(`${this.nome} está estudando`);

    }

    class Professor extends Pessoa {
        apresentar = () => console.log(`Professor ${this.nome} está ensinando.`);

    }
    // Criar objeto

    const Bia = new Aluno ("Bia");
    const Lilian = new Professor ("Lilian");

    Bia.apresentar();
    Lilian.apresentar();

    //Pessoa tem um método padrão apresentar ()
   // Aluno e professor herdam esse método, mas reescrevem, para exibir mensagem diferentes 
   // Mesmo método, e comportamentos diferentes isso é polimorfismo
