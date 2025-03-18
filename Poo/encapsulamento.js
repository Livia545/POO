//Criando a classe Aluno 
class Aluno {
    #nota
    constructor(nome, idade, nota) {
        // O constructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota; 
    }

    estudar = () => console.log(`${this.nome} está estudando.`);

    verNota = () => this.#nota
}

const livia = new Aluno("Livia" , 17, 100)

    console.log(livia.nome)
    livia.estudar()
    console.log(livia.idade);
    console.log(livia.verNota());
