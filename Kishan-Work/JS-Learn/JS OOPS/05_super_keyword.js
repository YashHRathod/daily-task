class person {
    constructor()
    {
        console.log("the person constructor is running...");
    }
    eat(){
        console.log("eating...");
    }
    sleep(){
        console.log("sleeping...");
    }
};

class engineer extends person{
    constructor(branch){
        super();// to invoke parent class constructor
        this.branchName = branch;
        console.log(`The engineer branch is ${this.branchName}`);
    }
    work(){
        super.eat();    
        console.log("The person is working...");
    }
};

const engObj = new engineer("CSE");

