function Product(name, desc, price){
    this.name=name;
    this.desc=desc;
    this.price=price;   
}
var product1 = new Product('prod1','prod1 is good',100);
product1.salePrice = calculateSalePrice(product1);

var product2 = new Product('prod2','prod2 is good',140);
product2.salePrice = calculateSalePrice(product2);

var product3 = new Product('prod3','prod3 is good',200);
product3.salePrice = calculateSalePrice(product3);

var product4 = new Product('prod4','prod4 is good',170);
product4.salePrice = calculateSalePrice(product4);

var basket = [ product1, product2, product3, product4 ]

function calculateSalePrice(product){
    var price = product.price;
    var salePrice = price + (price * .045) + (price * .145);
    return parseInt(salePrice); 
}

function calculateTotalPrice(products){
    var totalPrice=0;
    for(var product of products){
        totalPrice += product.salePrice; 
    }
    return totalPrice;
}

console.log(basket)
console.log('Total Price :' + calculateTotalPrice(basket));