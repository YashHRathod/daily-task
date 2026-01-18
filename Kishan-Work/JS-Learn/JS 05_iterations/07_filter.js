// if loop return somthing so there we use filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const number = myNums.filter((nums) => {
//     return nums > 4;
// });

// or 

const number = myNums.filter(nums => nums > 4); // what we called it :
// nums where nums > 4 select and put it in numbers
console.log(number);

const number1 = myNums.filter(nums => {
    return nums > 4; // if you write in curly breces then you have to return
    // with return keyword...
});
console.log(number1);
