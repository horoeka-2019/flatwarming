const connection = require('../connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  createUser,
  userExists,
  getUserByName
}

function createUser (user, db = connection) {
  return userExists(user.username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      console.log('here 5')
      return db('users').insert({ email: user.username, password: passwordHash })
    })
}

function userExists (email, db = connection) {
  console.log('here 6')
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (email, db = connection) {
  console.log('getUserByName')
  return db('users')
    .select('id as id', 'email as email', 'password as hash')
    .where('email', email)
    .first()
}
