//for loop
// for (let i = 0; i <= 10; i++) {
//   //console.log("haha " + i);

//   if (i === 2) {
//     console.log("2 is my favourite number");
//     continue; // doesn't break and continue the loop
//   }

//   if (i === 5) {
//     console.log("stop the loop");
//     break;
//   }

//   console.log("number " + i);
// }

//while loop
// let i = 0;

// while (i <= 10) {
//   console.log("Number " + i);
//   i++;
// }

//do while runs at least once even if the condition is not true
// let i = 21;

// do {
//   console.log("number " + i);
//   i++;
// } while (i < 20);

//looping through arrays
const cars = ["ford", "chevy", "toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

//for each array much cleaner than above
// cars.forEach(function(car, index, array) {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

//map
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Karen" },
//   { id: 3, name: "flor" }
// ];

// const ids = users.map(function(user) {
//   return user.id;
// });

// console.log(ids);

//for in
const user = {
  firstName: "john",
  lastName: "doe",
  age: 40
};

for (let x in user) {
  // console.log(x);
  console.log(`${x} : ${user[x]}`);
}
