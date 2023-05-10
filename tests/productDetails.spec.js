const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {

    expect (typeof productDetails).toBe('function'); 
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[0],'object'); 
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[1],'object');
  });
});
