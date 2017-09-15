(function(){
    
        /*
        * Interfaces
        */
    
        //interface describing what attributes and methods a traveler should have
        interface ITraveler {
            food: number;
            name: string;
            isHealthy: boolean;
    
            //when implemented, There should be 50% chance to increase the traveler's food by 100.
            //return the travelers new food value
            hunt(): number;

            //when implemented, we should check to see if the traveler has a food supply of 20
            //If they do then we should consume 20 of the available food supply
            //If they don't have 20 food then we should change isHealthy to false
            //return the travelers health after attempting to eat
            eat(): boolean;
    
    
        }
    
        //interface describing attributes and methods a wagon should have
        interface IWagon{
            capacity: number;
            passengerArray: Traveler[];
    
            //when implemented, we should add the traveler to the wagon if the capacity permits
            //this function should return the string "added" on success and "sorry" on failure
            addPassenger(traveler: Traveler): string;
    
            //this should return true if there is at least one unhealthy person in the wagon
            //if everyone is healthy false should be returned
            isQuarantined(): boolean;
    
            //Return the total amount of food among all passengers of the wagon.
            getFood(): number;
    
        }
    
        /*
        * Classes
        */
    
        //The traveler class that implements the ITraveler interface
        //This is currently in violation of its contract with the interface. 
        //Create the code required to satisfy the contract with the interface
        class Traveler implements ITraveler {
            food: number;
            name: string;
            isHealthy: boolean;
            
            hunt() {
                if (Math.random() * 100 > 50) {
                   this.food = this.food + 100;
                   return this.food;
                }
                else {
                   this.food = this.food;
                   return this.food;
                }
            }

            eat() {
                if (this.food >= 20) {
                    this.food = this.food - 20;
                    return this.isHealthy
                }
                else {
                    this.isHealthy = false;
                    this.food = 0;
                    return this.isHealthy
                }
            }

            constructor(food: number, name: string, isHealthy: boolean) {
                this.food = food;
                this.name = name;
                this.isHealthy = isHealthy
            }

        }
    
        //The wagon class that implements the IWagon interface
        //This is currently in violation of its contract with the interface.
        //Create the code required to satisfy the contract with the interface 
        class Wagon implements IWagon {
            capacity: number;
            passengerArray: Traveler[] = [];

            addPassenger(traveler: Traveler) {

                if (this.capacity > this.passengerArray.length) {
                    this.passengerArray.push(traveler);
                    return "success";
                }
                else {
                    return "false";
                }
            }

            isQuarantined() {
                for (let i = 0; i < this.passengerArray.length; i++) {
                    if (this.passengerArray[i].isHealthy === false) {
                        return true;
                    }
                }
                return false;
            }

            getFood() {
                let ofTheJedi: number = 0

                for (let i = 0; i < this.passengerArray.length; i++){
                    ofTheJedi = ofTheJedi + this.passengerArray[i].food;
                }
                return ofTheJedi;
            }

            constructor(capacity: number) {
                this.capacity = capacity;
            }
        }
    

        

    

      

        
        //Play the game
        // Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)

        console.log("*------------------------------------------------*       *")
        console.log("*  *  ====== =======  =======  =======  *      *   *        *")  
        console.log("*     ||   *    ||     ||   ||  ||   ||    *         *")        
        console.log("* *    ======   ||  *  ||===||  ||===|                 *   *")
        console.log("*    *     ||   ||     ||   ||  ||   \\     *       *   *")
        console.log("*      ======   || *   ==   ==  ==    \\ *      *    *")
        console.log("*------------------------------------------------*    *")
        console.log("*------------------------------------------------*      *")
        console.log("* *   ====== ======   =======   ====== ||  *   *   *     *      *")  
        console.log("*       ||   ||   ||   ||   ||  * ||   ||             *   *")        
        console.log("*     * ||   ||===|  * ||===||    ||   ||      *   *")
        console.log("*       ||   ||   \\    ||   ||    ||   || *          *    *")
        console.log("*  *    ||   == *  \\   ==   ==  ====== ======  *       *      *")
        console.log("*------------------------------------------------*         *")
        let traveler1 = new Traveler(Math.random() * 100, "Obiwan", true);
        let traveler2 = new Traveler(Math.random() * 100, "Luke", true);
        let traveler3 = new Traveler(Math.random() * 100, "Chewy", true);
        let traveler4 = new Traveler(Math.random() * 100, "Han Solo", true);
        let traveler5 = new Traveler(Math.random() * 100, "R2D2", true);

        console.log("5 travelers have banded together for a journey: " + traveler1.name + "," + traveler2.name + "," + traveler3.name + "," + traveler4.name + ", and " + traveler5.name);
        console.log("*--------------------*")
        //Create wagon with an empty passenger list and a capacity of 4.
        let ship1 = new Wagon(4);
        console.log("The Falcon was won in a bet by the travelers with a capacity of " + ship1.capacity);
        console.log("*--------------------*")
        // Make 3 of 5 the travelers eat by calling their eat methods
        console.log(traveler1.name + " ate at the space bar and his health = " + traveler1.eat());
        console.log(traveler2.name + " ate at the space bar and his health = " + traveler2.eat());
        console.log(traveler3.name + " ate at the space bar and his health = " + traveler3.eat());
        console.log("*--------------------*")
        // Make the remaining 2 travelers hunt
        console.log(traveler4.name + " went space hunting and returned with " + traveler4.hunt() + " food!");
        console.log(traveler5.name + " went space hunting and returned with " + traveler5.hunt() + " food!");
        console.log("*--------------------*")

        // Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
        // of attempting to be being added to the wagon using the wagons addPassenger method.
        let travelerArray = [traveler1, traveler2, traveler3, traveler4, traveler5];
        for (let i = 0; i < travelerArray.length; i++){
            if (Math.random() * 100 >= 50) {
                ship1.addPassenger(travelerArray[i])   
            }
            else {
                console.log(travelerArray[i].name + " was not fast enough to be added to the ship before take off.")
            }
        }
        for(let i=0; i < ship1.passengerArray.length; i++){
            console.log(ship1.passengerArray[i].name + " made it in the Falcon.")
        }

        console.log("Your the Falcon has " + ship1.passengerArray.length + " crew member/s.")
        console.log("*--------------------*")
        // Run the isQuarantined method for the wagon
        console.log("Is the ship space quarantied? " + ship1.isQuarantined());
        console.log("*--------------------*")

        // Run the getFood method for the wagon
        console.log("The Falcon\'s total food supply is: " + ship1.getFood());
        console.log("*========================================================*")
        // the return values of all the methods should be displayed in the console using console.log()
        // the console.log statements should not live inside any methods on the objects 
    
    
    })();
    
    