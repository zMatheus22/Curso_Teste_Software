const Cliente = require("../../negocio/Cliente");
const Gerenciado = require("../../negocio/GerenciadoraClientes");

test("Remove Cliente, deletando o cliente com ID: 2", () => {
  // Criando os clientes.
  const client01 = new Cliente(1, "Matheus", 21, "matheus@email.com", 1, true);
  const client02 = new Cliente(2, "Ana Paula", 39, "ana@email.com", 1, true);

  // Adicionando os clientes criados em uma lista de clientes do banco.
  const clienteDoBanco = [];
  clienteDoBanco.push(client01);
  clienteDoBanco.push(client02);

  // Instanciando o gerenciamento de clientes.
  const gerCliente = new Gerenciado(clienteDoBanco);

  // Isso é o que realmente desejo testar (Remover Cliente).
  const resposta = gerCliente.removeCliente(2);

  expect(resposta).toBe(true);
  expect(gerCliente.getClientesDoBanco().length).toBe(1);
  expect(gerCliente.pesquisaCliente(2)).toBe(null);
});
