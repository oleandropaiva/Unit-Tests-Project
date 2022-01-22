/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

/* Neste exercício recebi ajuda do aluno Tiago Jerônimo */
const average = (value1) => {
  if (value1.length === 0) {
  return (undefined);
}

let sum = 0;
for (let index = 0; index < value1.length; index += 1) {
  const type = typeof value1[index];
  if (type !== 'number') {
    return undefined;
  } sum += value1[index];
}
const averageEnd = Math.round(sum / value1.length);
return averageEnd;
};

exports = average;