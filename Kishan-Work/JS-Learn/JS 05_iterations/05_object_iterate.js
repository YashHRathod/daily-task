const Student = {
    firstName : 'Kishan',
    LastName : 'Thakor',
    age : '21',
    id : '202201217',
    course : 'Btech'
};
// print object : we use for..in loop
for(const key in Student) {
    console.log(`${key} : ${Student[key]}`);
}