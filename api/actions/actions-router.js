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

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
        try {

        } catch (err) {
            next(err)
        }
})

router.post('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    const { id } = req.params
        try {

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

module.exports = router