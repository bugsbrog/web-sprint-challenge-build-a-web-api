const Actions = require('./actions-model')

async function validateActionId(req, res, next) {
    const { id } = req.params
        try {
            const action = await Actions.get(id)
                if (action) {
                    req.action = action
                    next()
                } else {
                    next({
                        status: 404,
                        message: 'There are no actions found with this ID'
                    })
                }
        } catch (err) {
            next(err)
        }
}

function validateAction(req, res, next) {
    const { project_id, description, notes } = req.body
        if (!project_id || !description || !notes) {
            next({
                status: 400,
                message: 'Please add project_id, description AND notes'
            })
        } else {
            next()
        }
}

async function validateActionBody(req, res, next) {
    const { project_id, description, notes, completed } = req.body
        if (!project_id || !description || !notes || completed === undefined) {
            next({
                status: 400,
                message: 'Please put in ALL required fields'
            })
        } else {
            next()
        }
}

module.exports = {
    validateActionId,
    validateAction,
    validateActionBody
}