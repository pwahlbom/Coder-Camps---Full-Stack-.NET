var clsProducts1 = (function () {
    function clsProducts1() {
    }
    clsProducts1.prototype.tax = function () {
        return (this.price * 0.08).toFixed(2);
    };
    return clsProducts1;
}());
var objProduct1 = new clsProducts1();
objProduct1.price = 2.33;
objProduct1.name = "Apples";
//----------------------------------------------------------------
var clsProducts2 = (function () {
    function clsProducts2(name, price) {
        this.name = name;
        this.price = price;
    }
    clsProducts2.prototype.calculateTax = function () {
        return (this.price * 0.08).toFixed(2);
    };
    clsProducts2.prototype.calculateTotal = function () {
        return this.price + this.calculateTax();
    };
    return clsProducts2;
}());
var objProduct2 = new clsProducts2("Apple", 3.22);
//----------------------------------------------------------------
var clsProducts3 = (function () {
    function clsProducts3(name, price) {
        this.name = name;
        this.price = price;
    }
    clsProducts3.prototype.calculateTax = function () {
        return (this.price * 0.08).toFixed(2);
    };
    clsProducts3.prototype.calculateTotal = function () {
        return this.price + this.calculateTax();
    };
    return clsProducts3;
}());
var objProduct3 = new clsProducts3("Apple", 3.22);
var Bear = (function () {
    function Bear(name, favoriteFood) {
        this.name = "Yogi";
        this.favoriteFood = "Picnic Basket";
    }
    return Bear;
}());
//# sourceMappingURL=Classes.js.map