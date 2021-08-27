const { expect } = require("chai");
const fs = require("fs");
const sinon = require("sinon");

const writeContent = require("./writeContent");

describe("executa a função writeContent", () => {
  before(() => {
    sinon.stub(fs, "writeFileSync");
  });
  after(() => {
    fs.writeFileSync.restore();
  });
  describe("passando dois parâmetros corretos", () => {
    describe("a resposta", () => {
      it("é um string", () => {
        const resposta = writeContent("newFile.txt", "Bora usar teste");

        expect(resposta).to.be.a("string");
      });

      it("é igual a 'success'", () => {
        const resposta = writeContent("newFile.txt", "Bora usar teste");

        expect(resposta).to.be.equal("success");
      });
    });
  });
});
