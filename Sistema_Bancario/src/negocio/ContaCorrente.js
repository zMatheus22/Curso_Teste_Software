/**
 * Class representing a real checking account that can be
 * associated with a customer.
 */
class ContaCorrente {
  constructor(id, saldo, ativa) {
    this.id = id;
    this.saldo = saldo;
    this.ativa = ativa;
  }

  /**
   * Get the checking account ID.
   * @returns {number} Checking account ID
   */
  getId() {
    return this.id;
  }

  /**
   * Set the checking account ID.
   * @param {number} id - Checking account ID
   */
  setId(id) {
    this.id = id;
  }

  /**
   * Get the checking account balance.
   * @returns {number} Checking account balance
   */
  getSaldo() {
    return this.saldo;
  }

  /**
   * Set the checking account balance.
   * @param {number} saldo - Checking account balance
   */
  setSaldo(saldo) {
    this.saldo = saldo;
  }

  /**
   * Check if the checking account is active.
   * @returns {boolean} Checking account status (active or
   * inactive)
   */
  isAtiva() {
    return this.ativa;
  }

  /**
   * Set the checking account status.
   * @param {boolean} ativa - Checking account status
   * (active or inactive)
   */
  setAtiva(ativa) {
    this.ativa = ativa;
  }

  /**
   * Get the textual representation of a checking account.
   * @returns {string} Textual representation of a checking
   * account
   */
  toString() {
    const status = this.ativa ? "Ativa" : "Inativa";
    const str = `=========================
            Id: ${this.id}
            Saldo: ${this.saldo}
            Status: ${status}
            =========================`;
    return str;
  }
}

module.exports = ContaCorrente;
