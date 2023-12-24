

calculadoraRankeada(130, 29);

function calculadoraRankeada(vitorias, derrotas) {
    let saldo = (vitorias - derrotas);
    let rank = saldo;

    if (rank <= 10) {
        rank = "Ferro"
    } else if (rank > 11 && rank <= 20) {
        rank = "Bronze"
    } else if (rank > 21 && rank <= 50) {
        rank = "Prata"
    } else if (rank > 51 && rank <= 80) {
        rank = "Ouro"
    } else if (rank > 81 && rank <= 90) {
        rank = "Diamante"
    } else if (rank > 91 && rank <= 100) {
        rank = "Lendário"
    } else
        rank = "Imortal"

    console.log("O herói tem saldo de " + saldo, "vitórias e está no nível de " + rank);
}

