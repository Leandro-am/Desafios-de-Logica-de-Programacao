class ItemMagico {
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  calcularDano() {
    return this.tipo === "arma" ? this.dano * 2 : this.dano;
  }
}

const tipoItem = "Espada";
const danoItem = 600;
const resistenciaItem = 2000;

itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

console.log("Tipo: " + itemPersonalizado.tipo);
console.log("Dano: " + itemPersonalizado.dano);
console.log("Resistencia: " + itemPersonalizado.resistencia);

const danoTotal = itemPersonalizado.calcularDano();
console.log("Dano em combate: " + danoTotal);
