let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item");

val = listItem;
val = list;

//get child node - returns a node list
val = list.childNodes;

//get children element nodes - returns an HTML collection
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;
//reference names for Node types
// 1-Element
// 2-Attribute (deprecated)
// 3-Text code
// 8-Comment
// 9-Document itself
// 10-Doctype

val = list.children; // is more often used
val = list.children[0];
list.children[1].textContent = "hello";

//children of children
list.children[3].children[0].id = "test-link";
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
