// create a Sim Game.
// Sim class ---> props : name, age, hunger lv, job, status, bodyTemp lv, recreation lv.
// methods that will change bodyTemp, hunger and recreation lv. 
// house class --> props : famMembers, size, location, owner, price.
// methods that will change famMembers, size, owner, price. 

function Sim(name, age, job, status, hunger, bodyTemp, recreation) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.status = status;
    this.hunger = hunger; // min<--1 - 10-->max level of hunger (ideal: 1-3 level of hunger) 
    this.bodyTemp = bodyTemp; // cold<--1 - 10-->hot (ideal: 4-6 level of bodyTemp)
    this.recreation = recreation;// min<--1 - 10-->max (ideal: >8 level of recreation)
}

Sim.prototype.eatFood = function(){
    if (this.hunger > 3 || this.hunger < 6) {
        this.hunger -= 3;
        console.log('I\'m going to eat an apple');
    } else {
        this.hunger += 3;
        console.log('I\'m starving! Let\'s time to eat a huge meal!');
    }
};

Sim.prototype.turnOnAirConditioning = function(){
    if (this.bodyTemp <= 3 ){
        this.bodyTemp += 2;
        console.log("It\'s cold, I\'m going to turn on the heater! ");
    } else if (this.bodyTemp >= 7) {
        this.bodyTemp -= 3;
        console.log("It\'s hot, I\'m going to turn on the AC! ");
    } else {
        this.bodyTemp = 5;
        console.log("The weather is nice today! Let\'s go for a walk!");
    }
};

Sim.prototype.exercising = function(){
    if (this.recreation < 8) {
        this.recreation += 3;
        console.log('Time to go for a run at Central Park!');
    } else {
        this.recreation -= 4;
        console.log('Time to stay home and relax in my cozy sofa...');
    }
};

// Sim: Sam Smith
//==================================================
/*var sam = new Sim('Sam Smith', 28, 'single', 'lawyer', 5, 2, 5);
sam.hunger; // 5
sam.eatFood(); // I'm going to eat an apple
sam.hunger // 2

sam.bodyTemp; // 2 
sam.turnOnAirConditioning(); //It's cold, I'm going to turn on the heater!
sam.bodyTemp; // 4

sam.recreation; // 4
sam.exercising(); //Time to go for a run at Central Park!
sam.recreation; // 8
*/

function House(famMembers, size, location, price, owner) {
    this.famMembers = famMembers;
    this.size = size;
    this.location = location;
    this.price = price;
    this.owner = owner;
}

House.prototype.payRent = function() {

};




