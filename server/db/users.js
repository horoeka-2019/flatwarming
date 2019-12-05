const connection = require('../connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  createUser,
  userExists,
  getUserByName
}

function createUser (user, db = connection) {
  console.log('hahaha createUser')
  return userExists(user.email, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      console.log('passwordHash', passwordHash)
      console.log('user.email', user.email)
      console.log('password', passwordHash)
      return db('users').insert({ email: user.email, password: passwordHash })
    })
}

function userExists (email, db = connection) {
  console.log('userExists!')
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (email, db = connection) {
  console.log('email db', email)
  return db('users')
    .select()
    .where('email', email)
    .first()
}
