import { Router } from "express";
import allControllers from "../controllers/all.controller.js";
import { citiesschema, flightsschema, passengersschema } from "../schemas/all.schemas.js";
import validateSchema from "../middlewares/validateSchema.js";


const allRouter = Router();

allRouter.post("/passengers", validateSchema(passengersschema), allControllers.postPassengers );
allRouter.post("/cities", validateSchema(citiesschema), allControllers.postCities);

allRouter.post("/flights", validateSchema(flightsschema), allControllers.postFlights );
allRouter.post("/travels", allControllers.postTravels );
allRouter.get("/flights", allControllers.getFlights );
allRouter.get("/passengers/travels", allControllers.getPassengersTravels );

export default allRouter;

