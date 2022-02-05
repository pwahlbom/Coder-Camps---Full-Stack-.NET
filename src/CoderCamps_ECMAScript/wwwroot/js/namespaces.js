var MathUtility;
(function (MathUtility) {
    var Calculator = (function () {
        function Calculator() {
        }
        Calculator.prototype.addition = function () { };
        ;
        Calculator.prototype.substraction = function () { };
        ;
        Calculator.prototype.multiplication = function () { };
        ;
        Calculator.prototype.division = function () { };
        ;
        return Calculator;
    }());
    MathUtility.Calculator = Calculator;
    ;
})(MathUtility || (MathUtility = {}));
;
var MyApp;
(function (MyApp) {
    var myCalculator = new MathUtility.Calculator();
    myCalculator.addition;
})(MyApp || (MyApp = {}));
;
//# sourceMappingURL=namespaces.js.map