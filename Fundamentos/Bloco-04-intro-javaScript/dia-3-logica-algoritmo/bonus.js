//1-Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 5;

for (let linha = 1; linha <= n; linha += 1) {
  let quadrado = "";
  for (let coluna = 1; coluna <= n; coluna += 1) {
    quadrado += "*"
  }
  console.log(quadrado);
}

//2-faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let num = 5;
for (let row = 1; row <= num; row += 1) {
  let trinagulo = "";
  for (let col = 1; col <= row; col += 1) {
    trinagulo += "*"
  }
  console.log(trinagulo);
}

//3- Agora inverta o lado do triângulo.
let number = 5;

for (let row = 1; row <= number; row += 1) {
  let trinagulo = "";
  for (let col = 1; col <= row; col += 1) {
    trinagulo += "*"
  }
  console.log(trinagulo);
}