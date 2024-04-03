'use strict';

// function calAge(birthYear) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millinial = true; // var is a function scope not block scope
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable
//       const output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millinial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millinial);
//     console.log(output);
//     // console.log(add(2, 3)); // if not strict mode it can use
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Precha';
// calAge(1993);

/////////////////////////////////////////////

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDel(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDel(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProduct);
if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
