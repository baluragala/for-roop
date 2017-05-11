class Product {
    set Price(value) {
        if (value < 0)
            throw new Error('Price cannot be negative');
        this.price = value;
    }
    get Price() {
        return this.price;
    }
    get Price() {
        return this.price;
    }
}
var p = new Product();
p.Price = 100;
console.log(p.Price);
