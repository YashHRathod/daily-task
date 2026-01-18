// Array :

// JavaScript arrays are resizable and can contain a mix of different data types.

const myArr = [0, 1, 2, 3, 4, 5];

// const myHeroes = ["shaktiman", "naagraj", "doga"];

// console.log(myArr[2]);

// Array Methods :

// myArr.push("Ksn");
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(100); // To add element in start of the array
// console.log(myArr);
// myArr.shift(); // To remove element from start of the array
// console.log(myArr);

// console.log(myArr.includes(5)); // Is element present or not...it's return true of false
// console.log(myArr.indexOf(5)); // if element present then return that index o/w -1
// console.log(myArr.indexOf(1000)); // o/p : -1

// const newArr = myArr.join(); // convert array into string
// console.log(newArr); // o/p : 0,1,Kishan,3,4,5
// console.log(typeof newArr); // o/p : string


// Very Important Methods : slice and splice
const arr1 = [1,2,3,4,5];
console.log("arr1 :",arr1);

const arr2 = arr1.slice(1,3); // index : [1,3)
console.log('arr1 :',arr1);
console.log('arr2 :',arr2);

const arr3 = arr1.splice(1,3); // index : [1,3] remove
console.log('arr1 :',arr1);
console.log('arr3 :',arr3);