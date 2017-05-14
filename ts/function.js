function getPrice() {
    return 10;
}
function calculateTax(price, serviceTax, tax) {
    if (tax === void 0) { tax = 14.5; }
    return 100;
}
calculateTax(100);
function add(a, b) {
    return a + b;
}
var add1 = function (a, b) { return a + b; };
var double = function (a) {
    var r = 2 * a;
    return r;
};
var fruits = ['Apple', 'Banana', 'Chikoo', 'Dragon Fruit'];
var filteredFruits = fruits.filter(function (f) {
    return f.length >= 6;
});
var filteredFruits1 = fruits.filter(function (f) { return f.length >= 6; });
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
