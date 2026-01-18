const marvel_heros = ["thor","Ironman","Spiderman"];
const dc = ["Superman","flash","batman"];

marvel_heros.push(dc);
console.log("After Push dc: ",marvel_heros);

marvel_heros.pop();
console.log("After Pop dc:",marvel_heros);

const newArr1 = marvel_heros.concat(dc);
console.log("newArr2:",newArr1);

// One more easy method to concatinate arrays
const newArr2 = [...marvel_heros,...dc];
console.log("newArr2:",newArr2);


const newArr3 = [1,2,3,[4,5,6],7,[5,3,[4,1,3]]];
const newArr4 = newArr3.flat(Infinity); // convert into single flat array
console.log(newArr4);

console.log(Array.isArray("Kishan"));
console.log(Array.isArray(["Kishan","Pratik","Yash"]));

console.log(Array.from("Hitesh"));//separate into array

const score1 = 100, score2 = 200, score3 = 300;

console.log(Array.of(score1,score2,score3));//Convert into array