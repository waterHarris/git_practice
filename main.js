// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

function validateCred(array){
  
  let helpArray=[];
  for (let k=0;k<array.length;k++){
helpArray[k]=array[k];
  }
  for(let j=array.length-2 ;j > -1;j-=2){
if(array[j]*2< 9){
    helpArray[j]=(array[j]*2);
}
else{
    helpArray[j]=((array[j]*2)-9);
}
  }
  
const summedNums = helpArray.reduce((accumulator, currentValue) => {
  
  return accumulator + currentValue
});

if((summedNums)%10 === 0){
return true;
}
else{
return false;
}
}//here is the end of the ValidateCred function

function findInvalidCards(batch){
  const har=batch;
const invalidCardsArray=har.filter(function (element){
  if(!validateCred(element))
  return element;
});
return invalidCardsArray;
}//here is the end of the findInvalidCards function

function idInvalidCardCompanies(array){
  let companiesArray=[];
if(array.some(function (element){
return element[0]===3;
})){
  companiesArray.push('Amex');
}
 if(array.some(function (element){
return element[0]===4;
})){
  companiesArray.push('Visa');
}
if(array.some(function (element){
return element[0]===5;
})){
  companiesArray.push('Mastercard');
}
if(array.some(function (element){
return element[0]===6;
})){
  companiesArray.push('Discover');
}
if(companiesArray.length>0){
console.log(companiesArray);
return companiesArray;
}
else{
  return 'Company not found';
}
}// here is the end of the idInvalidCardCompanies


const invalidCardsArray=findInvalidCards(batch);
console.log(invalidCardsArray);
idInvalidCardCompanies(invalidCardsArray);