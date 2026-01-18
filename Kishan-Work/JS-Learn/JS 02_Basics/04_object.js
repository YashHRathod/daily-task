const tinderUser = new Object();

// we can add Key(Also called Property) : Value after declaration of object
tinderUser.id = "123abc";
tinderUser.name = "kishan";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// We can do nesting of object in javascript

const regularUser = {
    email : "kishan@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Kishan",
            lastName : "Thakor",
        }
    }
}

console.log(regularUser.fullName.userFullName.lastName);


// merging of object 
const obj1 = {
    1 : 'a',
    2 : 'b'
};

const obj2 = {
    3 : 'c',
    4 : 'd'
};

const obj3 = Object.assign(obj1,obj2); // assing in first parameter which is obj1
const obj4 = Object.assign({}, obj1,obj2); // Object.assign(where to assing, which object you want to assing);
console.log(obj1);//
console.log(obj3);

const obj5 = {...obj1,...obj2}; // merge both object and assign to obj5
console.log(obj5);

// we can create array of object as like C++

// we can access only key and only value of object
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id"));

//object de-structure

const {id, name} = tinderUser;
console.log(id);
console.log(name);

const course = {
    name : "JS course",
    code : "JS401",
    courseInstructor : "Dholakiya"
};
// object propertyName : short Name
const {courseInstructor : instructor} = course;// This is called object de-structure

console.log(instructor);