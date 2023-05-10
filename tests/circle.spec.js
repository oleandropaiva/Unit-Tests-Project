const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect (circle(typeof radius !== 'number')) .toBe(undefined); 
    // Teste se circle retorna um objeto.
    expect (circle(typeof circle === 'object')) .toBe();
    // Teste se o objeto retornado tem 3 propriedades.
    expect(Object.keys(circle(3)).length) .toBe (3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBe (undefined); 

    // Teste se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2.
    expect(circle(2)).toHaveProperty ('circumference', 12.56);
    // Teste se dentro do objeto retornado, a função retorna uma key com value igual a área correta para um círculo de raio 3.
    expect(circle(3)).toHaveProperty ('area');
      // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    expect(circle(3)).toHaveProperty ('radius', 'area', 'circumference');

  });
});
