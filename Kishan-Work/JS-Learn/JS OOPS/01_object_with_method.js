const student = {
    fullName : "Kishan Thakor",
    marks : 95.44,
    printMarks : function (){
        console.log(this.marks);
    }
}
student.printMarks();
const employee = {
    name : "kishan",
    calcTax(){
        console.log("Your tax is 10%");
    }
}

student.__proto__ = employee;

employee.calcTax();