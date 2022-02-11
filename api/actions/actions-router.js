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
    try {

    } catch (err) {
        next(err)
    }
})

router.put('/:id', validateActionId, validateActionBody, async (req, res, next) => {
    const { id } = req.params
        try {

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