/**
 * Exception to be thrown when the age of a potential new
 * customer is not accepted.
 */
class IdadeNaoPermitidaException extends Error {
  static MSG_IDADE_INVALIDA =
    "A idade do cliente precisa estar entre 18 e 65 anos.";

  constructor(msg) {
    super(msg);
    this.name = "IdadeNaoPermitidaException";
  }
}
