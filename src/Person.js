class Person {
  name;
  #cpf;
  email;
  #password;
  id;

  constructor(name, cpf, email, password) {
    this.name = name;
    this.#cpf = cpf;
    this.email = email;
    this.#password = password;
    this.id = Date.now();
  }
}

module.exports = Person;
