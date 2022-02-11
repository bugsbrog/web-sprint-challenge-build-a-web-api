const express = require('express');
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')
const server = express();

server.use(express.json())

server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

server.use('*', (req, res) => {
    res.send(`<h1>Hello there! Nice to meet you! 😁</h1>`)
})

server.use((err, req, res, next) => { // eslint-disable-line
    console.log('You TOTALLY messed up!')
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;
