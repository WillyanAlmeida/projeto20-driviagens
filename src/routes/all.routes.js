import { Router } from "express";
import allControllers from "../controllers/all.controller.js";


const allRouter = Router();

allRouter.post("/passengers", allControllers.postPassengers );
allRouter.post("/cities", allControllers.postCities);

allRouter.post("/flights", allControllers.postFlights );
allRouter.post("/travels", allControllers.postTravels );
allRouter.get("/flights", allControllers.getFlights );
allRouter.get("/passengers/travels", allControllers.getPassengersTravels );

export default allRouter;

