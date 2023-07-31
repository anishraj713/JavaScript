"use strict";
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Function>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
// Basic Function
function basic() {
  console.log("hey! i am a function");
}
basic(); // Here we call the function
*/
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Array>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
const friends = ["Tom", "Bi", "john"]; //first way to create Array
console.log(friends.length); // this is used to check the length of array
console.log(friends[0]);
console.log(friends[friends.length - 1]);

const ages = new Array(19, 23, 56, 47, 52); //this is the second way to create array
console.log(ages[ages.length - 2]);

// calculate the age
const calcAge = function (year) {
  return 2037 - year;
};

const year = [1999, 1996, 1994, 1998, 2000];
console.log(year);
const age = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[2]),
  calcAge(year[3]),
  calcAge(year[year.length - 1]),
];
console.log(age);
*/
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Object>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const person = {
//   firstName: "Anish",
//   lastName: "Raj",
//   birthYear: 1999,
//   job: "student",
//   hasDriverLicense: false,
//   friends: ["Aman", "Ankit", "Alok"],

// Object Method
//   // calcAge: function () {
//   //   return 2022 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's License`;
//   },
// };

// const friendsList = [0];
// console.log(person.firstName, person.birthYear, person.friends[1]); //This dot Notation
// console.log(person["firstName"], person["birthYear"], person["friends"]); //This is Bracket Notation

// const personDetail = `${person.firstName} has ${person.friends.length} friends, and has best friend is called ${person.friends[0]}`;
// console.log(personDetail);

// console.log(person.calcAge());
// console.log(person.age);

// const personDetail2 = `${person.firstName} is a ${person.age}-year old ${
//   person.job
// }, and he has ${person.hasDriverLicense ? "a" : "no"} driver's License`;
// console.log(personDetail2)

// console.log(person.getSummary());
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// for(let i = 1;i<=5;i++){
//   console.log("Hello")
// }
const friends = ["Tom", "Bi", "john", 1991, [1, 2, 3, 4]];
// const types = [];
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i], typeof [i]);
//   // Fillings types array
//   // types[i] = typeof friends[i];
//   types.push(typeof friends[i]);
// }
// console.log(types);

// for (let i = 0; i < friends.length; i++) {
//   if (typeof friends[i] == "object") continue;
//   console.log(friends[i], typeof friends[i]);
// }
// for (let i = 0; i < friends.length; i++) {
//   if (typeof friends[i] == "number") break;
//   console.log(friends[i], typeof friends[i]);
// }

// Looping Backwards
// console.log(friends.length)
// for (let i = friends.length - 1; i >= 0; i--) {
//   console.log(friends[i]);
// }

let dice = Math.trunc(Math.random() * 6 + 1);
if (dice == 6) {
  console.log(`Super bad Luck ${dice}`);
}
// while loop
while (dice !== 6) {
  console.log(`dice rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice == 6) console.log(`bad Luck ${dice}`);
}
