interface INamed {
    name: string;
}

class Hammer implements INamed {
    constructor(public name: string, public weight: number) { }
}

class Computer implements INamed {
    constructor(public name: string, public operatingSystem: string) { }
}

class Hamster implements INamed {
    constructor(public name: string, public age: number) { }
}

function printName(product: INamed) {
    console.log(product.name);
}


// create a hammer
let myHammer = new Hammer('Sledgehammer', 20);
printName(myHammer);

// create a computer
let myComputer = new Computer('MacBook Pro', 'Yosemite');
printName(myComputer);

// create a hamster
let myHamster = new Hamster('Hammy', 2);
printName(myHamster);