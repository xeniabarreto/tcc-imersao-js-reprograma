/* eslint-disable no-undef */
const AlopaticoMedicine = require('../src/services/medicine/AlopaticoMedicine');
const alopatico = new AlopaticoMedicine('Tylenol', 'Paracetamol 500mg', '156625', '08/23', 'Alopatico', 'Janssen', 23.51, 18);

describe('AlopaticoMedicine class test', () => {
  it('should instantiate the AlopaticoMedicine is done correctly', () => {
    expect(alopatico instanceof AlopaticoMedicine).toBe(true);
  });

  it('should return error when instantiating the AlopaticoMedicine due to incorrect data', () => {
    expect(() => (alopatico.addMedicine('', 2))).toThrow('It must be instanced by AlopaticoMedicine.');
  });

  describe('Test Method addMedicine', () => {
    it('should add an existing medicine unit', () => {
      expect(alopatico instanceof AlopaticoMedicine).toBe(true);
      expect(alopatico.addMedicine(alopatico, 2)).toEqual(20);
    });

    it('should return error when quantity is string', () => {
      expect(alopatico instanceof AlopaticoMedicine).toBe(true);
      expect(() => alopatico.addMedicine(alopatico, '')).toThrow('It must be a number.');
    });
  
    it('should return error when number less than or equal to zero', () => {
      expect(alopatico instanceof AlopaticoMedicine).toBe(true);
      expect(() => alopatico.addMedicine(alopatico, 0)).toThrow('It must be greater than 0.');
    });
  
    it('should return error when not instantiated from AlopaticoMedicine', () => {
      expect('test' instanceof AlopaticoMedicine).toBe(false);
    });
  
  });

  describe('Test Method removeMedicine', () => {
      
    it('should remove an existing medicine unit', () => {
      expect(alopatico instanceof AlopaticoMedicine).toBe(true);
      expect(alopatico.removeMedicine(alopatico, 1)).toEqual(19);
    });

    it('should return error when no medicine is available', () => {
      expect(alopatico instanceof AlopaticoMedicine).toBe(true);
      expect(() => alopatico.removeMedicine(alopatico, 34)).toThrow('There are not medications available.');
    });

    it('should return error when quantity is string', () => {
      expect(alopatico instanceof AlopaticoMedicine).toBe(true);
      expect(() => alopatico.removeMedicine(alopatico, '')).toThrow('It must be a number.');
    });

    it('should return error when not instantiated from AlopaticoMedicine', () => {
      expect(() => (alopatico.addMedicine('', 2))).toThrow('It must be instanced by AlopaticoMedicine.');
    
    });

  });

});


