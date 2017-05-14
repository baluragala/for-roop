var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('Animal eats food');
    };
    Animal.prototype.sleep = function () {
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        console.log('Cat eats food');
    };
    Cat.prototype.climbTree = function () {
    };
    return Cat;
}(Animal));
var jimmy = new Cat();
jimmy.eat();
