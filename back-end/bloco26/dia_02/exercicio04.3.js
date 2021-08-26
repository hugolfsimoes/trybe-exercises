const fs = require("fs").promises;

async function removeCharacters() {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((simpsonsContent) => JSON.parse(simpsonsContent));

  const newArray = characters.filter(
    (char) => char.id !== "10" && char.id !== "6"
  );

  return newArray;
}
removeCharacters()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
