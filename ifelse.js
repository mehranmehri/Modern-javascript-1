const id = "100"; //even if this is a number the if statement still runs

// equal to == test just the value and not the type
// if (id == 100) {
//   console.log("correct");
// } else {
//   console.log("incorrect");
// }

// //not equal to
// if (id != 101) {
//   console.log("ID is not equal to 101");
// } else {
//   console.log("incorrect");
// }

// // equal to value and type
// if (id === 100) {
//   console.log("correct");
// } else {
//   console.log("Value and type not equal");
// }

// // not equal to value and type
// if (id !== 100) {
//   console.log("Correct, value and type are not the same");
// } else {
//   console.log("Value and type are equal");
// }

//TESTING IF SOMETHING IS UNDEFINED
// console.log(typeof id);

// if (typeof id !== "undefined") {
//   // comment everything above so that
//   console.log(`The ID is ${id}`); // doesnt give error 'id is not defined'
// } else {
//   console.log("No ID");
// }

//greater or less than
// if (id >= 100) {
//   console.log("correct");
// } else {
//   console.log("incorrect");
// }

//else if
// const color = "yellow";

// if (color === "red") {
//   console.log("Color is red");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("Color is something else than blue or red");
// }

//logical operators
const name = "Steve";
const age = 20;

// AND && - both conditions must be true
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR || - only one condition needs to be true
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in the race`);
} else {
  console.log(`${name} can run in the race`);
}

// ternary operator
console.log(id === 100 ? "Correct" : "Incorrect");
