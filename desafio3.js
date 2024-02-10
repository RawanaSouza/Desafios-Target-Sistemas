/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem 
que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no 
cálculo da média;
*/


const jsonDados = require("./json/dados.json");
const valores = jsonDados.map(dado => dado.valor).filter(valor => valor !== 0);

let soma = 0;
for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
}
const mediaMensal = soma / valores.length;

let diasSuperiorMedia = 0;
for (let i = 0; i < valores.length; i++) {
    if (valores[i] > mediaMensal) {
        diasSuperiorMedia++;
    }
}

const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);

console.log("O menor valor de faturamento ocorrido em um dia do mês:", menorValor);
console.log("O maior valor de faturamento ocorrido em um dia do mês:", maiorValor);
console.log("A média dos elementos é:", mediaMensal.toFixed(4));
console.log("Número de dias no mês em que o valor de faturamento foi superior à média mensal:", diasSuperiorMedia);