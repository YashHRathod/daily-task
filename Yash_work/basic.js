// Normally, before ES6:
const square = function(num) {
    return num * num;
}
// In ES6:
const square2 = num => num * num;
// this is a keyword. It basically returns a reference to the object it is placed within
const user = {
    name: 'Mike',
    call() {
        console.log(this);
    }
}
user.call();
// ⚙️ Output: {name: 'Mike, call: f} 

// In a child class constructor, this cannot be used until super is called.
class Girl extends Boy {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    eat() {
        console.log("eating");
    }
}
const myGirl = new Girl("Shreya");

const one = [1, 2, 3];
const two = [4, 5, 6];
// without ES6:
const combined = one.concat(two);

// With ES6:
const combined2 = [...one, ...two];

// If we want to add things in-between:
const combined3 = [...one, '9', '7', ...two ];

// If we want to clone an array:
const myDupli = [...two];
//Destructiring the objects is doen in ES6
const { name, age, country } = girl;
