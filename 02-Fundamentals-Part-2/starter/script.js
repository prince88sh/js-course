"use strict";
// console.log("use of functions");

// console.log("1. FUNCTIONS DECLARATIONS");

// function logger() {
//   console.log("My name is PRINCE");
// }

// logger();
// logger();
// logger();

// function fruitProcesssor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcesssor(4, 5));
// const applesJuices = fruitProcesssor(5, 0);
// console.log(applesJuices);

// console.log("2. FUNCTIONS EXPRESSSIONS");

// const calcAge1 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age1 = calcAge1(1991);
// console.log(age1);

// const age2 = calcAge1(1999);
// console.log(age2);

// console.log("3. ARROW FUNCTIONS");

// const calcAge3 = (birthYear) => {
//   2037 - birthYear;
// };

// const age3 = calcAge3(2001);
// console.log(age3);

// const yeasUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement}.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };
// console.log(yeasUntilRetirement(1997, "BOB"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcesssor(apples, oranges) {
//   const applesPeices = cutFruitPieces(apples);
//   const orangePeices = cutFruitPieces(oranges);
//   console.log(apples, oranges);
//   const juice = `Juice with ${applesPeices} peices of apples and ${orangePeices} peices of oranges.`;
//   return juice;
// }

// console.log(fruitProcesssor(9, 5));

console.log("ARRAY");
const friends = ["MIchael", "Steven", "Peter"];
console.log(friends);
console.log(friends.length);
console.log(friends[0]);
console.log(friends[friends.length - 1]);
friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];  this is wrong only withing array only one at a time vlaue can be changed

const firstName = "Prince";
const name1 = [firstName, "Sharma", 2037 - 1991, "professor", friends];
console.log(name1);

const newlength = name1.push("Jay");
console.log(name1);
console.log(newlength);

console.log(name1.unshift("John"));
name1.pop();
name1.shift();
name1.shift();
console.log(name1);

console.log(name1.indexOf("John"));
console.log(name1.includes("John"));
console.log(name1.includes("Sharma"));
console.log(name1.includes(45));

const jonasArr = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const prince = {
  firstName: "Prince",
  secondName: "Sharma",
  birthYear: 2000,
  job: "SE",
  age: 2024 - 2000,
  friends: ["Michael", "Peter", "Steven"],
  calcAge: function (birthYear) {
    return 2024 - birthYear;
  },
};

console.log(prince);
console.log(prince.firstName);
console.log(prince.secondName);
console.log(prince.age);
console.log(prince.friends);

//another way
console.log(prince["firstName"]);
const nameKey = "Name";
console.log(prince["first" + nameKey]);
console.log(prince["second" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about PRINCE? Chosse between firstName,LAstname, age and friends"
// );

// if (prince[interestedIn]) {
//   console.log(prince[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age and friends"
//   );
// }

prince.location = "Portugal";
prince["intagram"] = "prince_5092";
console.log(prince);

//Challenge
console.log(
  `${prince.firstName} has ${prince.friends.length} friends, and his best friend is called ${prince["friends"][0]}`
);

prince.hasDriverLicence = true;
console.log(prince);

console.log(prince.calcAge(1999));
console.log(prince["calcAge"](1999));

const prince1 = {
  firstName: "Prince",
  secondName: "Sharma",
  birthYear: 2000,
  job: "SE",
  age: 2024 - 2000,
  friends: ["Michael", "Peter", "Steven"],
  calcAge: function () {
    console.log(this);
    return 2024 - this.birthYear;
  },
};
console.log(prince1.calcAge());

const prince2 = {
  firstName: "Prince",
  secondName: "Sharma",
  birthYear: 2000,
  job: "SE",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicence: true,
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year young ${
      prince2.job
    } and 
             he has ${this.hasDriverLicence ? "a" : "no"} drivers's Licence`;
  },
};

// console.log(prince2.calcAge());
console.log(prince2.getSummary());
