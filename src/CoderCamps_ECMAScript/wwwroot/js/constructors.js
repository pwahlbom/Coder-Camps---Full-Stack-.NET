function cstPerson(strfirstname, strlastname) {
    this.firstname = strfirstname;
    this.lastname = strlastname;
    this.fullname = function () {
        return this.firstname + " " + this.lastname;
    };
};

var objPerson1 = new cstPerson("steve", "jobs");
console.log(objPerson1.fullname);