// for of

const arr = [1,2,3,4,5];

for(const itr of arr)
{
    console.log(itr);
}

const greeting = "Hello world";

for(const itr of greeting)
{
    console.log(`Each char is ${itr}`);
}

const map = new Map();
map.set('IN','India');
map.set('USA','United State of America');
map.set('Fr','France'); 

console.log(map);
// o/p : 
// Map(3) 
// {
//  'IN' => 'India',
//  'USA' => 'United State of America',
//  'Fr' => 'France'
// }

for(const [key,value] of map)
{
    console.log(key,'->',value);   
}

// const myObj = {
//     name : 'Kishan',
//     age : 18,
//     id : '202201217'
// };
// You can't iterate object like below
// for(const [key,value] of myObj)
// {
//     console.log(key,'->',value);
// }
