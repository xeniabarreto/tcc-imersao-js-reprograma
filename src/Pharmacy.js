class Pharmacy {
  cnpj;
  name;
  address;
  telephone;
  email;
  hours_of_operation;
  terms_of_use;

  constructor(cnpj, name, address, telephone, email, hours_of_operation, terms_of_use ) {
    this.cnpj = cnpj;
    this.name = name;
    this.address = address;
    this.telephone = telephone,
    this.email = email;
    this.hours_of_operation = hours_of_operation;
    this.terms_of_use = terms_of_use;
    this.id = Date.now();
  }

}

module.exports = Pharmacy;
