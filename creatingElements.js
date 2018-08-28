const li = document.createElement("li");

li.className = "collection-item";
li.id = "new-item";

li.setAttribute("title", "new item");

li.appendChild(document.createTextNode("hello world"));

document.querySelector("ul.collection").appendChild(li);

const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = "<i class='fa fa-remove'></i>";
li.appendChild(link);

console.log(li);
