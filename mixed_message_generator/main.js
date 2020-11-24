const itemsArray=['hummer','flag','banana','kit-kat','heirbrash'];
const timesArray=['morning','evening','night','summer','winter','spring','autumn'];
const placesArray=['New York','Serres','Berlin','Brussels','Kastoria','Australia','Africe','Ksanthi'];

let str1 = itemsArray[Math.floor(Math.random()*itemsArray.length)];
let str2 = timesArray[Math.floor(Math.random()*timesArray.length)];
let str3 = placesArray[Math.floor(Math.random()*placesArray.length)];
console.log("All the things begin at the "+str2);
console.log("Your bag has only one "+str1);
console.log("And you are heading to "+str3);