/* eslint-disable no-undef */
const Person = require('../src/Person');

describe('Person class test', () => {
  it('should instantiate the Person is done correctly', () => {
    const person = new Person();
    expect(person instanceof Person).toBe(true);
  });
});