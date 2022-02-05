interface INameAndPrice {
    name: string;
    price: number;
}

class clsFruit implements INameAndPrice {
    constructor(public name: string, public price: number, public color: string) { }
}

class clsTelephones implements INameAndPrice {
    constructor(public name: string, public price: number, public loudness: string) { }
}

function showInventory(product: INameAndPrice) {
    console.log("Product name: " + product.name);
    console.log("Product price: " + product.price);
    console.log("------------------------");
}

// fruit1
let fruit1 = new clsFruit('apple', 1.25, "red");
let fruit2 = new clsFruit('bananna', 1.75, "yellow");
let fruit3 = new clsFruit('kiwi', 2.75, "green");
let telephone1 = new clsTelephones('small phone', 150.75, "quite");
let telephone2 = new clsTelephones('big phone', 250.75, "loud");

var inventory = [fruit1, fruit2, fruit3, telephone1, telephone2];

//inventory.forEach();

for (var i = 0; i < inventory.length; i++) {
    showInventory(inventory[i]);
};