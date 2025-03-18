// Criando a classe Aluno
class Aluno{
  constructor(nome, idade) {
        // O constructor é um método tradicional 
     this.nome = nome;
     this.idade = idade;
   }

     estudar = () => console.log(`${this.nome} está estudando.`);
   }

  const livia = new Aluno("Livia" , 17)

   console.log(livia.nome)

  livia.estudar()

// // // Objeto - Belli

// class objeto {
//     constructor(nome, idade) {
//         // O constructor é um método tradicional
//         this.nome = nome;
//         this.idade = idade;
//     }

//     estudar = () => console.log(`${this.nome} está estudando.`);
// }

// const Belli = new objeto("Belli" , 17)

//     console.log(Belli.nome)
//     Belli.estudar()


    

    
