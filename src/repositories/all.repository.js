import { db } from "../database/database.connection.js";

 async function postPassengers(firstName, lastName){
    await db.query(
        `INSERT INTO passengers (firstName, lastName) VALUES ($1, $2);`,
        [firstName, lastName]
      )
}

async function consultCities(target) {
    const cities = await db.query(
      `SELECT * FROM cities WHERE name=$1;`,
      [target]
    )
    return cities.rows[0]
  }

 async function postCities(name){
    await db.query(
        `INSERT INTO cities (name) VALUES ($1);`,
        [name]
      )
   
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
    consultCities,
    postCities,
    postFlights,
    postTravels,
    getFlights,
    getPassengersTravels
  }
  
  export default allRepository