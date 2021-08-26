const fs = require("fs").promises;

async function createFiles() {
  const arrayContent = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  const createFilePromises = arrayContent.map((element, index) =>
    fs.writeFile(`./file${index + 1}.txt`, element)
  );

  await Promise.all(createFilePromises);

  const fileNames = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file4.txt",
    "file5.txt",
  ];

  const readAllFiles = await Promise.all(
    fileNames.map((file) => fs.readFile(file, "utf-8"))
  );

  const newFileContent = readAllFiles.join(" ");
  await fs.writeFile("./fileAll.txt", newFileContent);
  return newFileContent;
}

createFiles()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
