var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Hamburger = (function () {
    function Hamburger(name, price) {
        if (name === void 0) { name = "Hamburger"; }
        if (price === void 0) { price = 5; }
        this.name = name;
        this.price = price;
    }
    ;
    Hamburger.prototype.getPrice = function () {
        return this.price;
    };
    ;
    return Hamburger;
}());
;
var Cheeseburger = (function (_super) {
    __extends(Cheeseburger, _super);
    function Cheeseburger() {
        _super.call(this, "Cheeseburger");
    }
    ;
    Cheeseburger.prototype.getPrice = function () {
        return _super.prototype.getPrice.call(this) + 1;
    };
    ;
    return Cheeseburger;
}(Hamburger));
;
//# sourceMappingURL=inheritance.js.map