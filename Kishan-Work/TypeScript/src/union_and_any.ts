let subcriber: number | string = '1M';
subcriber = 10000;//also allow bcz type annotation is number and string 
// So you can store either number of string

// when you want to store some specific value in variable then
let apiRequestStatus:'Pending'|'Success'|'error' = 'Pending';
// apiRequestStatus = 'done'; // error because it should be
// 'Pending' or 'Success' or 'error'

const orders = [11,40,42,65];

// here i have to mension undefined o/w ts throw error if it's
// not assing
let currentOrder:number|undefined;

for(const num of orders)
{
    if(num === 40) 
    {
        currentOrder = num;
    }
}

console.log(currentOrder);