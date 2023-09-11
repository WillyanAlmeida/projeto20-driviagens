
import { db } from "../database/database.connection.js";
import { internalServerError } from "../errors/internalServer.js";

async function postPassengers(firstName, lastName) {
  await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
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
    `INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`,
    [passengerId, flightId]
  )
}

async function getFlights(req, res) {

  const { origin, destination, smaller_date, bigger_date } = req.query;

  let query = `
  SELECT f.id, c1.name AS origin, c2.name AS destination, TO_CHAR(f.date, 'DD-MM-YYYY') AS date
  FROM flights f
  INNER JOIN cities c1 ON f.origin = c1.id
  INNER JOIN cities c2 ON f.destination = c2.id
`;

  const queryParams = []

  if (origin) {
    query += 'WHERE c1.name = $1 '
    queryParams.push(origin)
  }

  if (destination) {
    if (origin) {
      query += 'AND '
    } else {
      query += 'WHERE '
    }
    query += 'c2.name = $2 '
    queryParams.push(destination)
  }

  if (smaller_date && bigger_date) {
    if (origin || destination) {
      query += 'AND '
    } else {
      query += 'WHERE '
    }
    query += 'f.date BETWEEN $3 AND $4 '
    queryParams.push(smaller_date, bigger_date)
  }

  query += 'ORDER BY f.date'

  const result = await db.query(query, queryParams)

  return result.rows

}

async function getPassengersTravels(req, res) {

  const { name } = req.query;
  const limit = 10;

  let query = `
      SELECT p."firstName" || ' ' || p."lastName" AS passenger, COUNT(t.id) AS travels
      FROM passengers p
      LEFT JOIN travels t ON p.id = t."passengerId"
    `;

  const queryParams = [];

  if (name) {
    query += 'WHERE p."firstName" || \' \' || p."lastName" ILIKE $1 ';
    queryParams.push(`%${name}%`);
  }

  query += `GROUP BY passenger ORDER BY travels DESC LIMIT $${queryParams.length + 1}`;
  queryParams.push(limit);


  const result = await db.query(query, queryParams);

  if (result.rows.length > limit) throw internalServerError('Too many results')

  return result.rows;

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