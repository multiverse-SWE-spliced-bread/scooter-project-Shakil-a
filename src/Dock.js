const scooter = require ('./Scooter')

class Dock {
    static all = []

    constructor(location, capacity) {
        this.scooters = []
        this.location = location
        this.capacity = capacity
        docks.all.push(this)
    }

    createScooter () {
        if (this.scooters.length === this.capacity) throw new Error ('Dock is full')
        const scooter = new Scooter()
        this.scooters.push(scooter)
    }
}

module.exports = Dock;