<?php

class Aluno{
    public $nome;
    public $idade;
    private $nota; //atributo privado 

    public function __construct($nome, $idade, $nota)
    {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->nota = $nota;
    }

    public function verNota(){
        return $this->nota;
    }
}

$alex = new Aluno ("Alexandre", 38, 9);

echo $alex->nome;
echo $alex->verNota();

?>
