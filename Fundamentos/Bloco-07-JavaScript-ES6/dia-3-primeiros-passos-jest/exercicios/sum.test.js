const sum = require ("./sum.js");

// 1 - Teste se o retorno de sum(4, 5) é 9
describe('verifica o retorno da sum ', () =>{
  it('teste se o retorno de sum(4,5) é 9', () =>{
    expect(sum(4,5)).toEqual(9);
  })

  // 2 - Teste se o retorno de sum(0, 0) é 0
  it('teste se o retorno de sum(0,0) é 0', () =>{
    expect(sum(0,0)).toEqual(0);
  })

  // 3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
  it('deve disparar um erro caso receba string como parametro', () =>{
    expect(() => sum(4, '5')).toThrowError();
  })
  
  // 4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  it('verifica se a msg de erro é "parameters must be numbers"', () =>{
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
  })

});