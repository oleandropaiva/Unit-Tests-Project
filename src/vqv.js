const vqv = (name, age) => {
  if (typeof name !== 'string' || typeof age !== 'number') {
    return undefined;
  }
  return `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;
