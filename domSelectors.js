//document.getElementById()
// console.log(document.getElementById("task-title"));

// //get things from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");

// //change styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";

// //Change content
// taskTitle.textContent = "Task list";
// taskTitle.innerText = "My task list";
// taskTitle.innerHTML = "<span style='color: red'> Task list</span> ";

//query selector
// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));
// //it's gonna take the first h5 that it encounters even though there are more than 1

// document.querySelector("ul li").style.color = "red";
// document.querySelector("ul li:last-child").style.color = "blue";
// document.querySelector("ul li:nth-child(3)").style.color = "brown";

// document.querySelector("ul li:nth-child(3)").textContent = "Hello there";
// document.querySelector("ul li:nth-child(odd)").style.background = "brown";
// //selects only the first element because query selector is a single element selector
// document.querySelector("ul li:nth-child(even)").style.background = "grey";

//DOM SELECTORS FOR MULTIPLE ELEMENTS
// const items = document.getElementsByClassName("collection-item");
// console.log(items);

// console.log(items[0]);
// items[0].style.color = "red";
// items[3].style.color = "red";
// items[0].textContent = "red";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// console.log(listItems);

// let lis = document.getElementsByTagName("li");
// // console.log(lis);
// // console.log(lis[0]);
// // lis[0].style.color = "red";

// //convert html collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: hello`;
// });

// console.log(lis);

//Query selector all
// const items = document.querySelectorAll("ul.collection li.collection-item");

// //compare to above we do not need to convert it to an array
// items.forEach(function(item, index) {
//   item.textContent = `${index}: Hello`;
// });

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(li, index) {
  li.style.background = "#ccc";
});
console.log(liOdd);

// liEven.forEach(function(li, index) {
//   li.style.background = "#abc123";
// });
// console.log(liEven);

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#abc123";
}

console.log(liEven);
