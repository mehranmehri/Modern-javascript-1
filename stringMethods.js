const firstName = "William";
const secondName = "John";
const age = 35;
const str = "hello there my name is brad";
const tags = "web design, web development, programming";

let val;

val = firstName + secondName;

//concatenation
val = firstName + " " + secondName;

//appending
val = "Brad";
val += "traversy";

val = "hello, my name is " + firstName + " and I am " + age;

//escaping
val = "That's awesome I can't wait"; //just use double quotes

//length
val = firstName.length;

//concat
val = firstName.concat(" ", secondName);

//change case
val = firstName.toUpperCase();
val = secondName.toLowerCase();

val = firstName[0];

//index of
val = firstName.indexOf("l");
val = secondName.lastIndexOf("l");
val = firstName.charAt("2");

//get last character
val = firstName.charAt(firstName.length - 1);

//substring
val = firstName.substring(0, 4);

//slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split
val = str.split(" ");
val = tags.split(",");

//replace
val = str.replace("brad", "jack");

//include
val = tags.includes("web");

console.log(val);
