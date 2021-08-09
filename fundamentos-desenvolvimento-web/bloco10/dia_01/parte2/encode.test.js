const {encode, decode} = require('./encode-Decode');

describe('Faz a troca de vogais por números na função encode e de números para vogais na função decode', () => {
  test('Testa se é uma função', () => {
    expect(typeof(encode)).toBe('function');
  });

  test('Testa a conversão das vogais a, e, i, o, u, para 1, 2, 3, 4, 5', () =>{
    expect(encode('aeiou')).toBe('12345');
  });

  test('Testa a conversão dos números 1, 2, 3, 4, 5 para a, e, i, o, u', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('Testa se outras letras não são convertidas', ()=>{
    expect(encode('Bem vinda ao meu lar')).toEqual('B2m v3nd1 14 m25 l1r');
  });

  test('Testa se outros números não estão sendo convertidos', () => {
    expect(decode('1627384950')).toEqual('a6e7i8o9u0');
  })

  test('Testa se o tamanho da string retornada é do mesmo tamanho da passada como parâmetro', () => {
    expect(encode('amor').length).toEqual(4);
  })
});