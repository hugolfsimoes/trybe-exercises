const fs = require("fs").promises;

async function changeCharacter() {
  const charactersSimpsonsFamily = await fs
    .readFile("./simpsonFamily.json", "utf-8")
    .then((simpsonsFamilyContent) => JSON.parse(simpsonsFamilyContent));

  const newArray = charactersSimpsonsFamily.map((char) => {
    if (char.id == 5) {
      char.name = "Maggie Simpson";
    }
    return char;
  });

  await fs.writeFile("./simpsonFamily.json", JSON.stringify(newArray));
}

changeCharacter();
