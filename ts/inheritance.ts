
class Animal{
    protected age:number;
    protected weight:number;
    protected name:string;

    eat(){
        console.log('Animal eats food');
    }

    sleep(){

    }
}

class Cat extends Animal {
    desc:string;

    //override parent method
    eat(){
        console.log('Cat eats food');
    }
    climbTree(){

    }

    print(){
        ///console.log(this.name)
    }
}

class Tiger extends Cat {
    type:string;
}

let jimmy:Cat = new Cat();
let t:Tiger = new Tiger();