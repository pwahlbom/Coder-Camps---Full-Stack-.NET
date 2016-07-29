console.log("hellooooo world!");
function addNumbers(num1, num2) {
    return num1 + num2;
}
;
var multiplyNumbers = function (num1, num2) {
    return num1 * num2;
};
var sum = addNumbers(3, 1);
console.log(sum);
var product = multiplyNumbers(1, 5);
console.log(product);
function doSomething() {
    return "Do Something!";
}
var result = doSomething();
function addNumbers2() {
    var nbrAdded = 1 + 2;
    return nbrAdded;
}
var jedi = ['Luke Skywalker', 'Darth Vader', 'Yoda', 'Darth Maul', 'Mace Wendu', 'Emperor Palpatine'];
var goodGuys1 = jedi.filter(function (item, idx, arr) { return idx % 2 == 0; });
//let goodGuys2 = jedi.filter((currentValue, index, arr) function() { return index % 2 == 0 });
//# sourceMappingURL=app.js.map