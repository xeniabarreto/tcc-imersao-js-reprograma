/* eslint-disable no-undef */
const GenericMedicine = require('../src/services/medicine/GenericMedicine');
const generic = new GenericMedicine('Pantoprazol', 'Pantoprazol 20mg', '563859', '05/24','Generic', 'Medley', 13.49, 26);

describe('GenericMedicine class test', () => {
  it('should instantiate the GenericMedicine is done correctly', () => {
    expect(generic instanceof GenericMedicine).toBe(true);
  });

  it('should return error when instantiating the GenericMedicine due to incorrect data', () => {
    expect(() => (generic.addMedicine('', 2))).toThrow('It must be instanced by HerbalMedicine.');
  });

  describe('Test Method addMedicine', () => {
    it('should add an existing medicine unit', () => {
      expect(generic instanceof GenericMedicine).toBe(true);
      expect(generic.addMedicine(generic, 2)).toEqual(28);
    });

    it('should return error when quantity is string', () => {
      expect(generic instanceof GenericMedicine).toBe(true);
      expect(() => generic.addMedicine(generic, '')).toThrow('It must be a number.');
    });

    it('should return error when number less than or equal to zero', () => {
      expect(generic instanceof GenericMedicine).toBe(true);
      expect(() => generic.addMedicine(generic, 0)).toThrow('It must be greater than 0.');
    });

    it('should return error when not instantiated from HerbalMedicine', () => {
      expect('test' instanceof GenericMedicine).toBe(false);
    });

  });

  describe('Test Method removeMedicine', () => {
      
    it('should remove an existing medicine unit', () => {
      expect(generic instanceof GenericMedicine).toBe(true);
      expect(generic.removeMedicine(generic, 1)).toEqual(27);
    });

    it('should return error when no medicine is available', () => {
      expect(generic instanceof GenericMedicine).toBe(true);
      expect(() => generic.removeMedicine(generic, 34)).toThrow('There are not medications available.');
    });

    it('should return error when quantity is string', () => {
      expect(generic instanceof GenericMedicine).toBe(true);
      expect(() => generic.removeMedicine(generic, '')).toThrow('It must be a number.');
    });

    it('should return error when not instantiated from HerbalMedicine', () => {
      expect(() => (generic.addMedicine('', 2))).toThrow('It must be instanced by HerbalMedicine.');
    
    });

  });
});