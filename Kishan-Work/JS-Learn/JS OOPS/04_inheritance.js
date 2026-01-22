class person{
    eat(){
        console.log("eating...");
    }
    sleep(){
        console.log("sleeping...");
    }
}

class engineer extends person{
    works(){
        console.log("Working...");
    }
}

const engObj = new engineer();
engObj.works();
engObj.ear();//I can access all properties and method of parent class
