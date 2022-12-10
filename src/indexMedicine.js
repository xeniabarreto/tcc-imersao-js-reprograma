/* eslint-disable no-unused-vars */
const medicineConsult = require('./controller/medicineConsult');
const AlopaticoMedicine = require('./services/medicine/AlopaticoMedicine');
const GenericMedicine = require('./services/medicine/GenericMedicine');
const HerbalMedicine = require('./services/medicine/HerbalMedicine');

const alopatico1 = new AlopaticoMedicine('Tylenol', 'Paracetamol 500mg', '156625', '08/23', 'Alopatico', 'Janssen', 23.51, 5);
const alopatico2 = new AlopaticoMedicine('Novalgina', 'Dipirona 1g', '156325', '06/23','Alopatico', 'Sanofi', 26.78, 16);
const alopatico3 = new AlopaticoMedicine('Scaflam', 'Nimesulina 100mg', '128596', '02/23', 'Alopatico', 'Mantecorp', 23.79, 5);

const generic1 = new GenericMedicine('Pantoprazol', 'Pantoprazol 20mg', '563859', '05/24','Generic', 'Medley', 13.49, 26);
const generic2 = new GenericMedicine('Enalapril', 'Maleato de Enalapril 10mg', '586925', '05/24','Generic', 'EMS', 26.30, 10);
const generic3 = new GenericMedicine('Orlistate', 'Orlistate 120mg', '856965', '10/24','Generic', 'Germed', 50.05, 2);

const herbal1 = new HerbalMedicine('Fitocalm', 'Passiflora Incarnata 300mg', '956823', '05/23','Herbal', 'Catarinense', 39.99, 3); 
const herbal2 = new HerbalMedicine('Polinize Florais', 'Sentimento de Ansiedade', '986352', '02/23','Herbal', 'Polinize Florais', 39.59, 2); 
const herbal3 = new HerbalMedicine('Nova Noite', 'Passiflora 320mg', '852398', '03/23', 'Herbal', 'Sanofi', 47.99, 5);

medicineConsult();


