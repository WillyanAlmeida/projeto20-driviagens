import { db } from "../database/database.connection.js";

 async function postPassengers(firstName, lastName){
    await db.query(
        `INSERT INTO passengers (firstName, lastName) VALUES ($1, $2);`,
        [firstName, lastName]
      )
}

 async function postCities(){
   
}

 async function postFlights(){
   
}

 async function postTravels(){
   
}

 async function getFlights(){
   
}

 async function getPassengersTravels(){
   
}

const allRepository = {
    postPassengers,
    postCities,
    postFlights,
    postTravels,
    getFlights,
    getPassengersTravels
  }
  
  export default allRepository