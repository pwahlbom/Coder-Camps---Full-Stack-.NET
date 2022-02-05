var Hammer = (function () {
    function Hammer(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    return Hammer;
}());
var Computer = (function () {
    function Computer(name, operatingSystem) {
        this.name = name;
        this.operatingSystem = operatingSystem;
    }
    return Computer;
}());
var Hamster = (function () {
    function Hamster(name, age) {
        this.name = name;
        this.age = age;
    }
    return Hamster;
}());
function printName(product) {
    console.log(product.name);
}
// create a hammer
var myHammer = new Hammer('Sledgehammer', 20);
printName(myHammer);
// create a computer
var myComputer = new Computer('MacBook Pro', 'Yosemite');
printName(myComputer);
// create a hamster
var myHamster = new Hamster('Hammy', 2);
printName(myHamster);
//# sourceMappingURL=interfaces.js.map