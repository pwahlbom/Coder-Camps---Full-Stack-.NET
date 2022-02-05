//let a = 1;
//let b = 2;
//function doSomething() {
//    let a = 3;
//    console.log(a + b);
//}
//doSomething();
function createFunction() {
    var a = 1;
    return function () {
        a++;
        console.log(a);
    };
}
var doSomething = createFunction();
doSomething();
//# sourceMappingURL=UnderstandingClosure.js.map