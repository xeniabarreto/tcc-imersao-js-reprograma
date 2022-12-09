/* eslint-disable no-setter-return */

const { valitadeCnpj, validateTelephone , valitadeEmail, valitadeCpf } = require('../../helpers'); 


class Pharmacy {
  #cpfResponsible;

  constructor(cnpj, name, full_address, telephone, email, responsible, cpfResponsible ) {
    if(valitadeCnpj(cnpj) && validateTelephone(telephone) && valitadeEmail(email) && valitadeCpf(cpfResponsible)){

      this.cnpj = cnpj;
      this.name = name;
      this.full_address = full_address;
      this.telephone = telephone;
      this.email = email;
      this.responsible = responsible;
      this.#cpfResponsible = cpfResponsible;
      this.id = Date.now(),


      this.constructor.pharmacyList.push({
        cnpj: this.cnpj,
        name: this.name,
        full_address: this.full_address,
        telephone: this.telephone,
        email: this.email,
        responsible: this.responsible,
        id: Date.now(),
      });
    } else {
      throw new Error('Insert the data as CPF/CNPJ, email or telephone, correctly.');
    }

  }

  static pharmacyList = [];
  
}

module.exports = Pharmacy;

