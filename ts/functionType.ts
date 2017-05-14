interface Spec{
    cores:number,
    ram: number
}

interface Product {
    title:string,
    desc?:string,
    price:number,
    spec?:Spec
    salePrice: () => number;
}

interface productAsStringFunc {
    (product:Product) : productAsStringFunc
}

let logProduct:productAsStringFunc;

logProduct = function(product:Product){
    return logProduct;
}

