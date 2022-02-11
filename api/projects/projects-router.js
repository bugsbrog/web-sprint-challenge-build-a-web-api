const express = require('express')

const Projects = require('./projects-model')
const Actions = require('../actions/actions-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const getProj = await Projects.get()
        res.json(getProj)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
        try {
            const projId = await Projects.get(id)
            res.json(projId)
        } catch (err) {
            next(err)
        }
})

router.post('/', async (req, res, next) => {
    const { name, description } = req.body
        try {
            const createProj = await Projects.insert({ name, description })
            res.status(201).json(createProj)
        } catch (err) {
            next(err)
        }
})

router.put('/:id', async (req, res, next) => {
    const { id } = req.params
    const { name, description, completed } = req.body
        try {
            const updateProj = await Projects.update(id, { name, description, completed })
            res.json(updateProj)
        } catch (err) {
            next(err)
        }
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
        try {

        } catch (err) {
            next(err)
        }
})

router.get('/:id/actions', async (req, res, next) => {
    const { id } = req.params
        try {

        } catch (err) {
            next(err)
        }
})

module.exports = router