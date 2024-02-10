/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve 
dentro do valor total mensal da distribuidora.
*/

console.log("O valor de faturamento mensal por estado:\n");
console.log("SP - R$67.836,43");
console.log("RJ: - R$36.678,66");
console.log("MG - R$29.229,88");
console.log("ES - R$27.165,48");
console.log("0utros - R$19.849,53\n");

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

const total = sp + rj + mg + es + outros;
console.log("Valor total mensal: R$" + total, "\n");

console.log("O percentual de cada estado dentro do valor total de faturamento:\n");

let porSP = (sp / total) * 100;
console.log("SP é",porSP.toFixed(2) + "% do valor total.");

let porRJ = (rj / total) * 100;
console.log("RJ é",porRJ.toFixed(2) + "% do valor total.");

let porMG = (mg / total) * 100;
console.log("MG é",porMG.toFixed(2) + "% do valor total.");

let porES = (es / total) * 100;
console.log("ES é",porES.toFixed(2) + "% do valor total.");

let porOutros = (outros / total) * 100;
console.log("Outros é",porOutros.toFixed(2) + "% do valor total.");