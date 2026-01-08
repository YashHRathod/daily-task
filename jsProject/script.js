// let a = 10;
// console.log(a)
// a = "Pratik";
// console.log(a)

// console.warn("Pratik Enter");

/*


*/

// console.log("Loading............");

// setTimeout(() => {
//   console.log("Hii Pratik");
// }, 2000);

// const id = setInterval(() => {
//   console.log("Runs every 1 second");
// }, 1000);

// clearInterval(id);

/* Interval and TimeOut Project */

// document.addEventListener("DOMContentLoaded", () => {
//   const pop = document.getElementById("popup");
//   const cancelBtn = document.getElementById("cancel");

//   const timeId = setTimeout(() => {
//     pop.style.display = "block";
//   }, 3000);

//   cancelBtn.onclick = () => {
//     clearTimeout(timeId);
//     pop.style.display = "none";
//   };
// });

// const myfuncs = function (a, b) {
//   return a * b;
// };

// console.log(myfuncs(2, 5));

//function is method of object
// const person = {
//   fname: "Prajapati",
//   lname: "Pratik",
//   fulln: function () {
//     return this.fname + " " + this.lname;
//   },
// };

// console.log(person.fulln());

//use call which is uded to pass object as a agrument

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// console.log(person.fullName.call(person1));

/********  use of bind   ***********/
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = person.fullName.call(member);
// console.log(fullName());

// let currentTheme = "light";

/* ---------------------------
   1. OBSERVE CUSTOM EVENT
----------------------------*/
// document.addEventListener("themeChange", (event) => {
//   document.body.className = event.detail.theme;
// });

/* ---------------------------
   2. DISPATCH CUSTOM EVENT
----------------------------*/
// document.getElementById("themeBtn").addEventListener("click", () => {
//   currentTheme = currentTheme === "light" ? "dark" : "light";

//   const themeEvent = new CustomEvent("themeChange", {
//     detail: {
//       theme: currentTheme,
//     },
//   });

//   document.dispatchEvent(themeEvent);
// });

// /* ---------------------------
//    3. WINDOW LEVEL EVENT
// ----------------------------*/
// window.addEventListener("resize", () => {
//   document.getElementById(
//     "sizeInfo"
//   ).innerText = `Window width: ${window.innerWidth}px`;
// });

/* array */
const arr = [0, 1, 2, 3];
arr[0] = 4;
arr.sort();
console.log(arr);
