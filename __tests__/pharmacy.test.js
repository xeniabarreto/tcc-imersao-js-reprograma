/* eslint-disable no-undef */
const Pharmacy = require('../src/Pharmacy');

const pharmacy = new Pharmacy();

describe('Pharmacy class test', () => {
  it('should instantiate the Pharmacy is done correctly', () => {
    expect(pharmacy instanceof Pharmacy).toBe(true);
  });
});