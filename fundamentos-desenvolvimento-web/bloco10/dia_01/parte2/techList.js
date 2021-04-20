function techList(tecnologias, nome) {
  let array = [];
  if (tecnologias.length !== 0) {
    tecnologias = tecnologias.sort();
    for (let key = 0; key < tecnologias.length; key += 1) {
      array[key] = {
        tech: tecnologias[key],
        name: nome,
      };
    }
  } else {
    array = 'Vazio!';
  }
  return array;
}

module.exports = techList;