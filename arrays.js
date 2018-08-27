//create some arrays
const numbers = [43, 56, 33, 23, 44, 6];
const numbers2 = new Array(22, 44, 33, 56);
const fruit = ["Apple", "banana", "pear"];
const mixed = [
  2,
  3,
  "hello",
  true,
  null,
  undefined,
  { a: 2, b: 3 },
  new Date()
];

let val;

//get array length
val = numbers.length;

//check if is array
val = Array.isArray(numbers);

//get a single value from an array
val = numbers[3];
val = numbers[0];

//insert into array
numbers[2] = 100;

//find index of a value
val = numbers.indexOf(23);

//mutating arrays
//add to end
numbers.push(250);

//add to front
numbers.unshift(123);

//take from the end
numbers.pop();

//take from the front
numbers.shift();

//splice values
numbers.splice(1, 1); // where we start and end, the 2 params inside

//reverse array
numbers.reverse();

//concatenate arrays
val = numbers.concat(numbers2);

//sort arrays
val = fruit.sort();
val = numbers.sort();

//use the compare function
val = numbers.sort(function(x, y) {
  return x - y;
});

//reverse sort
val = numbers.sort(function(x, y) {
  return y - x;
});

// find
function under50(num) {
  return num < 50;
}
val = numbers.find(under50); //find the first number under 50
//also be careful of sorting above

function over50(num) {
  return num > 50;
}
val = numbers.find(over50); //find the first number under 50
//also be careful of sorting above

console.log(numbers);
console.log(val);
