
const name = "kishan";
const repoCount = 50;

// console.log(name + repoCount + " Value");//bad Practice

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//good practice
//One more method to declare string

//Run below line in browser console and check prototype(function) of string
const str = new String("kishan");

// console.log(str[0]);
// console.log(str.length);
// console.log(str.__proto__);

// console.log(str.toUpperCase());
// console.log(str);

// console.log(str.charAt(2));//output character of second index
// console.log(str.indexOf('k'));//output index of 'k' in str 

// If start ≥ end → empty string
// we do not pass negative value in substring function if we do that then it's start from 0 index
// const newString2 = str.substring(-5,4);
// console.log(newString2);

const newString = str.substring(2,5); // [start index,end index)
console.log(newString);


// k   i   s   h   a   n
// 0   1   2   3   4   5
// -6 -5  -4  -3  -2  -1

// const newstring1 = str.slice(-6,-3); // realIndex = length + negativeIndex
// console.log(newstring1);

//If there is space in string if we want to ingnore it then we use trim prototype
// very IMP prototype
//It's remove space from Beginning and End not from between of the string.

// const str1 = "       Kishan R  Thakor     !";
// console.log(str1);
// console.log(str1.trim());

const url = "https://kishanthakor.com/profile%20photo";
// console.log(url.replace('%20','-')); // o/p : https://kishanthakor.com/profile-photo

// console.log(url.includes("kishan"));//Is that substring is part of that string or Not ?
console.log(url.split('/')); //Split string based on / and convert in array of string