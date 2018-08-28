// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card title");
// });

// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card content");
// });

// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// });

// event delegation
// let delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

//choose a parent for event delegation to listen
document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  //console.log(e.target);
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
