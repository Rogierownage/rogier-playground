class Holiday {
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;
    }

    info() {
        return this.destination + ' | ' + this.days;
    }

    setDestination(destination) {
        this.destination = destination;
    }

    setDays(days) {
        this.days = days;
    }
}

let trip = new Holiday('Nepal', 50);

console.log(trip.info());

trip.setDestination('France');
trip.setDays(30);

console.log(trip.info());

class Expedition extends Holiday {
    constructor(destination, days, gear){
        super(destination, days);

        this.gear = gear;
    }

    setGear(gear) {
        this.gear = gear;
    }

    info() {
        return super.info() + ' | ' + this.gear;
    }
}

adventure = new Expedition('World trip', 100, 'Water');
adventure.setDays(60);

console.log(adventure.info());

adventure.setGear('Shoes');

console.log(adventure.info());