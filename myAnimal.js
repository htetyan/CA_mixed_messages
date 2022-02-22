//My animal Function
// Imports:
//
import { animalYears } from './YearMonths.js';


export const myAnimal = (num) => {

  let animalName = "";

  for (let i=0; i < animalYears.length; i++ ) {
     let obj = animalYears[i];
     let indi = [];
     Object.values(obj).forEach(val => { indi = val});

 //true of false from includes
 //console.log(indi.includes(yearofBirth));

 //need to find the element here and store it's key location
     if (indi.includes(num)) {
         animalName = Object.getOwnPropertyNames(obj);
     }
 }
 return animalName;
}

// console.log(myAnimal(yearPicked));
