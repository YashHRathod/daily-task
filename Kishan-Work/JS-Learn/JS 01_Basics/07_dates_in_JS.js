// Dates

let myDate = new Date();// Here Date is object

console.log(myDate.toString()); // output : Mon Jan 12 2026 10:57:17 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // output : 1/12/2026, 10:57:17 AM
console.log(myDate.toLocaleDateString()); // output : 1/12/2026
console.log(myDate.toLocaleTimeString()); // output : 10:57:17 AM

console.log(myDate.getFullYear()); // output : 2026
console.log(myDate.getMonth()); // output : 0
console.log(myDate.getDate()); // output : 12
console.log(myDate.getDay()); // output : 1
console.log(myDate.getHours()); // output : 10
console.log(myDate.getMinutes()); // output : 57
console.log(myDate.getSeconds()); // output : 17

console.log(typeof myDate); // o/p : object