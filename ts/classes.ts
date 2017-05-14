class Product {

    // private name:string;
    // private desc:string;
    // private price:number;

    //accessors
    get Name(){
        return this.name;
    }

    set Name(value:string){
        this.name = value.toUpperCase();
    }

    get Desc(){
        return this.desc;
    }

    set Desc(value:string){
        this.desc = value;
    }

    get Price(){
        return this.price;
    }

    set Price(value:number){
        if(value <= 0)
            throw new Error('Price cannot be 0 or lessthan 0');
        this.price = value;
    }

    /* this is constructor function */
    constructor(private name:string, private desc:string,private price:number){
        this.name = name;
        this.desc = desc;
        this.price = price;
    }

    /*
    private name:string;
    private desc:string;
    private price:number;
    constructor( name:string,  desc:string, price:number){
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
    */

    private calculateSalePrice(){
        return this.price + this.price * .145;
    }

    private calculateDiscount(){
        return this.price * .1;
    } 

    total(){
        this.calculateSalePrice();
        this.calculateDiscount();
    }
}

class Cart {
    constructor(){
    }
}

function Product1(name:string, desc:string, price:number){
    this.name = name;
    this.desc = desc;
    this.price = price;
}

let p1:Product = new Product('prod1','prod1',100);
p1.Name = 'iphone';
/*
*/
console.log(p1.Name);

let c = new Cart();
let p2 = new Product1('prod1','prod1',100);

console.log(Product);
console.log(Product1);


console.log(p1);
console.log(p2);


