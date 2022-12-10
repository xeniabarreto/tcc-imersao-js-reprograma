/* eslint-disable no-useless-escape */
/* eslint-disable no-self-assign */

function validateTelephone(telephone){
  const telephoneRegex = /^(\d{2})\D(\d{5}|\d{4})\D(\d{4})$/;
  if (telephoneRegex.test(telephone)){
    telephone = telephone;
    return true;
  } else {
    return false;
  }
}
  
function valitadeEmail(email){
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
  if(emailRegex.test(email)){
    email = email;
    return true;
  } else {
    return false;
  }
}

function valitadeCpf(cpfResponsible){
  const cpfRegex = /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;
  if(cpfRegex.test(cpfResponsible)){
    cpfResponsible = cpfResponsible;
    return true;
  } else {
    return false;
  }
}

function valitadeCnpj(cnpj){
  const cnpjRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  if(cnpjRegex.test(cnpj)){
    cnpj = cnpj;
    return true;
  } else {
    return false;
  }
}

function allStatistics (staticList1, staticList2, staticList3){
  const sumValue1 = staticList1.map(item => item.value).reduce((prev, curr) => prev + curr, 0);
  const sumQty1 = staticList1.map(item => item.qty).reduce((prev, curr) => prev + curr, 0);
  const totalStaticList1 = sumValue1 * sumQty1; 

  const sumValue2 = staticList2.map(item => item.value).reduce((prev, curr) => prev + curr, 0);
  const sumQty2 = staticList2.map(item => item.qty).reduce((prev, curr) => prev + curr, 0);
  const totalStaticList2 = sumValue2 * sumQty2; 

  const sumValue3 = staticList3.map(item => item.value).reduce((prev, curr) => prev + curr, 0);
  const sumQty3 = staticList3.map(item => item.qty).reduce((prev, curr) => prev + curr, 0);
  const totalStaticList3 = sumValue3 * sumQty3; 


  const allTotalQty = sumQty1 + sumQty2 + sumQty3;
  const allTotalValue = totalStaticList1 + totalStaticList2 + totalStaticList3;

  return console.table([{ 
    Qty_Total: allTotalQty,
    Value_Saved: 'R$ ' + allTotalValue.toFixed(2) 
  }]);
}

function statistics (staticList){
  const sumValue = staticList
    .map(item => item.value)
    .reduce((prev, curr) => prev + curr, 0);

  const sumQty = staticList
    .map(item => item.qty)
    .reduce((prev, curr) => prev + curr, 0);
  
  const total = sumValue * sumQty; 

  return console.table([{ 
    Reused_Medications: sumQty,
    Value_Saved: total.toFixed(2) 
  }]);
}




module.exports = {
  validateTelephone,
  valitadeEmail,
  valitadeCpf,
  valitadeCnpj,
  statistics,
  allStatistics
};