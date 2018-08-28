const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

//clear the input
taskInput.value = "";

// form.addEventListener("submit", runEvent);

//keydown
// taskInput.addEventListener("keydown", runEvent);

// //keyup
// taskInput.addEventListener("keyup", runEvent);

//keypress
//taskInput.addEventListener("keypress", runEvent);

//keyfocus
// taskInput.addEventListener("focus", runEvent);

// //keyblur
// taskInput.addEventListener("blur", runEvent);

// //cut
// taskInput.addEventListener("cut", runEvent);

// //paste
// taskInput.addEventListener("paste", runEvent);

//taskInput.addEventListener("input", runEvent);

//change event
select.addEventListener("change", runEvent);

function runEvent(e) {
  console.log(`Event type: ${e.type}`);

  console.log(e.target.value);

  //heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}
