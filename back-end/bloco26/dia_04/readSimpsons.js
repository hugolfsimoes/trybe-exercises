const fs = require("fs").promises;

async function readSimpsons() {
  try {
    const characters = await fs
      .readFile("./simpsons.json", "utf-8")
      .then((simpsonsContent) => JSON.parse(simpsonsContent));
    return "status 200 OK";
  } catch {
    return "500 (Internal Server Error)";
  }
}

module.exports = readSimpsons;
