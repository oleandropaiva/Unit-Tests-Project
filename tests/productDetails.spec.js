const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {

    expect (typeof productDetails).toBe('function'); 
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
 /*    assert.strictEqual(typeof Object.values('Alcool gel', 'Máscara'),'object'); */
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[0],'object'); 
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[1],'object');
    /* O método assert.deepStrictEqual() testa se dois objetos e seus objetos filhos são iguais, usando o operador ===. */
    /* Se dois objetos, ou seus objetos filhos, não forem iguais (tanto em valor quanto em tipo), um erro será lançado e o programa será encerrado: */
    /* fonte de estudos: https://www.w3schools.com/nodejs/met_assert_deepstrictequal.asp */







    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função. X
    // Teste se o retorno da função é um array.X
    // Teste se o array retornado pela função contém dois itens dentro.X
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
});
