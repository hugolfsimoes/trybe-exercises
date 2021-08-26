const fs = require("fs").promises;

fs.readFile("./simpsons.json", "utf-8")
  .then((simpsonsContent) => {
    return JSON.parse(simpsonsContent);
  })
  .then((characters) => {
    return characters.map((character) => {
      return `${character.id} - ${character.name}`;
    });
  })
  .then((resultados) => {
    resultados.forEach((resultado) => console.log(resultado));
  });
