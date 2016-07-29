class clsProducts1 {
    name: string;
    price: number;

    tax() {
        return (this.price * 0.08).toFixed(2);
    }
}

let objProduct1 = new clsProducts1();
objProduct1.price = 2.33;
objProduct1.name = "Apples";


//----------------------------------------------------------------


class clsProducts2 {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    private calculateTax() {
        return (this.price * 0.08).toFixed(2);
    }

    calculateTotal() {
        return this.price + this.calculateTax();
    }
}

let objProduct2 = new clsProducts2("Apple", 3.22);


//----------------------------------------------------------------

class clsProducts3 {
    constructor(public name: string, public price: number) { }

    private calculateTax() {
        return (this.price * 0.08).toFixed(2);
    }

    public calculateTotal() {
        return this.price + this.calculateTax();
    }
}

let objProduct3 = new clsProducts3("Apple", 3.22);




class Bear {
    name: string;
    favoriteFood: string

    constructor(name: string, favoriteFood: string) {
        this.name = "Yogi";
        this.favoriteFood = "Picnic Basket";
    }
}