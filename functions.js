//function declaration
function greet(firstName, lastName) {
  //console.log("hello");
  return "hello " + firstName + " " + lastName;
}
console.log(greet("john", "doe"));

//same thing but without passing any values when
//logging the function
function greet(firstName, lastName) {
  if (typeof firstName === "undefined") {
    firstName = "john";
  } // this way is not recommended
  if (typeof lastName === "undefined") {
    lastName = "doe";
  }
  //console.log("hello");
  return "hello " + firstName + " " + lastName;
}

console.log(greet()); // HERE

//better to declare values here
function greet(firstName = "johnica", lastName = "doeica") {
  return "Hello " + firstName + " " + lastName;
}

//console.log(greet());

//function espressions
// const square = function(x) {
//   return x * x;
// };

// console.log(square(5));

const square = function(x = 3) {
  return x * x;
};

// console.log(square());

//immediately invocable function expressions IIFE's
// (function() {
//   console.log("IIFE ran");
// })();

// (function(name) {
//   console.log("Hello" + name);
// })("Brad");

//property methods
const todo = {
  add: function() {
    console.log("Add todo..");
  },
  edit: function(id) {
    console.log(`Edit to do ${id}`);
  }
};
todo.delete = function() {
  console.log("delete to do");
};

todo.add();
todo.edit(22);
todo.delete();
