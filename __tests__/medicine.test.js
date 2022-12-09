/* eslint-disable no-undef */
const Medicine = require('../src/services/medicine/Medicine');

describe('Medicine class test', () => {
  it('should instantiate the Medicine is done correctly', () => {
    const medicine = new Medicine('Tylenol', 'Paracetamol 500mg', '156625', '08/23');
    expect(medicine instanceof Medicine).toBe(true);
  });

  it('should return the error when instantiating missing data', () => {
    expect(() => (new Medicine())).toThrow('All data is required.');
  });

});