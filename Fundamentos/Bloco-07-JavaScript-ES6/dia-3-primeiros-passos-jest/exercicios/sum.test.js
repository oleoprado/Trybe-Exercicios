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
  it('teste se o retorno de sum(4,"5") lança um erro', () =>{
    expect(sum(4,'5')).toEqual(0);
  })
  
  // 4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  it('teste se o retorno de sum(4,"5") é um erro', () =>{
    expect(sum(4,'5')).toThrow('parameters must be numbers');
  })

});