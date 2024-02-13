const Cliente = require("../../negocio/Cliente");
const Gerenciado = require("../../negocio/GerenciadoraClientes");

// Variáveis globais
let gerCliente;
let idCliente01 = 1;
let idCliente02 = 2;
let idClienteInexistente = 1001;

// Configuração antes de cada teste
beforeEach(() => {
  /* ===================== Montagem do cenário ===================== */

  // Criando os clientes.
  const client01 = new Cliente(
    idCliente01,
    "Matheus",
    21,
    "matheus@email.com",
    1,
    true
  );
  const client02 = new Cliente(
    idCliente02,
    "Ana Paula",
    39,
    "ana@email.com",
    1,
    true
  );

  // Adicionando os clientes criados em uma lista de clientes do banco.
  const clienteDoBanco = [];
  clienteDoBanco.push(client01);
  clienteDoBanco.push(client02);

  // Instanciando o gerenciamento de clientes.
  gerCliente = new Gerenciado(clienteDoBanco);
});

// Configuração após cada teste
afterEach(() => {
  gerCliente.limpa();
});

/** Teste: Pesquisa se o cliente com ID: 1 tem o nome de Matheus
 * - Inicia com a criação dos clientes.
 * - Pesquisando o cliente com ID 1.
 * - Verificando se o nome do cliente retornado é "Matheus".
 * - Garantindo a consistência da pesquisa.
 *
 * @author Matheus Strada
 * @date 08/02/2024
 */

test("Pesquisa Cliente, o cliente com ID: 1 o Nome: Matheus", () => {
  /* ========================== Execução =========================== */

  // Isso é o que realmente desejo testar (Pesquisar Cliente).
  const resposta = gerCliente.pesquisaCliente(idCliente01);

  /* ========================= Verificação ========================= */

  expect(resposta.getNome()).toBe("Matheus");
});

/** Teste: Pesquisa um cliente que não existe.
 * - Inicia com a criação dos clientes.
 * - Pesquisando um cliente com ID não cadastrado.
 * - Verificando o cliente retorna null.
 *
 * @author Matheus Strada
 * @date 12/02/2024
 */

test("Pesquisa Cliente Inexistente", () => {
  /* ========================== Execução =========================== */

  // Isso é o que realmente desejo testar (Pesquisar Cliente).
  const resposta = gerCliente.pesquisaCliente(idClienteInexistente);

  /* ========================= Verificação ========================= */

  expect(resposta).toBe(null);
  expect(gerCliente.getClientesDoBanco().length).toBe(2);
});

/** Teste: Deletando o cliente com ID: 2
 * - Inicia com a criação dos clientes.
 * - Removendo o cliente com ID 2.
 * - Verificando se a remoção foi bem-sucedida.
 * - Verificando se o número de clientes na lista foi reduzido em 1.
 * - Pesquisando o cliente com ID 2 para garantir que ele não existe mais na lista.
 *
 * @author Matheus Strada
 * @date 08/02/2024
 */

test("Remove Cliente, deletando o cliente com ID: 2", () => {
  /* ========================== Execução =========================== */

  // Isso é o que realmente desejo testar (Remover Cliente).
  const resposta = gerCliente.removeCliente(idCliente02);

  /* ========================= Verificação ========================= */

  expect(resposta).toBe(true);
  expect(gerCliente.getClientesDoBanco().length).toBe(1);
  expect(gerCliente.pesquisaCliente(idCliente02)).toBe(null);
});

/** Teste: Remover um cliente que não existe.
 * - Inicia com a criação dos clientes.
 * - Remove um cliente com ID não cadastrado.
 * - Verificando se a tentativa de remoção do cliente retorna falso.
 *
 * @author Matheus Strada
 * @date 12/02/2024
 */

test("Remove Cliente Inexistente", () => {
  /* ========================== Execução =========================== */

  // Isso é o que realmente desejo testar (Remover Cliente).
  const resposta = gerCliente.removeCliente(idClienteInexistente);

  /* ========================= Verificação ========================= */

  expect(resposta).toBe(false);
  expect(gerCliente.getClientesDoBanco().length).toBe(2);
});

