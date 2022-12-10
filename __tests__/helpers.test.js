/* eslint-disable no-undef */
const {
  valitadeEmail,
  valitadeCpf,
  valitadeCnpj,
  validateTelephone,
  statistics,
  allStatistics,
} = require('../src/helpers');

describe('Test email validation', () => {
  it('should validate the email', () => {
    expect(valitadeEmail('fabricio@bu.com.br')).toBe(true);
  });

  it('refuse the validation of the e-mail', () => {
    expect(valitadeEmail('fabriciou.com.br')).toBe(false);
  });

});

describe('Test cpf validation', () => {
  it('should validate the cpf', () => {
    expect(valitadeCpf('896.575.789-85')).toBe(true);
  });
    
  it('refuse the validation of the cpf', () => {
    expect(valitadeCpf('389658-882')).toBe(false);
  });
});

describe('Test cnpj validation', () => {
  it('should validate the cnpj', () => {
    expect(valitadeCnpj('02.856.896/0001-85')).toBe(true);
  });
      
  it('refuse the validation of the cnpj', () => {
    expect(valitadeCnpj('02.522-j-882')).toBe(false);
  });
});

describe('Test telepphone validation', () => {
  it('should validate the telepphone', () => {
    expect(validateTelephone('11 97853-2569')).toBe(true);
  });
        
  it('refuse the validation of the telepphone', () => {
    expect(validateTelephone('g5263-6893')).toBe(false);
  });
});

describe('Test statistics function', () => {

  let medicineList = [
    { value: 10.00, qty: 1 },
    { value: 10.00, qty: 1 }
  ];

  let medicineList1 = [
    { value: 10.00, qty: 1 },
    { value: 10.00, qty: 1 }
  ];

  let medicineList2 = [
    { value: 10.00, qty: 1 },
    { value: 10.00, qty: 1 }
  ];

  it('should return the sum of values and quantities', () => {
    expect(statistics(medicineList)).toBe();
  });

  it('should return the sum of values and quantities', () => {
    expect(allStatistics(medicineList, medicineList1, medicineList2)).toBe();
  });
          
});

