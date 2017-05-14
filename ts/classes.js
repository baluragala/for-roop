var Product = (function () {
    function Product(name, desc, price) {
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
    return Product;
}());
function Product1(name, desc, price) {
    this.name = name;
    this.desc = desc;
    this.price = price;
}
var p1 = new Product('prod1', 'prod1', 100);
var p2 = new Product1('prod1', 'prod1', 100);
console.log(Product);
console.log(Product1);
console.log(p1);
console.log(p2);
