const Dock = require("./Dock")
const Scooter = require("./Scooter")

  class User {
    //ive just made the requirements for the user class, this may change at one point
    constructor(userName, password, age) {
      this.userName = userName 
      this.password = password
      this.age = age
       this.loggedIn = false
       this.scooter = null 
    }
    rentScooter(dock) {
      if (!this.loggedIn) throw new Error ('must be signed in!')
     this.scooter = dock.scooters.pop()
    }

    returnScooter (dock) {
      dock.scooters.push(this.scooter)
      if (this.scooter) {
        dock.scooter.push(this.scooter)
        this.scooter = null
      }

    }
  }

  

  
  module.exports = User