const express = require('express');
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')
const server = express();

server.use(express.json())

server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

server.use('*', (req, res) => {
    res.send(`<h1>Hello there! 😁</h1>`)
})

server.use((err, req, res, next) => { // eslint-disable-line
    console.log('You done messed up!')
    res.status(err.status || 500).json({
        message: `WORRY: ${err.message}`
    })
})


module.exports = server;
