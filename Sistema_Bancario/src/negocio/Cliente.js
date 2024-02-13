/**
 * Class representing a bank customer.
 */
class Cliente {
  constructor(id, nome, idade, email, idContaCorrente, ativo) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.idContaCorrente = idContaCorrente;
    this.ativo = ativo;
  }

  /**
   * Get the customer ID.
   * @returns {number} Customer ID
   */
  getId() {
    return this.id;
  }

  /**
   * Set the customer ID.
   * @param {number} id - Customer ID
   */
  setId(id) {
    this.id = id;
  }

  /**
   * Get the customer name.
   * @returns {string} Customer name
   */
  getNome() {
    return this.nome;
  }

  /**
   * Set the customer name.
   * @param {string} nome - Customer name
   */
  setNome(nome) {
    this.nome = nome;
  }

  /**
   * Get the customer age.
   * @returns {number} Customer age
   */
  getIdade() {
    return this.idade;
  }

  /**
   * Set the customer age.
   * @param {number} idade - Customer age
   */
  setIdade(idade) {
    this.idade = idade;
  }

  /**
   * Get the customer email.
   * @returns {string} Customer email
   */
  getEmail() {
    return this.email;
  }

  /**
   * Set the customer email.
   * @param {string} email - Customer email
   */
  setEmail(email) {
    this.email = email;
  }

  /**
   * Check if the customer is active.
   * @returns {boolean} Customer status (active or inactive)
   */
  isAtivo() {
    return this.ativo;
  }

  /**
   * Set the customer status.
   * @param {boolean} ativo - Customer status (active or
   * inactive)
   */
  setAtivo(ativo) {
    this.ativo = ativo;
  }

  /**
   * Get the ID of the associated checking account.
   * @returns {number} ID of the associated checking
   * account
   */
  getIdContaCorrente() {
    return this.idContaCorrente;
  }

  /**
   * Set the ID of the associated checking account.
   * @param {number} idContaCorrente - ID of the associated
   * checking account
   */
  setIdContaCorrente(idContaCorrente) {
    this.idContaCorrente = idContaCorrente;
  }

  /**
   * Get the textual representation of a customer.
   * @returns {string} Textual representation of a customer
   */
  toString() {
    const status = this.ativo ? "Ativo" : "Inativo";
    const str = `=========================
            Id: ${this.id}
            Nome: ${this.nome}
            Email: ${this.email}
            Idade: ${this.idade}
            Status: ${status}
            =========================`;
    return str;
  }
}

module.exports = Cliente;
