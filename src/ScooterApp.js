const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  constructor (scooterSessions){
    this.scooterSessions = scooterSessions
    this.users = []
  }
register(userName, password, age){
  for (let i = 0; i > this.users.length; i++){
    if ( userName == this.users[i] ){
      return "this username is already taken"
    }
  }
const user = new User(userName, password, age)
this.users.push(user)
return user

}


  
       
}
const app = new ScooterApp()
const shakil = app.register('shakil', 'something', 15)
console.log(app)
console.log(shakil)
 
 

module.exports = ScooterApp;
