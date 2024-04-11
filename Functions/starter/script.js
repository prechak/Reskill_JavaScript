'use strict';

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
