// cashRegister is "singleton Object". There is one
// and only one cashRegister so it's okay to created 
// methods inside the object (insted of using the prototype). 
// cashRegister is not a class it is class like. It's best to 
// it an OBJECT.

// class is reserved for constructors, and can create multiple
// instances. classes must start with capital letters. 

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sam",5);
var bob = new StaffMember("Joe",10);

// Create yourself again as 'me' with a staff discount of 20%

var me = new StaffMember('Jack', 20);

function CashRegister(){
    this.total = 0;
    this.lastTransactionAmount = 0;
}

CashRegister.prototype.add = function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
};

CashRegister.prototype.scan = function(item,quantity){
    switch (item){
    case "eggs": this.add(0.98 * quantity); break;
    case "milk": this.add(1.23 * quantity); break;
    case "magazine": this.add(4.99 * quantity); break;
    case "chocolate": this.add(0.45 * quantity); break;
    }
    return true;
};

CashRegister.prototype.voidLastTransaction = function(){
    this.total -= this.lastTransactionAmount;
    this.lastTransactionAmount = 0;
};

CashRegister.prototype.applyStaffDiscount= function(employee){
    this.total -= this.total * (employee.discountPercent / 100);
};

//creating an instance of Class CashRegister.
var cashRegister = new CashRegister();

/* ---------------------------------------------------
this object works in the same way as the class 
    CashRegister.

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    
    applyStaffDiscount: function(employee){
        this.total -= this.total * (employee.discountPercent / 100);
    }
}; */

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);

// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount

cashRegister.applyStaffDiscount(me);


// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));