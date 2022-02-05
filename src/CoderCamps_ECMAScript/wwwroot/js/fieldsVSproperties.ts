namespace fieldsVSproperties {

    var dogName = "Havoc";

    class customer {
        private _firstName: string;
        private _lastName: string;

        constructor(firstName: string, lastName: string) {
            this._firstName = firstName;
            this._lastName = lastName;
         };

        get firstName() {
            return this._firstName;
        };

        set firstName(value) {
            if (value === "") {
                throw new Error("No no no!");
            };

            this._firstName = value;
        };

        get lastName() {
            return this._lastName;
        };

        set lastName(value) {
            if (value === "") {
                throw new Error("No no no!");
            };

            this._lastName = value;
        };

    };

    let myCustomer = new customer("", "Wahlbom");
    myCustomer.firstName
    console.log("Test");
}