const express = require('express')

const db = require('../db/users')

const router = express.Router()

module.exports = router

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    return db.getUserDetail(id)
    .then(console.log('here'))
        // .then(userDetail => res.render('userDetail', userDetail))
        .then(userDetail => res.json(userDetail))
})

router.post('/', (req, res) => {
    
    return db.addAddress(req.body)
    .then(console.log('here'))
        // .then(userDetail => res.render('userDetail', userDetail))
        .then(userDetail => res.json(userDetail))
})