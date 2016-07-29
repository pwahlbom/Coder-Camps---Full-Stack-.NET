let customer = {
    strFirstname: "Philip",
    strLastName: "Wahlbom",
    strFullName: () => {
        return this.strFirstName + " " + this.strLastName;
    }
};

let customer2 = {
    strFirstname: "Philip",
    strLastName: "Wahlbom",
    strFullName: function() {
        return this.strFirstName + " " + this.strLastName;
    }
};

let customer3 = {
    strFirstname: "Philip",
    strLastName: "Wahlbom",
    strFullName() {
        return this.strFirstName + " " + this.strLastName;
    }
};


var employee1 = {
    firstName: "",
    lastName: "",
    getFullName: function () {
        return this.first + " " + this.last;
    }
};

var product1 = {
    price: 1,
    claculateTax: function () {
        return this.price * 0.08
    },
};

var shoppingCart = [
    { name: 'Eggs', price: 5.00 },
    { name: 'Milk', price: 3.25 },
    { name: 'Bread', price: 2.25 },
    { name: 'Ham', price: 4.75 },
    { name: 'Cheese', price: .75 }
];

shoppingCart.forEach(function (current, indx, arry) {
    console.log(current.name);
});

var obj = {
    showResults: function (value, index) {
        // Call calcSquare by using the this value.
        var squared = this.calcSquare(value);

        document.write("value: " + value);
        document.write(" index: " + index);
        document.write(" squared: " + squared);
        document.write("<br />");
    },
    calcSquare: function (x) { return x * x }
};

// Define an array.
var numbers = [5, 6];

// Call the showResults callback function for each array element.
// The obj is the this value within the 
// callback function.
numbers.forEach(obj.showResults.bind(obj));


var reverse1 = (str: string) => str.split('').reverse().join('');
var reverse2 = function (str: string) { return str.split('').reverse().join(''); }

let myString = "What is the airspeed velocity of an unladen swallow?";

console.log(`${myString} reversed is: ${reverse1(myString)}`);
console.log(`${myString} reversed is: ${reverse2(myString)}`);