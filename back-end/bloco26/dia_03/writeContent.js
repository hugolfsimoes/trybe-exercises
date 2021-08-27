const fs = require("fs");

function writeContent(fileName, fileContent) {
  try {
    fs.writeFileSync(fileName, fileContent);
    return "success";
  } catch {
    return "fail";
  }
}

module.exports = writeContent;
