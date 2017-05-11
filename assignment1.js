var product1 = {
    name:'prod1',
    description:'prod1 is good',
    price:100
}

product1.salePrice = calculateSalePrice(product1);

var product2 = {
    name:'prod2',
    description:'prod2 is good',
    price:140
}

product2.salePrice = calculateSalePrice(product2);

var product3 = {
    name:'prod3',
    description:'prod1 is good',
    price:200
}

product3.salePrice = calculateSalePrice(product3);

var product4 = {
    name:'prod4',
    description:'prod1 is good',
    price:170
}

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