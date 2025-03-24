<?php

class Pessoa {
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function apresentar(){
        echo "Olá sou {$this->nome} e tenho {$this->idade}";
    }
}

    // A Classe Aluno herdar de Pessoas
    class Aluno extends Pessoa{
        public function estudar(){
            echo "{$this->nome} esta estudando";
        }
    }
    class Professor extends Pessoa{
        public function ensinar(){
            echo "{$this->nome} está ensinando";
        }
    }
    
    $alex = new Aluno("Alexandre", 17);
    $michael = new Professor("Miguel", 17);
    
    echo $alex->estudar();
    echo $alex->apresentar();
    echo $michael->ensinar();
    echo $michael->apresentar();
    ?>