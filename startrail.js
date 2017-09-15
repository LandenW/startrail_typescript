(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            if (Math.random() * 100 > 50) {
                this.food = this.food + 100;
                return this.food;
            }
            else {
                this.food = this.food;
                return this.food;
            }
        };
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food = this.food - 20;
                return this.isHealthy;
            }
            else {
                this.isHealthy = false;
                this.food = 0;
                return this.isHealthy;
            }
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.capacity > this.passengerArray.length) {
                this.passengerArray.push(traveler);
                return "success";
            }
            else {
                return "false";
            }
        };
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy === false) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.getFood = function () {
            var ofTheJedi = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                ofTheJedi = ofTheJedi + this.passengerArray[i].food;
            }
            return ofTheJedi;
        };
        return Wagon;
    }());
    //Play the game
    // Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    console.log("*------------------------------------------------*       *");
    console.log("*  *  ====== =======  =======  =======  *      *   *        *");
    console.log("*     ||   *    ||     ||   ||  ||   ||    *         *");
    console.log("* *    ======   ||  *  ||===||  ||===|                 *   *");
    console.log("*    *     ||   ||     ||   ||  ||   \\     *       *   *");
    console.log("*      ======   || *   ==   ==  ==    \\ *      *    *");
    console.log("*------------------------------------------------*    *");
    console.log("*------------------------------------------------*      *");
    console.log("* *   ====== ======   =======   ====== ||  *   *   *     *      *");
    console.log("*       ||   ||   ||   ||   ||  * ||   ||             *   *");
    console.log("*     * ||   ||===|  * ||===||    ||   ||      *   *");
    console.log("*       ||   ||   \\    ||   ||    ||   || *          *    *");
    console.log("*  *    ||   == *  \\   ==   ==  ====== ======  *       *      *");
    console.log("*------------------------------------------------*         *");
    var traveler1 = new Traveler(Math.random() * 100, "Obiwan", true);
    var traveler2 = new Traveler(Math.random() * 100, "Luke", true);
    var traveler3 = new Traveler(Math.random() * 100, "Chewy", true);
    var traveler4 = new Traveler(Math.random() * 100, "Han Solo", true);
    var traveler5 = new Traveler(Math.random() * 100, "R2D2", true);
    console.log("5 travelers have banded together for a journey: " + traveler1.name + "," + traveler2.name + "," + traveler3.name + "," + traveler4.name + ", and " + traveler5.name);
    console.log("*--------------------*");
    //Create wagon with an empty passenger list and a capacity of 4.
    var ship1 = new Wagon(4);
    console.log("The Falcon was won in a bet by the travelers with a capacity of " + ship1.capacity);
    console.log("*--------------------*");
    // Make 3 of 5 the travelers eat by calling their eat methods
    console.log(traveler1.name + " ate at the space bar and his health = " + traveler1.eat());
    console.log(traveler2.name + " ate at the space bar and his health = " + traveler2.eat());
    console.log(traveler3.name + " ate at the space bar and his health = " + traveler3.eat());
    console.log("*--------------------*");
    // Make the remaining 2 travelers hunt
    console.log(traveler4.name + " went space hunting and returned with " + traveler4.hunt() + " food!");
    console.log(traveler5.name + " went space hunting and returned with " + traveler5.hunt() + " food!");
    console.log("*--------------------*");
    // Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // of attempting to be being added to the wagon using the wagons addPassenger method.
    var travelerArray = [traveler1, traveler2, traveler3, traveler4, traveler5];
    for (var i = 0; i < travelerArray.length; i++) {
        if (Math.random() * 100 >= 50) {
            ship1.addPassenger(travelerArray[i]);
        }
        else {
            console.log(travelerArray[i].name + " was not fast enough to be added to the ship before take off.");
        }
    }
    for (var i = 0; i < ship1.passengerArray.length; i++) {
        console.log(ship1.passengerArray[i].name + " made it in the Falcon.");
    }
    console.log("Your the Falcon has " + ship1.passengerArray.length + " crew member/s.");
    console.log("*--------------------*");
    // Run the isQuarantined method for the wagon
    console.log("Is the ship space quarantied? " + ship1.isQuarantined());
    console.log("*--------------------*");
    // Run the getFood method for the wagon
    console.log("The Falcon\'s total food supply is: " + ship1.getFood());
    console.log("*========================================================*");
    // the return values of all the methods should be displayed in the console using console.log()
    // the console.log statements should not live inside any methods on the objects 
})();