/** Teste: Validação da idade de um cliente quando o mesmo está no intervalo permitido.
 * - Inicia com a criação de um cliente.
 * - Verifica se a idade do cliente é valida.
 *
 * @author Matheus Strada
 * @Date 12/02/2024
 */

test("Valida a idade de um cliente", () => {
  /* ===================== Montagem do cenário ===================== */

  const cliente = new Cliente(1, "Gustavo", 25, "gustavo@hotmail.com", 1, true);

  /* ========================== Execução =========================== */

  const ehValidaIdade = gerCliente.validaIdade(cliente.getIdade());

  /* ========================= Verificação ========================= */

  expect(ehValidaIdade).toBe(true);
});

/** Teste: Validação da idade de um cliente com 18 anos.
 * - Inicia com a criação de um cliente.
 * - Verifica se a idade do cliente é valida.
 *
 * @author Matheus Strada
 * @Date 12/02/2024
 */

test("Valida a idade 18 anos de um cliente", () => {
  /* ===================== Montagem do cenário ===================== */

  const cliente = new Cliente(1, "Gustavo", 18, "gustavo@hotmail.com", 1, true);

  /* ========================== Execução =========================== */

  const ehValidaIdade = gerCliente.validaIdade(cliente.getIdade());

  /* ========================= Verificação ========================= */

  expect(ehValidaIdade).toBe(true);
});

/** Teste: Validação da idade de um cliente com 65 anos.
 * - Inicia com a criação de um cliente.
 * - Verifica se a idade do cliente é valida.
 *
 * @author Matheus Strada
 * @Date 12/02/2024
 */

test("Valida a idade 65 anos de um cliente", () => {
  /* ===================== Montagem do cenário ===================== */

  const cliente = new Cliente(1, "Gustavo", 65, "gustavo@hotmail.com", 1, true);

  /* ========================== Execução =========================== */

  const ehValidaIdade = gerCliente.validaIdade(cliente.getIdade());

  /* ========================= Verificação ========================= */

  expect(ehValidaIdade).toBe(true);
});

/** Teste: Validação da idade de um cliente fora do intervalo permitido (abaixo de 18 anos).
 * - Inicia com a criação de um cliente.
 * - Verifica se a idade do cliente é invalida.
 *
 * @author Matheus Strada
 * @Date 12/02/2024
 */

test("Valida a idade 17 anos de um cliente", () => {
  /* ===================== Montagem do cenário ===================== */

  const cliente = new Cliente(1, "Gustavo", 17, "gustavo@hotmail.com", 1, true);

  /* ========================== Execução =========================== */

  try {
    gerCliente.validaIdade(cliente.getIdade());
    // Se chegou aqui, a exceção não foi lançada, então falhe o teste
    fail("Expected function to throw IdadeNaoPermitidaException");
  } catch (error) {
    /* ========================= Verificação ========================= */
    // Verifica se a mensagem da exceção é a esperada
    expect(error.message).toBe("Invalid age. Must be between 18 and 65.");
  }
});

/** Teste: Validação da idade de um cliente fora do intervalo permitido (acima de 65 anos).
 * - Inicia com a criação de um cliente.
 * - Verifica se a idade do cliente é invalida.
 *
 * @author Matheus Strada
 * @Date 12/02/2024
 */

test("Valida a idade 66 anos de um cliente", () => {
  /* ===================== Montagem do cenário ===================== */

  const cliente = new Cliente(1, "Gustavo", 66, "gustavo@hotmail.com", 1, true);

  /* ========================== Execução =========================== */

  try {
    gerCliente.validaIdade(cliente.getIdade());
    // Se chegou aqui, a exceção não foi lançada, então falhe o teste
    fail("Expected function to throw IdadeNaoPermitidaException");
  } catch (error) {
    /* ========================= Verificação ========================= */
    // Verifica se a mensagem da exceção é a esperada
    expect(error.message).toBe("Invalid age. Must be between 18 and 65.");
  }
});
