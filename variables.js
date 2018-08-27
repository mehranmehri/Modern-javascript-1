// var, let, const
// var name = "john doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);
// greeting = "hello";
// console.log(greeting);

// //letters, numbers, _, $ in variable naming
// //cannot start with numbers

// //Multi word variable names
// var firstName = "john"; //Camel case mostly used
// var first_name = "steve"; //Underscore
// var SecondName = "charlie"; //Pascal case

// LET
// let name;
// name = "john doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// CONST
const name = "john";
console.log(name);
// Cannot reassign
// name = "sara";
// Have to assign a value
// const greeting;

const person = {
  name: "john",
  age: 30
};

//Object literals you can reassign what's inside only
person.name = "Sara";
person.age = 32;

// console.log(person);

const numbers = [1, 2, 3, 4];
numbers.push(6);

console.log(numbers);
