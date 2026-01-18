const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = myNums.map((num) => num*2);

console.log(newArr);


const newArr2 = myNums.map(num => num*2).map(num=>num+1).filter(num => num > 10);

console.log(newArr2);