let media = parseFloat(prompt("Digite a média final do aluno:"));
let frequencia = parseFloat(prompt("Digite o percentual de frequência do aluno:"));

if (media < 7.0) {
    console.log("Reprovado por nota");
} else {
    if (frequencia >= 75) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado por frequência");
    }
}