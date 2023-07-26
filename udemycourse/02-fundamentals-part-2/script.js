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
const person = {
  firstName: "Anish",
  lastName: "Raj",
  age: 23,
  job: "teacher",
  friends: ["Aman", "Ankit", "Alok"],
};

const friendsList = [0];
console.log(person.firstName, person.age, person.friends[1]); //This dot Notation
console.log(person["firstName"], person["age"], person["friends"]); //This is Bracket Notation
