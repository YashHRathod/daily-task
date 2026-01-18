let score = "34";
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

let num = Number("33abc");

console.log(typeof(num));
console.log(num);// o/p : NaN(Not a Number)
console.log();//pring new line

// 1 -> true, 0 -> false
// "" -> false
// "Kishan" -> true while typecasting
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let N = "11" + 1;
let N1 = "11" - 1;

console.log(N);
console.log(N1);
console.log(typeof N);
console.log(typeof N1);




