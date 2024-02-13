const readlineSync = require("readline-sync");

// Importing required classes and modules
const GerenciadoraClientes = require("./GerenciadoraClientes"); // Assuming you have separate files for each class
const GerenciadoraContas = require("./GerenciadoraContas");
const Cliente = require("./Cliente");
const ContaCorrente = require("./ContaCorrente");

// Initializing the banking system
let gerClientes;
let gerContas;

function inicializaSistemaBancario() {
  // Creating empty lists of accounts and customers
  const contasDoBanco = [];
  const clientesDoBanco = [];

  // Creating and adding two accounts to the list of bank
  // checking accounts
  const conta01 = new ContaCorrente(1, 0, true);
  const conta02 = new ContaCorrente(2, 0, true);
  contasDoBanco.push(conta01);
  contasDoBanco.push(conta02);

  // Creating two customers and associating the created
  // accounts to them
  const cliente01 = new Cliente(
    1,
    "Gustavo Farias",
    31,
    "gugafarias@gmail.com",
    conta01.getId(),
    true
  );
  const cliente02 = new Cliente(
    2,
    "Felipe Augusto",
    34,
    "felipeaugusto@gmail.com",
    conta02.getId(),
    true
  );
  // Adding the created customers to the list of bank
  // customers
  clientesDoBanco.push(cliente01);
  clientesDoBanco.push(cliente02);

  gerClientes = new GerenciadoraClientes(clientesDoBanco);
  gerContas = new GerenciadoraContas(contasDoBanco);
}

// Example usage
function main() {
  inicializaSistemaBancario();

  const readlineSync = require("readline-sync");
  let continua = true;

  while (continua) {
    printMenu();

    const opcao = parseInt(
      readlineSync.question("Digite o número da opção desejada: ")
    );

    switch (opcao) {
      case 1:
        consultarCliente();
        break;

      case 2:
        consultarContaCorrente();
        break;

      case 3:
        ativarCliente();
        break;

      case 4:
        desativarCliente();
        break;

      case 5:
        continua = false;
        console.log("################# Sistema encerrado #################");
        break;

      default:
        console.log("\nOpção inválida. Tente novamente.\n");
        break;
    }
  }
}

function pulalinha() {
  console.log("\n");
}

function printMenu() {
  console.log("O que você deseja fazer? \n");
  console.log("1) Consultar por um cliente");
  console.log("2) Consultar por uma conta corrente");
  console.log("3) Ativar um cliente");
  console.log("4) Desativar um cliente");
  console.log("5) Sair");
  console.log();
}

function consultarCliente() {
  const idCliente = parseInt(readlineSync.question("Digite o ID do cliente: "));
  const cliente = gerClientes.pesquisaCliente(idCliente);

  if (cliente !== null) {
    console.log(cliente.toString());
  } else {
    console.log("Cliente não encontrado!");
  }

  pulalinha();
}

function consultarContaCorrente() {
  const idConta = parseInt(readlineSync.question("Digite o ID da conta: "));
  const conta = gerContas.pesquisaConta(idConta);

  if (conta !== null) {
    console.log(conta.toString());
  } else {
    console.log("Conta não encontrada!");
  }

  pulalinha();
}

function ativarCliente() {
  const idCliente = parseInt(readlineSync.question("Digite o ID do cliente: "));
  const cliente = gerClientes.pesquisaCliente(idCliente);

  if (cliente !== null) {
    cliente.setAtivo(true);
    console.log("Cliente ativado com sucesso!");
  } else {
    console.log("Cliente não encontrado!");
  }

  pulalinha();
}

function desativarCliente() {
  const idCliente = parseInt(readlineSync.question("Digite o ID do cliente: "));
  const cliente = gerClientes.pesquisaCliente(idCliente);

  if (cliente !== null) {
    cliente.setAtivo(false);
    console.log("Cliente desativado com sucesso!");
  } else {
    console.log("Cliente não encontrado!");
  }

  pulalinha();
}

// Running the main function
main();
