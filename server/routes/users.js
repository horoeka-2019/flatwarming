const express = require('express')

const db = require('../db/users')

const router = express.Router()

module.exports = router

const sendGenericErrorMessage = (res) => {
  res.status(500).send(
    "An Unexpected error has occurred and we'er looking into it"
  )
}

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  return db.getUserDetail(id)
    .then(userDetail => res.json(userDetail))
    .catch(() => sendGenericErrorMessage(res))
})
//done

router.get('/user/:username', (req, res) => {
  const username = req.params.username
  return db.getUserByName(username)
    .then(user => res.json(user))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/register/:id', (req, res) => {
  const id = Number(req.params.id)
  const obj = {}
  obj.id = id
  obj.address = req.body.address
  obj.suburb = req.body.suburb
  obj.names = req.body.names
  obj.powerDay = req.body.powerDay
  obj.waterDay = req.body.waterDay
  obj.wifiDay = req.body.wifiDay
  return db.addDetail(obj)
    .then(userDetail => res.json(userDetail))
    .catch(() => sendGenericErrorMessage(res))
})
//done

router.post('/jobs/:id', (req, res) => {
  const id = Number(req.params.id)
  const newJob = {
    id: req.body.usersId,
    job: req.body.job,
    names: req.body.job,
    dueDay: req.body.dueDay
  }

  return db.addJobs(newJob)
    .then(newJob => res.json(newJob))
    .catch(() => sendGenericErrorMessage(res))
})

// router.post('/setting/:id',(req, res) => {
//     const id = Number(req.params.id)
//     const powerDay=req.body.powerDay
//     const waterDay=req.body.waterDay
//     const wifiDay=req.body.wifiDay

// })

// need to be finished, to edit expense due day.

router.post('/flatmate/:id', (req, res) => {
  const id = Number(req.params.id)
  const names = req.body.names
  const newName = {
    id: id,
    names: names
  }
  return db.addName(newName)
    .then(newName => res.json(newName))
    .catch(() => sendGenericErrorMessage(res))
})
