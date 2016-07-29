console.log("hellooooo world!");

function addNumbers(num1: number, num2: number) {
    return num1 + num2;
};

let multiplyNumbers = function (num1: number, num2: number) {
    return num1 * num2;
};

let sum = addNumbers(3, 1);
console.log(sum);

let product = multiplyNumbers(1, 5);
console.log(product);

function doSomething() {
    return "Do Something!";
}
var result = doSomething();

function addNumbers2() {
    var nbrAdded = 1 + 2;
    return nbrAdded;
}

let jedi = ['Luke Skywalker', 'Darth Vader', 'Yoda', 'Darth Maul', 'Mace Wendu', 'Emperor Palpatine'];

let goodGuys1 = jedi.filter((item, idx, arr) => idx % 2 == 0);

//let goodGuys2 = jedi.filter((currentValue, index, arr) function() { return index % 2 == 0 });

