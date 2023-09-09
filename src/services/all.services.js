import allRepository from "../repositories/all.repository.js";
import { conflictError } from "../errors/conflict.js"
import { notFoundError } from "../errors/notFound.js";

 async function postPassengers(firstName, lastName){
  
  return allRepository.postPassengers(firstName, lastName)
}

 async function postCities(name){
  const existingCities = await allRepository.consultCities(name)
  
  if (existingCities) throw conflictError("Cidade")

  return allRepository.postCities(name)
   
}

 async function postFlights(origin, destination, date){
  const existingOrigin = await allRepository.consultCities(origin)
  const existingDestination = await allRepository.consultCities(destination)
  if (!existingOrigin || !existingDestination) throw notFoundError("Cidade origem ou destino")
  return allRepository.postFlights(origin, destination, date)
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