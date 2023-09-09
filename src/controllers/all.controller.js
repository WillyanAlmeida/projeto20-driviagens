import dayjs from "dayjs";
import allCompaniService from "../services/all.services.js";
import httpStatus from "http-status"
import { conflictError } from "../errors/conflict.js";


async function postPassengers(req, res){
  const { firstName, lastName } = req.body  

  await allCompaniService.postPassengers(firstName, lastName)
  res.sendStatus(httpStatus.CREATED)
}

async function postCities(req, res){
  const { name } = req.body  

  await allCompaniService.postCities(name)
  res.sendStatus(httpStatus.CREATED)
}

 async function postFlights(req, res){
  const { origin, destination, date } = req.body  

  if(origin === destination) throw conflictError("Destino e origem iguais")
  await allCompaniService.postFlights(origin, destination, date)
  res.sendStatus(httpStatus.CREATED)
}

 async function postTravels(req, res){
  const { passengerId, flightId } = req.body
  await allCompaniService.postTravels( passengerId, flightId)
  res.sendStatus(httpStatus.CREATED)
}

 async function getFlights(){
   
}

 async function getPassengersTravels(){
   
}

const allControllers = {
  postPassengers,
  postCities,
  postFlights,
  postTravels,
  getFlights,
  getPassengersTravels
}

export default allControllers