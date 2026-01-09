// var num = 10;
// console.log(num);

// let v: any = 10;
// v = "Pratik";
// console.log(v);

// const data: { fname: string; lname: string; age: number } = {
//   fname: "Pratik",
//   lname: "Prajapati",
//   age: 21,
// };

// console.log(data);

// function getnum(): number {
//   return 3;
// }

// console.log(getnum());

// function getvalue<T>(value: T): T {
//   return value;
// }

// console.log(getvalue(4));

function giv<T>(x: T): T {
  return x;
}

console.log(giv(8));
console.log(giv("Pratik"));
console.log(giv(true));
