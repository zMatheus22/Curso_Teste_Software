/**
 * Business class for performing operations on bank
 * customers.
 */
class GerenciadoraClientes {
  constructor(clientesDoBanco) {
    this.clientesDoBanco = clientesDoBanco;
  }

  /**
   * Get a list of all bank customers.
   * @returns {Array} List of all bank customers
   */
  getClientesDoBanco() {
    return this.clientesDoBanco;
  }

  /**
   * Search for a customer based on their ID.
   * @param {number} idCliente - ID of the customer to be
   * searched
   * @returns {Cliente|null} The searched customer or null
   * if not found
   */
  pesquisaCliente(idCliente) {
    for (const cliente of this.clientesDoBanco) {
      if (cliente.getId() === idCliente) {
        return cliente;
      }
    }
    return null;
  }

  /**
   * Add a new customer to the bank's customer list.
   * @param {Cliente} novoCliente - New customer to be
   * added
   */
  adicionaCliente(novoCliente) {
    this.clientesDoBanco.push(novoCliente);
  }

  /**
   * Remove a customer from the bank's customer list.
   * @param {number} idCliente - ID of the customer to be
   * removed
   * @returns {boolean} true if the customer was removed,
   * false otherwise
   */
  removeCliente(idCliente) {
    const index = this.clientesDoBanco.findIndex(
      (cliente) => cliente.getId() === idCliente
    );
    if (index !== -1) {
      this.clientesDoBanco.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Check if a particular customer is active or not.
   * @param {number} idCliente - ID of the customer whose
   * status will be checked
   * @returns {boolean} true if the customer is active,
   * false otherwise
   */
  clienteAtivo(idCliente) {
    const cliente = this.clientesDoBanco.find(
      (cliente) => cliente.getId() === idCliente
    );
    return cliente ? cliente.isAtivo() : false;
  }

  /**
   * Clear the list of customers, i.e., remove all of them.
   */
  limpa() {
    this.clientesDoBanco = [];
  }

  /**
   * Validate if the customer's age is within the allowed
   * range (18 - 65).
   * @param {number} idade - The age of the potential new
   * customer
   * @throws {Error} If the age is not within the allowed
   * range
   * @returns {boolean} true if the age is valid, false
   * otherwise
   */
  validaIdade(idade) {
    if (idade < 18 || idade > 65) {
      throw new Error("Invalid age. Must be between 18 and 65.");
    }
    return true;
  }
}

module.exports = GerenciadoraClientes;
