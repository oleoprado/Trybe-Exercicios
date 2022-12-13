const conn = require('./connection');

//prepared statement
const insert = (person) => conn.execute(
  `INSERT INTO people
  (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
  [person.firstName, person.lastName, person.email, person.phone],
);

module.exports = {
  insert,
}