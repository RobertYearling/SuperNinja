class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Welcome to the ring ${this.name}`);
    }

    showStats(){
        console.log(`Ninja ${this.name}, has a health ${this.health}, coming at you with speed of ${this.speed}, with a strength of ${this.strength}`);
    }

    drinkSake(){
        console.log(`Your Ninja ${this.name} has gained a health of +10`);
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
    }

    speakWisdom(){
        console.log(`Your Ninja ${this.name} has started the game with some wisdom ${this.wisdom} to be exact.`);
    }

    drinkSake(){
        console.log(`Your Ninja ${this.name} has a health of 200`);
        this.health += 10;
    }

    showStats(){
        console.log(`Ninja ${this.name}, has a health ${this.health}, coming at you with speed of ${this.speed}, with a strength of ${this.strength}`);
    }
}
const ninja1 = new Ninja("Tom", 50);
const ninja2 = new Ninja("Webster", 30);
const sensei1 = new Sensei("Master George");

ninja1.sayName();
ninja2.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();
ninja2.drinkSake();
ninja2.drinkSake();
ninja2.drinkSake();
ninja2.drinkSake();
ninja2.drinkSake();
ninja1.showStats();
ninja2.showStats();

sensei1.speakWisdom();
sensei1.drinkSake();
sensei1.showStats();