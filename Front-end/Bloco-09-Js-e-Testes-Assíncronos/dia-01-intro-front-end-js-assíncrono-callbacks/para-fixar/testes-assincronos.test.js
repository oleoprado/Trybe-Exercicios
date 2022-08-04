// test('Não deveria passar!', () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

// Como o setTimeout é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase "Deveria falhar!" sequer aparece no console.

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });
// Apesar do código acima parecer correto, irá falhar com uma mensagem de timeout. O motivo é que quando uma asserção (verificação) falha, a exceção é lançada, ou seja, algo inesperado aconteceu. Dessa forma, o fluxo é interrompido antes que a instrução done() seja executada.

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }, 500);
// });
// Para resolver, podemos passar o parâmetro de erro para o catch. Dessa forma, caso nosso try não consiga executar o código dentro dele, cairá no catch, que vai pegar esse erro e vai encerrar nosso teste lançando um erro.

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});