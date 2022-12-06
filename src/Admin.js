const Person = require('./Person');

class Admin extends Person {
  terms_of_use;
    
  constructor (name, cpf, email, password, terms_of_use, id) {
    super(name, cpf, email, password, id);
    this.terms_of_use = terms_of_use;
    //propriedade statica quantos admins
  }

  registerAdmin(name, cpf, email, password, terms_of_use){
    if(!name || !cpf || !email || !password || !terms_of_use){
      throw new Error('Error! Invalid data.'); 
    } else {
      this.name = name;
      this.cpf = cpf;
      this.email = email;
      this.password = password;
      this.terms_of_use = terms_of_use;
        
      return 'Adm successfully registered!';
    } 
  }
}

module.exports = Admin;

const admin = new Admin ('Mauricio', '338338338', 'teste@teste', '1234','true');
console.log(admin);


