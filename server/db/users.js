const connection = require('../connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUserDetail,
  addDetail,
  editName
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
      return db('users').insert({ username: user.username, hash: passwordHash })
    })
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .where('username', username)
    .first()
}

function getUserDetail (id, db = connection) {
  return db('users')
          .where('users.id',id)
          .join('rubbishUsers','users.id', 'rubbishUsers.usersId')
            .join('rubbishPlan', 'rubbishUsers.suburb','rubbishPlan.suburb')
          .join('flatmates','users.id', 'flatmates.usersId')
          .join('expense','users.id','expense.usersId')
          .join('jobs', 'users.id','jobs.usersId')
          .select()
          .first()
}

function addAddress (id, address, suburb, db = connection) {
  return db ('rubbishUsers')
    .insert({
      usersId: id,
      address:address,
      suburb:suburb
    })
}

function addName(id,names,db = connection) {
  return db ('flatmates')
    .insert({
      usersId: id,
      names: names
    })
}

function editName(editedName, db = connection) {
  const { id } = editedName
  return db('flatmates')
    .where('id', id)
    .update({
      usersId:id,
      names: editedName.names
    })
    .then(() => getUserDetail(id, db))
}

function addExpenseDay(expense, db = connection) {
  const { powerDay, waterDay, wifiDay } = expense
  return db('expense')
    .insert({
      powerDay: powerDay,
      waterDay: waterDay,
      wifiDay:wifiDay

    })
}

function addDetail(user,db = connection) {
  const {address, suburb, names,expense} = user  
  return db('users')
    .insert({
      address: address,
      suburb: suburb,
    })
    .then(([id])=> 
      addAddress(id, address, suburb,db)
        .then(() => 
          addName(id, names,db)
            .then(()=> 
              addExpenseDay(expense,db)
                .then(() => getUserDetail(id,db)))))
    
}

