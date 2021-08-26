const fs = require("fs").promises;

async function getCharacterById(id) {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((simpsonsContent) => JSON.parse(simpsonsContent));

  const characterById = characters.find((char) => char.id == id);

  if (!characterById) {
    throw new Error("id não encontrado");
  }

  return characterById;
}

getCharacterById(2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
