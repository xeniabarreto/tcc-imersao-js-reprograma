/* eslint-disable no-undef */
const Person = require('../src/Person');

const person = new Person('Jose', '625658958-20', 'jose@hoo.com');

describe('Person class test', () => {
  it('should instantiate the Person is done correctly', () => {
    expect(person instanceof Person).toBe(true);
  });

  it('should return cpf number', () => {
    expect(person.cpf).toEqual('625658958-20');
    expect(person instanceof Person).toBe(true); 
  });

  it('should change cpf number', () => {
    expect(person.cpf = '111222333-44').toEqual('111222333-44');
    expect(person instanceof Person).toBe(true); 
  });

});