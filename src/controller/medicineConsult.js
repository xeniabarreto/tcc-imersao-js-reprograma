/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
const readline = require('readline-sync');
const AlopaticoMedicine = require('../services/medicine/AlopaticoMedicine');
const GenericMedicine = require('../services/medicine/GenericMedicine');
const HerbalMedicine = require('../services/medicine/HerbalMedicine');
const { allStatistics } = require('../helpers');

console.clear();

const medicineConsult = () => {
  console.log(
    `====================== Options ========================
  
  1 - List Alopatico Medicine
  2 - List Generic Medicine
  3 - List Herbal Medicine
  4 - List All Medicine
  5 - Statistics
  6 - Exit
  Enter 1 to 6 to choose an option:`
  );

  const answer = readline.question();
  console.clear();

  switch (answer) {
  case '1':
    const alopaticoMedicine = AlopaticoMedicine.alopaticoMedicineList;
    console.table(alopaticoMedicine);
    medicineConsult();
    break;

  case '2':
    const genericMedicine = GenericMedicine.genericMedicineList;
    console.table(genericMedicine);
    medicineConsult();
    break;

  case '3':
    const herbalMedicine = HerbalMedicine.herbalMedicineList;
    console.table(herbalMedicine);
    medicineConsult();
    break;

  case '4':
    const alopatico = AlopaticoMedicine.alopaticoMedicineList;
    const generic = GenericMedicine.genericMedicineList;
    const herbal = HerbalMedicine.herbalMedicineList;
    console.table([...alopatico, ...generic, ...herbal]);
    medicineConsult();
    break;

  case '5':
    const static = allStatistics(AlopaticoMedicine.alopaticoMedicineList, GenericMedicine.genericMedicineList, HerbalMedicine.herbalMedicineList );
    medicineConsult();
    break;

  case '6':
    break; 

  default:
    console.log('Medicine not found');
    medicineConsult();
    break;
  }
};


module.exports = medicineConsult;
