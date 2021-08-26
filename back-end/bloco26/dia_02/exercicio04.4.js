const fs = require("fs").promises;

async function createNewFile() {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((simpsonsContent) => JSON.parse(simpsonsContent));

  const newArray = characters.filter((char) => char.id < 5);
  await fs.writeFile("./simpsonFamily.json", JSON.stringify(newArray));
}

createNewFile();
