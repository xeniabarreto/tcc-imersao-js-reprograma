class Medicine {
  name;
  composition;
  batch;
  manufactured;
  expiration;
  retain_revenue;
 
  constructor(name, composition, batch, manufactured, expiration, retain_revenue){
    this.name = name;
    this.composition = composition;
    this.batch = batch;
    this.manufactured = manufactured;
    this.expiration = expiration;
    this.retain_revenue = retain_revenue;
  }
}
  
module.exports = Medicine;
  