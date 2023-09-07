import joi from "joi"

export const passengersschema = joi.object({
    firstName: joi.string().min(2).max(100).required(),
    lastName: joi.string().min(2).max(100).required()
})

export const flightsschema = joi.object({
    origin: joi.number().integer().min(1).required(),
    destination: joi.number().integer().min(1).required(),
    date: joi.date().required()
})

export const citiesschema = joi.object({
    name: joi.string().min(2).max(50).required()
})

export const travelsschema = joi.object({
    passengerId: joi.number().integer().min(1).required(),
    flightId: joi.number().integer().min(1).required()
})