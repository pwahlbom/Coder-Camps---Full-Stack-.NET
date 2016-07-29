var fieldsVSproperties;
(function (fieldsVSproperties) {
    var customer = (function () {
        function customer(firstName, lastName) {
            this._firstName = firstName;
            this._lastName = lastName;
        }
        ;
        Object.defineProperty(customer.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                if (value === "") {
                    throw new Error("No no no!");
                }
                ;
                this._firstName = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        Object.defineProperty(customer.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            set: function (value) {
                if (value === "") {
                    throw new Error("No no no!");
                }
                ;
                this._lastName = value;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ;
        return customer;
    }());
    ;
    var myCustomer = new customer("", "Wahlbom");
    myCustomer.firstName;
    console.log("Test");
})(fieldsVSproperties || (fieldsVSproperties = {}));
//# sourceMappingURL=fieldsVSproperties.js.map