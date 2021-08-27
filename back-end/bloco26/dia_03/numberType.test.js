const { expect } = require("chai");

const numberType = require("./numberType");

describe("Executa a função numberType", () => {
  describe("quando o número foi maior que zero", () => {
    describe("a resposta", () => {
      it("é uma string", () => {
        const resposta = numberType(2);

        expect(resposta).to.be.a("string");
      });

      it('"é igual a "positivo"', () => {
        const resposta = numberType(2);

        expect(resposta).to.be.equal("positivo");
      });
    });
  });
  describe("quando o número foi menor que zero", () => {
    describe("a resposta", () => {
      it("é uma string", () => {
        const resposta = numberType(-2);

        expect(resposta).to.be.a("string");
      });

      it("é igual a 'negativo'", () => {
        const resposta = numberType(-2);

        expect(resposta).to.be.equal("negativo");
      });
    });
  });
  describe("quando o número for 0", () => {
    describe("a resposta", () => {
      it("é uma string", () => {
        const resposta = numberType(0);

        expect(resposta).to.be.a("string");
      });

      it("é igual a 'neutro'", () => {
        const resposta = numberType(0);

        expect(resposta).to.be.equal("neutro");
      });
    });
  });
  describe("quando o parâmetro não for do tipo 'number", () => {
    describe("a resposta", () => {
      it("é igual a 'string'", () => {
        const resposta = numberType("A");

        expect(resposta).to.be.a("string");
      });

      it("é igual a", () => {
        const resposta = numberType("A");

        expect(resposta).to.be.equal("o valor deve ser um número");
      });
    });
  });
});
