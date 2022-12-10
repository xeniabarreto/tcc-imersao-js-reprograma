/* eslint-disable no-case-declarations */
const readline = require('readline-sync');
const Pharmacy = require('../services/pharmacy/Pharmacy');

console.clear();

const pharmacyConsult = () => {
  console.log(
    `====================== Options ========================
    1 - List All Pharmacy
    2 - Exit
    Enter 1 to 2 to choose an option:`
  );

  const answer = readline.question();
  console.clear();

  switch (answer) {
  case '1':
    const allPharmacy = Pharmacy.pharmacyList;
    console.table(allPharmacy);
    pharmacyConsult();
    break;

  case '2':
    break;

  default:
    console.log('Pharmacy not found');
    pharmacyConsult();
    break;
  }
};

module.exports = pharmacyConsult;