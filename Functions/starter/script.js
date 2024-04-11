'use strict';

////////////////////////////////////////////////
////********** Default Parameters **********////
////////////////////////////////////////////////

/*
const bookings = [];

const createbooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // numPassengers = numPassengers || 1; //Short circuit (ES5)
  // price = price || 199; //Short circuit return falsy first (ES5)

  // (numPassengers = 1), (price = 199); //ES6

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createbooking('LH123');
createbooking('LH123', 2, 800);
createbooking('LH123', 2);
createbooking('LH123', 5);

//Can NOT SKIPPING use undefined
createbooking('LH123', undefined, 1000);
*/

///////////////////////////////////////////////////////
//* How Passing Arguments Works Value vs. Reference *//
///////////////////////////////////////////////////////

/*
const flight = 'LH234';

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2343323534437,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2343323534437) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

///////////////////////////////////////////////////////
//*      Functions Accepting Callback Functions     *//
///////////////////////////////////////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, ''.toLowerCase());
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transform string : ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🙌🏻');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
