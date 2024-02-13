const Cliente = require("../../negocio/Cliente");
const Gerenciado = require("../../negocio/GerenciadoraClientes");

// Variáveis globais
let gerCliente;
let idCliente01 = 1;
let idCliente02 = 2;

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

/**
 * Teste: Pesquisa se o cliente com ID: 1 tem o nome de Matheus
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

/**
 * Teste: Deletando o cliente com ID: 2
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
