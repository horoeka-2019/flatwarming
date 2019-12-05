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
    return db.addDetail(req.body)
        .then(userDetail => res.json(userDetail))
})