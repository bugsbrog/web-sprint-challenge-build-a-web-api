const express = require('express')
const {
    validateActionId,
    validateAction,
    validateActionBody
} = require('./actions-middlware')
const Actions = require('./actions-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const getAction = await Actions.get()
        res.json(getAction)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', validateActionId, async (req, res, next) => { // eslint-disable-line
    res.json(req.action)
})

router.post('/', validateAction, async (req, res, next) => {
    const { project_id, description, notes } = req.body
        try {
            const createAction = await Actions.insert({ project_id, description, notes })
            res.status(201).json(createAction)
        } catch (err) {
            next(err)
        }
})

router.put('/:id', validateActionId, validateActionBody, async (req, res, next) => {
    const { id } = req.params
    const { project_id, description, notes, completed } = req.body
        try {
            const updateAction = await Actions.update(id, { project_id, description, notes, completed })
            res.json(updateAction)
        } catch (err) {
            next(err)
        }
})

router.delete('/:id', validateActionId, async (req, res, next) => {
    const { id } = req.params
        try {

        } catch (err) {
            next(err)
        }
})

module.exports = router