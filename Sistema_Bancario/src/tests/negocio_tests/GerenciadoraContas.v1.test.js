const Conta = require("../../negocio/ContaCorrente");
const GerenciaConta = require("../../negocio/GerenciadoraContas");

test("Realizando a transferência de valor do Cliente 1 para o Cliente 2", () => {
  /* ===================== Montagem do cenário ===================== */
  // Cria os clientes
  const conta01 = new Conta(1, 200, true);
  const conta02 = new Conta(2, 0, true);

  // Adicionando os clientes criados em uma lista de clientes do banco.
  const clienteDoBanco = [];
  clienteDoBanco.push(conta01);
  clienteDoBanco.push(conta02);

  const getContas = new GerenciaConta(clienteDoBanco);

  /* ========================== Execução =========================== */
  // Realizando a transferência
  getContas.transfereValor(1, 100, 2);

  /* ========================= Verificação ========================= */
  expect(conta01.getSaldo()).toBe(100);
  expect(conta02.getSaldo()).toBe(100);
});
