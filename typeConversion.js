let val;

//number to string
val = 5;
val = String(555);
val = String(4 + 4);

//boolean to string
val = String(true);
//date to string
val = String(new Date());
//array to string
val = String([1, 3, 4, 6]);

//toString method
val = (5).toString();
val = true.toString();

//string to numbers
val = "5";
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([1, 3]);

val = parseInt("100");
val = parseInt("100.3");
val = parseFloat("100.31");

//Output
console.log(val);
console.log(typeof val);
//console.log(val.length); works only on strings
console.log(val.toFixed(2));

//Type coercion
const val1 = String(5);
const val2 = 6; // here this will be change to a string automatically
const sum = Number(val1 + val2); // if we want to convert it to a number
console.log(sum);
console.log(typeof sum);
