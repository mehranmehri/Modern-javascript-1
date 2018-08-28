//window method objects and properties
//alert prompt and confirm
//alert("hello");

// const input = prompt();
// alert(input);

//confirm
// if (confirm("are you sure")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let val;

// outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

//inner width and height
// val = window.innerHeight;
// val = window.innerWidth;

//scroll points
// val = window.scrollY;
// val = window.scrollX;

//location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//redirect
//window.location.href = "http://google.com";

//reload
//window.location.reload();

//history object
window.history.go(-1);
val = window.history.length;

//navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;

console.log(val);
