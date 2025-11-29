function calcularSaldoDeRanqueadas(vitorias = 0, derrotas = 0) {
  const saldoDeRanqueadas = vitorias - derrotas;
  let nivel;

  switch (true) {
    case saldoDeRanqueadas <= 10 && saldoDeRanqueadas > 0:
      nivel = "Ferro";
      break;
    case saldoDeRanqueadas > 11 && saldoDeRanqueadas < 20:
      nivel = "Bronze";
      break;
    case saldoDeRanqueadas > 21 && saldoDeRanqueadas < 50:
      nivel = "Prata";
      break;
    case saldoDeRanqueadas > 51 && saldoDeRanqueadas < 80:
      nivel = "Ouro";
      break;
    case saldoDeRanqueadas > 81 && saldoDeRanqueadas < 90:
      nivel = "Diamante";
      break;
    case saldoDeRanqueadas > 91 && saldoDeRanqueadas < 100:
      nivel = "Lendário";
      break;
    case saldoDeRanqueadas >= 101:
      nivel = "Imortal";
      break;
    default:
      nivel = "saldo negativo, não há como classificar seu nível";
  }
  return `O Herói tem saldo de ${saldoDeRanqueadas} e está no nível de: ${nivel}`;
}

const resultado = calcularSaldoDeRanqueadas(150, 65);

console.log(resultado);
