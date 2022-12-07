/* eslint-disable no-undef */
const Medicine = require('../src/Medicine');

const medicine = new Medicine();

describe('Medicine class test', () => {
  it('should instantiate the Medicine is done correctly', () => {
    expect(medicine instanceof Medicine).toBe(true);
  });
});