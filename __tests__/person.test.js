/* eslint-disable no-undef */
const Person = require('../src/Person');

const person = new Person();
const person1 = new Person('Jose', '625658958-20', 'jose@hoo.com');

describe('Person class test', () => {
  it('should instantiate the Person is done correctly', () => {
    expect(person instanceof Person).toBe(true);
  });

  it('should return cpf number', () => {
    expect(person1.cpf).toEqual('625658958-20');
    expect(person1 instanceof Person).toBe(true); 
  });

});