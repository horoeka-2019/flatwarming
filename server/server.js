const path = require('path')
const express = require('express')

const authRoutes = require('./routes/auth')
const server = express()
const users = require('./routes/users')

server.use(express.json())
server.use('/', authRoutes)
server.use('/api/v1/users', users)
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
