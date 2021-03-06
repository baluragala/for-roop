function getPrice():number{
    return 10;
}

function calculateTax(price:number,serviceTax?:number, tax:number=14.5):number{
    return 100;
}

calculateTax(100);


function add(a:number,b:number):number {
    return a+b;
} 

let add1 = (a:number,b:number)=>a+b;

let double = (a:number) => {
    let r=2*a;
    return r;
}

let fruits:Array<string> = ['Apple','Banana','Chikoo','Dragon Fruit'];

let filteredFruits = fruits.filter(function(f){
    return f.length >= 6;
});

let filteredFruits1 = fruits.filter((f) => f.length >= 6);

console.log(filteredFruits);
console.log(filteredFruits1);


/*
1. function with no params and body with single return
2. function with no params and body with more than 1 statement and a return

1. function with 1 params and body with single return
2. function with 1 params and body with more than 1 statement and a return

1. function with >1 params and body with single return
2. function with >1 params and body with more than 1 statement and a return
*/

