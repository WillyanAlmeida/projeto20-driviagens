import allRepository from "../repositories/all.repository.js";
import { conflictError } from "../errors/conflict.js"
import { notFoundError } from "../errors/notFound.js";
import { dateSchema } from "../schemas/all.schemas.js";

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

 async function postTravels(passengerId, flightId){
  const existingPassenger = await allRepository.consultPassenger(passengerId)
  const existingFlight = await allRepository.consultFlight(flightId)
  if (!existingPassenger || !existingFlight) throw notFoundError("passageiro ou voo")
  return allRepository.postTravels(passengerId, flightId)
}

 async function getFlights(req, res){
  const { origin, destination, smaller_date, bigger_date } = req.query;
  const { error: smallerDateError } = dateSchema.validate(smaller_date);
  const { error: biggerDateError } = dateSchema.validate(bigger_date);

  if (smallerDateError || biggerDateError) {
    return res.status(422).json({ error: 'Formato de data inválido' });
  }

  if ((smaller_date && !bigger_date) || (!smaller_date && bigger_date)) {
    return res.status(422).json({ error: 'Ambos os parâmetros smaller-date e bigger-date devem ser fornecidos juntos' });
  }

  if (smaller_date > bigger_date) {
    return res.status(400).json({ error: 'A data menor não pode ser maior que a data maior' });
  }

  const flights = await allRepository.getFlights(req, res)
   return flights
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