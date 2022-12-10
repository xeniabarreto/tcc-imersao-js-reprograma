/* eslint-disable no-undef */
const HerbalMedicine = require('../src/services/medicine/HerbalMedicine');
const herbalMedicine = new HerbalMedicine('Fitocalm', 'Passiflora Incarnata 300mg', '956823', '05/23','Herbal', 'Catarinense', 39.99, 32);

describe('HerbalMedicine class test', () => {
  it('should instantiate the HerbalMedicine is done correctly', () => {
    expect(herbalMedicine instanceof HerbalMedicine).toBe(true);
  });

  it('should return error when instantiating the HerbalMedicine due to incorrect data', () => {
    expect(() => (herbalMedicine.addMedicine('', 2))).toThrow('It must be instanced by HerbalMedicine.');
  });

  describe('Test Method addMedicine', () => {
    it('should add an existing medicine unit', () => {
      expect(herbalMedicine instanceof HerbalMedicine).toBe(true);
      expect(herbalMedicine.addMedicine(herbalMedicine, 2)).toEqual(34);
    });

    it('should return error when quantity is string', () => {
      expect(herbalMedicine instanceof HerbalMedicine).toBe(true);
      expect(() => herbalMedicine.addMedicine(herbalMedicine, '')).toThrow('It must be a number.');
    });

    it('should return error when number less than or equal to zero', () => {
      expect(herbalMedicine instanceof HerbalMedicine).toBe(true);
      expect(() => herbalMedicine.addMedicine(herbalMedicine, 0)).toThrow('It must be greater than 0.');
    });

    it('should return error when not instantiated from HerbalMedicine', () => {
      expect('test' instanceof HerbalMedicine).toBe(false);
    });

    describe('Test Method removeMedicine', () => {
      
      it('should remove an existing medicine unit', () => {
        expect(herbalMedicine instanceof HerbalMedicine).toBe(true);
        expect(herbalMedicine.removeMedicine(herbalMedicine, 1)).toEqual(33);
      });

      it('should return error when no medicine is available', () => {
        expect(herbalMedicine instanceof HerbalMedicine).toBe(true);
        expect(() => herbalMedicine.removeMedicine(herbalMedicine, 34)).toThrow('There are not medications available.');
      });

      it('should return error when quantity is string', () => {
        expect(herbalMedicine instanceof HerbalMedicine).toBe(true);
        expect(() => herbalMedicine.removeMedicine(herbalMedicine, '')).toThrow('It must be a number.');
      });

      it('should return error when not instantiated from HerbalMedicine', () => {
        expect(() => (herbalMedicine.addMedicine('', 2))).toThrow('It must be instanced by HerbalMedicine.');
      
      });

    });

  });
  
});