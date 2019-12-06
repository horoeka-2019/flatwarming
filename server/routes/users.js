const express = require('express')

const db = require('../db/users')

const router = express.Router()

module.exports = router

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    return db.getUserDetail(id)
        .then(userDetail => res.json(userDetail))
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
})