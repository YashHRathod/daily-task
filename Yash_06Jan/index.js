let username = "Yash";
console.log(username);
const user = {
    name: "Yash",
    age: 21
};
function printuser(user) {
    console.log(user.name);
    console.log(user.age);
}
function createuser(name, age) {
    return {
        name,
        age
    };
}
const u2 = createuser("Pratik", 22);
printuser(u2);
function updateuser(data) {
    console.log(data);
}
updateuser({ name: "Updateded Yash" });
console.log(user);
function getUser(id) {
    console.log("Fetching user:", id);
}
getUser("Yash");
const deleteUser = (name) => {
    return true;
};
const number = [1, 2, 3, 4, 5];
const double = number.map(num => { return num * 2; });
console.log(double);
const data = [1, "a", 2];
const onlyNumbers = data.filter(item => typeof item === "number");
console.log(onlyNumbers);
const products = [
    { name: "Pen", price: 10 },
    { name: "Book", price: 50 }
];
//0. add products
// 1. Get only prices
// 2. Get products with price > 20
// 3. Get names of expensive products
function addproducts(name, price) {
    return {
        name, price
    };
}
const newproduct = addproducts("marker", 60);
products.push(newproduct);
const price = products.map(it => it.price);
console.log(price);
const price20 = products.filter(it => it.price > 20);
console.log(price20);
const high = products.filter(it => it.price > 20).map(product => product.name);
console.log(high);
const totalcost = products.reduce((sum, n) => {
    return sum + n.price;
}, 0);
console.log(totalcost);
export {};
//# sourceMappingURL=index.js.map