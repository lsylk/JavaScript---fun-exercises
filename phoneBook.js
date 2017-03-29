//JS phoneBook with prototypes


/* ES6 style.
 function PhoneBook(contacts = []) {
    this.contacts = contacts;
} */

// creating a method under class differs to the one created using a prototype (
// it's shared in the same prototype, more efficient in terms of memory usage.) 
// because both are saved in diferent parts of the memory. 

function PhoneBook(contacts) {
    this.contacts = contacts || [];
}

var karl = {
    firstName: "Karl",
    lastName: "Smith",
    phoneNumber: "(650) 999-7777",
    email: "karl.smith@example.com"
};

var jane = {
    firstName: "Jane",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "jane.johnson@example.com"
};

var contacts = [karl, jane];

function newContact (firstName, lastName, email, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
}

newContact.prototype.printPerson = function() {
    console.log(this.firstName + " " + this.lastName);
};

PhoneBook.prototype.list = function() {
    var contactsLength = this.contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        this.contacts[i].printPerson();
    }
};

/*Create a search function
then call it passing "Jane"*/

//PhoneBook's methods: 
PhoneBook.prototype.search = function(lastName){
    var contactsLength = this.contacts.length;
    for (i = 0; i <= contactsLength - 1; i++){
        if (this.contacts[i].lastName === lastName) {
            printPerson(this.contacts[i]);
        }
    }
};

//ES5 use ; because it is the end of the var statement. 
// don't need the ; after the function statement. 
/* var deleteContact = function () {

};

function deleteContact (){

} */

//search('Jane');
//.push(blah) is the push method for list in JS. 

PhoneBook.prototype.add = function(firstName, lastName, phoneNumber, email){
    var newFriend = new newContact(firstName, lastName, phoneNumber, email);
    this.contacts.push(newFriend);
};

add('Anne', 'Hensley', '(510) 888-9999', 'anne.hensleyh@example.com');

list();
//console.log(contacts[contactsLength]);
