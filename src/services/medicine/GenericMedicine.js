/* eslint-disable no-setter-return */
const Medicine = require('./Medicine');

class GenericMedicine extends Medicine {

  constructor(name, composition, batch, expiration, type, laboratory, value, qty){
    super(name, composition, batch, expiration);
    this.type = type;
    this.laboratory = laboratory;
    this.value = value;
    this.qty = qty;

    this.constructor.genericMedicineList.push({
      name: this.name,
      composition: this.composition,
      batch: this.batch,
      expiration: this.expiration,
      type: this.type,
      laboratory: this.laboratory,
      value: this.value,
      qty: this.qty,
    });
  }

  static genericMedicineList = [];

  addMedicine(medicine, qty){
    if(medicine instanceof GenericMedicine){

      if(typeof qty !== 'string' ){

        if( qty >= 1  ){
          return (medicine.qty += qty);
        
        } else {
          throw new Error('It must be greater than 0.');
        }
      
      } else {
        throw new Error('It must be a number.');
      }
    
    } else {
      throw new Error('It must be instanced by GenericMedicine.');
    }
  }

  removeMedicine(medicine, qty) {
    if (medicine instanceof GenericMedicine) {
      
      if (typeof qty !== 'string') {
        
        if (medicine.qty > 0 && medicine.qty > qty) {
          return medicine.qty -= qty;
        
        } else {
          throw new Error('There are not medications available.');
        }
      
      } else {
        throw new Error('It must be a number.');
      }
    
    } else {
      throw new Error('It must be instanced by GenericMedicine.');
    }
  }


}   

module.exports = GenericMedicine;

