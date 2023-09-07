import allRepository from "../repositories/all.repository.js";

 async function postPassengers(firstName, lastName){
  
  return allRepository.postPassengers(firstName, lastName)
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

const allCompaniService = {
    postPassengers,
    postCities,
    postFlights,
    postTravels,
    getFlights,
    getPassengersTravels
  }
  
  export default allCompaniService