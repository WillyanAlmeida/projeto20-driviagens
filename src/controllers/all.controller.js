import allCompaniService from "../services/all.services.js";
import httpStatus from "http-status"


async function postPassengers(req, res){
  const { firstName, lastName } = req.body  

  await allCompaniService.postPassengers(firstName, lastName)
  res.sendStatus(httpStatus.CREATED)
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

const allControllers = {
  postPassengers,
  postCities,
  postFlights,
  postTravels,
  getFlights,
  getPassengersTravels
}

export default allControllers