/* eslint-disable no-unused-vars */
const pharmacyConsult = require('./controller/pharmacyConsult');
const Pharmacy = require('./services/pharmacy/Pharmacy');

const pharmacy1 = new Pharmacy('12.546.658/0001-52', 'Royal', 'Autonomist Avenue - SP', '11 98112-8556', 'att@royal.com', 'Isaac', '258658952-58' );  
const pharmacy2 = new Pharmacy('02.986.741/0001-26', 'Like Medicine', 'Jorge Avenue - SP', '11 94153-7413', 'customer@likemedicine.com', 'Julia', '852352965-41' );  
const pharmacy3 = new Pharmacy('05.470.968/0001-15', 'Summer', 'Alliance Avenue - SP', '11 95698-8236', 'sac@summerl.com', 'Roberto', '855166852-46' );  

pharmacyConsult();
