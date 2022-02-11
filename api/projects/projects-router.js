const express = require('express')
const {
    validateProjectId,
    validateProjectBody
} = require('./projects-middleware')
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

router.get('/:id', validateProjectId, async (req, res, next) => { // eslint-disable-line
    res.json(req.project)
})

router.post('/', validateProjectBody, async (req, res, next) => {
    const { name, description, completed } = req.body
    const createProj = await Projects.insert({ name, description, completed })
        try {
            res.status(201).json(createProj)
        } catch (err) {
            next(err)
        }
})

router.put('/:id', validateProjectId, validateProjectBody, async (req, res, next) => {
    const { id } = req.params
    const { name, description, completed } = req.body
        try {
            const updateProj = await Projects.update(id, { name, description, completed })
            res.json(updateProj)
        } catch (err) {
            next(err)
        }
})

router.delete('/:id', validateProjectId, async (req, res, next) => {
    const { id } = req.params
    const deleteProj = await Projects.remove(id)
        try {
            res.json(deleteProj)
        } catch (err) {
            next(err)
        }
})

router.get('/:id/actions', validateProjectId, async (req, res, next) => {
    const { id } = req.params
    const action = await Projects.getProjectActions(id)
        try {
            res.json(action)
        } catch (err) {
            next(err)
        }
})

module.exports = router