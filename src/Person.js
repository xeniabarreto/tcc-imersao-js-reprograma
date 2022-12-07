class Person {
  name;
  #cpf;
  email;
  id;

  constructor(name, cpf, email) {
    this.name = name;
    this.#cpf = cpf;
    this.email = email;
    this.id = Date.now();
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(changeCpf) {
    // eslint-disable-next-line no-setter-return
    return this.#cpf = changeCpf;
  }
}

module.exports = Person;
