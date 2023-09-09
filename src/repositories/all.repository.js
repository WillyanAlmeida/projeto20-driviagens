
import { db } from "../database/database.connection.js";

async function postPassengers(firstName, lastName) {
  await db.query(
    `INSERT INTO passengers (firstName, lastName) VALUES ($1, $2);`,
    [firstName, lastName]
  )
}

async function consultPassenger(target) {
  const passenger = await db.query(
    `SELECT * FROM passengers WHERE id=$1;`,
    [target]
  )
  return passenger.rows[0]
}


async function consultCities(target) {

  if (typeof (target) === "string") {
    const cities = await db.query(
      `SELECT * FROM cities WHERE name=$1;`,
      [target]
    )
    return cities.rows[0]
  }

  if (typeof (target) === "number") {
    const cities = await db.query(
      `SELECT * FROM cities WHERE id=$1;`,
      [target]
    )
    return cities.rows[0]
  }
}

async function postCities(name) {
  await db.query(
    `INSERT INTO cities (name) VALUES ($1);`,
    [name]
  )

}

async function consultFlight(target) {
  const flight = await db.query(
    `SELECT * FROM flights WHERE id=$1;`,
    [target]
  )
  return flight.rows[0]
}

async function postFlights(origin, destination, date) {
  await db.query(
    `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
    [origin, destination, date]
  )
}

async function postTravels(passengerId, flightId) {
  await db.query(
    `INSERT INTO travels (passengerId, flightId) VALUES ($1, $2);`,
    [passengerId, flightId]
  )
}

async function getFlights() {

}

async function getPassengersTravels() {

}

const allRepository = {
  consultPassenger,
  postPassengers,
  consultCities,
  postCities,
  consultFlight,
  postFlights,
  postTravels,
  getFlights,
  getPassengersTravels
}

export default allRepository