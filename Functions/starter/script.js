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
