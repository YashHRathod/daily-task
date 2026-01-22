// Most important library
const _ = require("lodash");

const data = ["person","person",1,2,1,2,"name","age",'2'];

const uniqdata = _.uniq(data);
console.log(uniqdata);

console.log(_.isString('2'));
console.log(_.isString(2));