function calcularNivel(vitorias, derrotas) {
    // Variável para calcular o saldo de vitórias
    let saldoDeVitorias = vitorias - derrotas;
  
    // Variável para armazenar o nível
    let nivel;
  
    // Estrutura para determinar o nível
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
  
    // Retorna o saldo de vitórias e o nível do jogador
    return `O Herói tem um saldo de ${saldoDeVitorias} vitórias e está no nível de ${nivel}`;
  }
  
  // Exemplo de uso da função
  let resultado = calcularNivel(35, 5);
  console.log(resultado);