/* eslint-disable no-undef */
const Pharmacy = require('../src/services/pharmacy/Pharmacy');


describe('Pharmacy class test', () => {
  it('should instantiate the Pharmacy', () => {
    const pharmacy = new Pharmacy('12.546.658/0001-52', 'Royal', 'Autonomist Avenue - SP', '11 98112-8556', 'att@royal.com', 'Isaac', '258658952-58' );  
    expect(pharmacy instanceof Pharmacy).toBe(true);
  });

  it('should return error when instantiating the Pharmacy due to incorrect data', () => {
    expect(() => (new Pharmacy())).toThrow('Insert the data as CPF/CNPJ, email or telephone, correctly.');
  });

});