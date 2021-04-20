function techList(tecnologias, nome) {
  if (tecnologias.length !== 0) {
    tecnologias = tecnologias.sort();
    return tecnologias.map((element)=> {
      return {
        tech: element,
        name: nome
      }
    });
    }
  else {
    return 'Vazio!';
  }
}

module.exports = techList;