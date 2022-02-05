class Hamburger {
    constructor(private name: string = "Hamburger", private price: number = 5) {
    };

    getPrice() {
        return this.price;
    };
};

class Cheeseburger extends Hamburger{
    constructor() {
        super("Cheeseburger");
    };

    getPrice() {
        return super.getPrice() + 1;
    };
};