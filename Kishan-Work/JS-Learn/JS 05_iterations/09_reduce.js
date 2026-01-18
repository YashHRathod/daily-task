// Ex:1 Sum of Number 

const arr = [1,2,30,4];
let sum = arr.reduce((acc,curr) => acc + curr,0);

console.log(sum);

// Ex:2 Multiply all Number

let multi = arr.reduce((acc,curr) => acc*curr,1);
console.log(multi);

// Ex:3 Find maximum Number in arr

let maxi = arr.reduce((acc,curr) => {
    return curr > acc ? curr : acc;
},-1);
console.log(maxi);

// Ex:4 Convert array to object

const user = ['kishan','yash','pratik'];

const obj = user.reduce((name,curr,index) => {
    name[index] = curr;
    return name;
},{});

console.log(obj);

// Ex:5 count Frequecy 

const fruits = ["apple","banana","guava","banana","guava"];

const frqFruits = fruits.reduce((fruit,val,idx) => {
    if(fruit[val]) fruit[val]++;
    else fruit[val] = 1;
    return fruit;
},[]);

console.log(frqFruits);


// Ex:6 
// Below is our array of object
const shoppintCart = [
    {
        'course' : 'data structure and algorithm',
        'price' : 2999
    },
    {
        'course' : 'machine learning',
        'price' : 5999
    },
    {
        'course' : 'Digital communication',
        'price' : 10999
    }
];

let totalPrice = shoppintCart.reduce((price,courseName) => price + courseName.price,0);
console.log(totalPrice);