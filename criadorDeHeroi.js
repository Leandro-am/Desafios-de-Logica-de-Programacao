/*
 Este código simula a criação das classes de um heroi,
 as seguintes classes são as possíveis:
 mago, guerreiro, monge, ninja e arqueiro.
*/

class heroi {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
    // pode soar um pouco confuso, mas isso quer dizer a forma de ataque da classe
    // um monge usa artes marciais, por exemplo.
  }

  atacar() {
    console.log(
      `O herói de nome ${this.nome} de classe ${this.tipo} atacou usando ${this.ataque}`
    );
  }
}

// para demonstrar o funcionamento da classe em prática, criarei um heroi da classe mago

const mago = new heroi("Felipe", 23, "mago", "magia");

// utilização do método atacar para simular o ataque do heroi a um monstro genérico
mago.atacar();
