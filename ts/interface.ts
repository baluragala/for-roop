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

let iphone:Product = {  title:'iphone',
                        desc:'a phone from apple', 
                        price:600, 
                        spec: { cores:2, ram:2 },
                        salePrice: () => {
                            let total = this.price + (this.price * 0.145); 
                            return total;
                        }
                    };

let products:Product[] = [
    {title:'iphone',desc:'a phone from apple', price:600,salePrice:()=>undefined}, 
    {title:'iphone',desc:'a phone from apple', price:600,salePrice:()=>undefined}
    ]