/* eslint-disable no-undef */
const Admin = require('../src/Admin');
const Person = require('../src/Person');

describe('Admin class test', () => {

  it('should instantiate the Admin is done correctly', () => {
    const admin = new Admin();
    expect(admin instanceof Person).toBe(true);
  });

  it('should register admin with valid data', () => {
    const admin = new Admin();
    expect(admin.registerAdmin('Mauricio', '338338338', 'teste@teste', '1234','true')).toBe('Adm successfully registered!');
  });

  it('should return error for registration with invalid data', () => {
    const admin = new Admin();
    expect(() => admin.registerAdmin('Mauricio', '', '123456', true)).toThrow('Error! Invalid data.');
  });

});