class Person {
  name;
  #cpf;
  email;
  #password;
  id;

  constructor(name, cpf, email) {
    this.name = name;
    this.#cpf = cpf;
    this.email = email;
    this.id = Date.now();
  }
}

module.exports = Person;
