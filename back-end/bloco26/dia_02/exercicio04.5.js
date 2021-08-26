const fs = require("fs").promises;

async function addCharacter() {
  const charactersSimFamily = await fs
    .readFile("./simpsonFamily.json", "utf-8")
    .then((simpsonFamilyContent) => JSON.parse(simpsonFamilyContent));

  charactersSimFamily.push({ id: "5", name: "Nelson Muntz" });

  await fs.writeFile("simpsonFamily.json", JSON.stringify(charactersSimFamily));
}

addCharacter();
