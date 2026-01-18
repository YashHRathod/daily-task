console.log(null < 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true
//The reason is that an equality check == and comparisons like >,< and >=,<= work differently
//Comparisons convert null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null < 0 is false

// === strict check (check both value and datatypes)
 
console.log("2" == 2);//true bcz "2" -> true and 2 -> true => true == true
console.log("2" === 2);//false