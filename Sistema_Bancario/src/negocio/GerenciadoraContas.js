/**
 * Business class for performing operations on bank accounts.
 */
class GerenciadoraContas {
  constructor(contasDoBanco) {
    this.contasDoBanco = contasDoBanco;
  }

  /**
   * Get a list of all bank accounts.
   * @returns {Array} List of all bank accounts
   */
  getContasDoBanco() {
    return this.contasDoBanco;
  }

  /**
   * Search for an account based on its ID.
   * @param {number} idConta - ID of the account to be
   * searched
   * @returns {ContaCorrente|null} The searched account or
   * null if not found
   */
  pesquisaConta(idConta) {
    for (const contaCorrente of this.contasDoBanco) {
      if (contaCorrente.getId() === idConta) {
        return contaCorrente;
      }
    }
    return null;
  }

  /**
   * Add a new account to the bank's account list.
   * @param {ContaCorrente} novaConta - New account to be
   * added
   */
  adicionaConta(novaConta) {
    this.contasDoBanco.push(novaConta);
  }

  /**
   * Remove an account from the bank's account list.
   * @param {number} idConta - ID of the account to be
   * removed
   * @returns {boolean} true if the account was removed,
   * false otherwise
   */
  removeConta(idConta) {
    const index = this.contasDoBanco.findIndex(
      (contaCorrente) => contaCorrente.getId() === idConta
    );
    if (index !== -1) {
      this.contasDoBanco.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Check if a particular account is active or not.
   * @param {number} idConta - ID of the account whose status
   * will be checked
   * @returns {boolean} true if the account is active, false
   * otherwise
   */
  contaAtiva(idConta) {
    const contaCorrente = this.contasDoBanco.find(
      (conta) => conta.getId() === idConta
    );
    return contaCorrente ? contaCorrente.isAtiva() : false;
  }

  /**
   * Transfer a specified amount from an Origin account to a
   * Destination account.
   * If there is not enough balance, the amount will not be
   * transferred.
   *
   * @param {number} idContaOrigem - Account that will have
   * the amount deducted
   * @param {number} valor - Amount to be transferred
   * @param {number} idContaDestino - Account that will have
   * the amount added
   * @returns {boolean} true if the transfer was successful
   */
  transfereValor(idContaOrigem, valor, idContaDestino) {
    let sucesso = false;

    const contaOrigem = this.pesquisaConta(idContaOrigem);
    const contaDestino = this.pesquisaConta(idContaDestino);

    if (contaOrigem && contaDestino && contaOrigem.getSaldo() >= valor) {
      contaDestino.setSaldo(contaDestino.getSaldo() + valor);
      contaOrigem.setSaldo(contaOrigem.getSaldo() - valor);
      sucesso = true;
    }

    return sucesso;
  }
}

module.exports = GerenciadoraContas;
