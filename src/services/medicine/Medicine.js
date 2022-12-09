/* eslint-disable no-setter-return */
/* eslint-disable no-dupe-class-members */
class Medicine {
  name;
  composition;
  batch;
  expiration;
  id;
   
  constructor(name, composition, batch, expiration){
    if (name && composition && batch && expiration){
      this.name = name;
      this.composition = composition;
      this.batch = batch;
      this.expiration = expiration;
      this.id = Date.now();
    } else {
      throw new Error('All data is required.');
    }
  }
}
    
module.exports = Medicine;