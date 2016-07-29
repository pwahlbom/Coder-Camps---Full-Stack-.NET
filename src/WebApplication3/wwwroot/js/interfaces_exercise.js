var clsFruit = (function () {
    function clsFruit(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    return clsFruit;
}());
var clsTelephones = (function () {
    function clsTelephones(name, price, loudness) {
        this.name = name;
        this.price = price;
        this.loudness = loudness;
    }
    return clsTelephones;
}());
function showInventory(product) {
    console.log("Product name: " + product.name);
    console.log("Product price: " + product.price);
    console.log("------------------------");
}
// fruit1
var fruit1 = new clsFruit('apple', 1.25, "red");
var fruit2 = new clsFruit('bananna', 1.75, "yellow");
var fruit3 = new clsFruit('kiwi', 2.75, "green");
var telephone1 = new clsTelephones('small phone', 150.75, "quite");
var telephone2 = new clsTelephones('big phone', 250.75, "loud");
var inventory = [fruit1, fruit2, fruit3, telephone1, telephone2];
//inventory.forEach();
for (var i = 0; i < inventory.length; i++) {
    showInventory(inventory[i]);
}
;
//# sourceMappingURL=interfaces_exercise.js.map