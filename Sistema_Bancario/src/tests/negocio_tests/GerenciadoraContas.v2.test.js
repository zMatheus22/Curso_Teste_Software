const Gerenciado = require("../../negocio/GerenciadoraContas");
const Conta = require("../../negocio/ContaCorrente");

/**
 * Teste: Tentativa de transferência de um valor da conta de um cliente
 * para outro quando não a saldo suficiente.
 * - Inicializa com duas contas de clientes: uma com saldo de 100 (conta01)
 * e outra com saldo zero (conta02).
 * - Tenta transferir o valor de 200 da conta01 para a conta02.
 * - Verifica se a transferência foi negada (retorna falso).
 * - Verifica se o saldo da conta01 permanece o mesmo (100).
 * - Verifica se o saldo da conta02 permanece o mesmo (0).
 *
 * @author Matheus Strada
 * @date 12/02/2024
 */

test("Tentativa de transferência de um valor, mas sem o saldo suficiente", () => {
  /* ===================== Montagem do cenário ===================== */

  let idConta01 = 1;
  let idConta02 = 2;

  // Criando os contas.
  const conta01 = new Conta(idConta01, 100, true);
  const conta02 = new Conta(idConta02, 0, true);

  // Adicionando as contas criadas em uma lista de contas do banco.
  const contasDoBanco = [];
  contasDoBanco.push(conta01);
  contasDoBanco.push(conta02);

  // Instanciando o gerenciamento de contas.
  const gerConta = new Gerenciado(contasDoBanco);

  /* ========================== Execução =========================== */

  // Tentativa de transferência de um valor maior do que o saldo disponível.
  const sucesso = gerConta.transfereValor(idConta01, 200, idConta02);

  /* ========================= Verificação ========================= */

  expect(sucesso).toBe(false);
  expect(conta01.getSaldo()).toBe(100);
  expect(conta02.getSaldo()).toBe(0);
});
