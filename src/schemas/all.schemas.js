import JoiBase from "@hapi/joi";
    import JoiDate from "@hapi/joi-date";

    const joi = JoiBase.extend(JoiDate);

export const passengersschema = joi.object({
    firstName: joi.string().min(2).max(100).required(),
    lastName: joi.string().min(2).max(100).required()
})

export const flightsschema = joi.object({
    origin: joi.number().integer().min(1).required(),
    destination: joi.number().integer().min(1).required(),//.not(joi.ref('origin')).messages({ 'any.invalid': 'Origin and destination must be different' }),
    date: joi.date().format('DD-MM-YYYY').greater('now').required().messages({ 'date.format': 'Date must be in the format DD-MM-YYYY', 'date.greater': 'Date must be greater than today' })
})

export const citiesschema = joi.object({
    name: joi.string().min(2).max(50).required()
})

export const travelsschema = joi.object({
    passengerId: joi.number().integer().min(1).required(),
    flightId: joi.number().integer().min(1).required()
})

export  const dateSchema = joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date must be in the format DD-MM-YYYY'})